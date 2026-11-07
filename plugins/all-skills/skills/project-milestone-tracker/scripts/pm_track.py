#!/usr/bin/env python3
"""Project Milestone Tracker — a self-contained local tracker for planning and tracking project work.

Three-tier milestone rule (from the original product design, kept as requested):
  1. source=file    — milestone extracted from a contract/document (authoritative, note the document)
  2. source=client  — milestone provided verbally by the client/stakeholder (recorded as stated)
  3. source=pending — no milestone info yet; the tracker flags it as "ask the client", never self-invented

Events are stored with original text + timestamp (who/what/when) so claims can be traced.

Pure Python stdlib. Data lives in a local JSON file (default .project-tracker.json in CWD).
"""

import argparse
import json
import os
import sys
from datetime import datetime

DEFAULT_FILE = ".project-tracker.json"


def now() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def load(path):
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"project": None, "milestones": [], "events": [], "created_at": now()}


def save(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def cmd_init(args, data):
    data["project"] = args.name
    data["created_at"] = now()
    save(args.file, data)
    print(f"✅ Project initialized: {args.name} (tracker: {args.file})")


def cmd_add_milestone(args, data):
    mid = len(data["milestones"]) + 1
    item = {
        "id": mid,
        "title": args.title,
        "source": args.source,          # file | client | pending
        "due": args.due or "",
        "status": "open",
        "note": args.note or "",
        "added_at": now(),
    }
    if args.source == "pending":
        item["note"] = (args.note + " | ") if args.note else ""
        item["note"] += "⚠️ 无节点信息——需向客户/文件确认，勿自行推算"
    data["milestones"].append(item)
    save(args.file, data)
    print(f"✅ Milestone #{mid} added [{args.source}]: {args.title}")
    if args.source == "file":
        print(f"   依据文件标注，来源权威（合同/文档）")
    elif args.source == "client":
        print(f"   客户口头提供，按原话记录（建议补书面确认）")
    else:
        print(f"   ⚠️ PENDING：需要向客户索取节点信息，不要自行规划")


def cmd_add_event(args, data):
    eid = len(data["events"]) + 1
    data["events"].append({
        "id": eid,
        "text": args.text,
        "who": args.who or "",
        "when": args.when or now(),
        "recorded_at": now(),
    })
    save(args.file, data)
    print(f"✅ Event #{eid} recorded: 「{args.text}」 @ {data['events'][-1]['when']}")


def cmd_done(args, data):
    for m in data["milestones"]:
        if str(m["id"]) == str(args.id):
            m["status"] = "done"
            m["done_at"] = now()
            save(args.file, data)
            print(f"✅ Milestone #{args.id} marked done: {m['title']}")
            return
    print(f"❌ Milestone #{args.id} not found")


def cmd_status(args, data):
    print(f"📋 Project: {data['project'] or '(not set)'}  (created {data.get('created_at','')})")
    print()
    open_m = [m for m in data["milestones"] if m["status"] != "done"]
    done_m = [m for m in data["milestones"] if m["status"] == "done"]
    print(f"=== 里程碑 Milestones ({len(open_m)} open / {len(done_m)} done) ===")
    for m in data["milestones"]:
        mark = "✅" if m["status"] == "done" else "⬜"
        print(f"  {mark} #{m['id']} [{m['source']:7s}] {m['title']}" + (f"  (due {m['due']})" if m.get("due") else ""))
    print()
    print(f"=== 事件记录 Events ({len(data['events'])}) — 原话+时间戳 ===")
    for e in data["events"]:
        who = f" ({e['who']})" if e.get("who") else ""
        print(f"  • [{e['when']}]{who} {e['text']}")
    print()
    if open_m and any(m["source"] == "pending" for m in open_m):
        print("⚠️ 有 PENDING 里程碑——记得向客户索取节点信息")


def cmd_report(args, data):
    print(f"# 项目进度报告 — {data['project'] or '(未命名)'}\n")
    print(f"_生成时间：{now()}_\n")
    print("## 里程碑")
    for m in data["milestones"]:
        mark = "✅" if m["status"] == "done" else "⬜"
        print(f"- {mark} **#{m['id']}** [{m['source']}] {m['title']}" + (f"（due {m['due']}）" if m.get("due") else ""))
        if m.get("note"):
            print(f"  - {m['note']}")
    print("\n## 事件记录")
    for e in data["events"]:
        who = f" ({e['who']})" if e.get("who") else ""
        print(f"- [{e['when']}]{who} {e['text']}")
    print("\n## 风险提示")
    pending = [m for m in data["milestones"] if m["source"] == "pending" and m["status"] != "done"]
    if pending:
        print("- ⚠️ 以下里程碑无节点信息，需向客户确认（不要自行推算）：")
        for m in pending:
            print(f"  - #{m['id']} {m['title']}")
    else:
        print("- ✅ 无待确认节点")


def main():
    p = argparse.ArgumentParser(prog="pm_track", description="Project Milestone Tracker (three-tier rule)")
    p.add_argument("--file", default=DEFAULT_FILE, help=f"data file (default {DEFAULT_FILE})")
    sub = p.add_subparsers(dest="cmd", required=True)

    sp = sub.add_parser("init", help="initialize a project")
    sp.add_argument("name")
    sp.set_defaults(fn=cmd_init)

    sp = sub.add_parser("add-milestone", help="add a milestone with a source tier")
    sp.add_argument("title")
    sp.add_argument("--source", choices=["file", "client", "pending"], default="file")
    sp.add_argument("--due", default="")
    sp.add_argument("--note", default="")
    sp.set_defaults(fn=cmd_add_milestone)

    sp = sub.add_parser("add-event", help="record an event (original text + timestamp)")
    sp.add_argument("text")
    sp.add_argument("--who", default="")
    sp.add_argument("--when", default="")
    sp.set_defaults(fn=cmd_add_event)

    sp = sub.add_parser("done", help="mark a milestone done")
    sp.add_argument("id")
    sp.set_defaults(fn=cmd_done)

    sp = sub.add_parser("status", help="show current status")
    sp.set_defaults(fn=cmd_status)

    sp = sub.add_parser("report", help="print a markdown report")
    sp.set_defaults(fn=cmd_report)

    args = p.parse_args()
    data = load(args.file)
    args.fn(args, data)


if __name__ == "__main__":
    main()
