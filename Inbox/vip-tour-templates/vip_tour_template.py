#!/usr/bin/env python3
"""
VIP Tour Brief Template - TechBBQ
=================================
Generates a 2-page printable PDF brief for VIP tours at TechBBQ.

USAGE:
  1. Edit the .json config file with your VIP's details
  2. Run: python3 vip_tour_template.py <config.json> [output.pdf]

If no output path is given, defaults to "vip_tour_brief.pdf".

CONFIG FORMAT:
  See ddis_tour.json for a complete example. All fields are documented inline.
"""

import json
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (KeepTogether, Paragraph, SimpleDocTemplate,
                                Spacer, Table, TableStyle, HRFlowable,
                                PageBreak)

# ============================================================
# DESIGN CONSTANTS - tweak these to change the look globally
# ============================================================

ACCENT      = colors.HexColor("#B5443F")   # muted brick red (rules, accents)
LIGHT_GREY  = colors.HexColor("#F5F5F5")   # context box background
RULE_GREY   = colors.HexColor("#CCCCCC")   # light table grid lines
TEXT_GREY   = colors.HexColor("#666666")   # footer text
DARK_TEXT   = colors.HexColor("#1a1a1a")   # headings
BODY_TEXT   = colors.HexColor("#222222")   # body text
SUBTLE_TEXT = colors.HexColor("#444444")   # small body text
FAINT_TEXT  = colors.HexColor("#888888")   # footnotes

# Page geometry
PAGE_SIZE   = A4
MARGIN_LR   = 14 * mm
MARGIN_TOP  = 14 * mm
MARGIN_BOT  = 12 * mm
CONTENT_W   = PAGE_SIZE[0] - 2 * MARGIN_LR   # 182mm for A4 with 14mm margins

# ============================================================
# STYLES
# ============================================================

def make_styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle("Title", parent=base["Title"], fontSize=16,
            leading=19, alignment=TA_LEFT, spaceAfter=1, textColor=DARK_TEXT),
        "subtitle": ParagraphStyle("Subtitle", parent=base["Normal"], fontSize=8.5,
            leading=11, textColor=TEXT_GREY, spaceAfter=1),
        "h2": ParagraphStyle("H2", parent=base["Heading2"], fontSize=10.5,
            leading=13, spaceBefore=6, spaceAfter=2, textColor=DARK_TEXT),
        "body": ParagraphStyle("Body", parent=base["Normal"], fontSize=8,
            leading=11, spaceAfter=3, textColor=BODY_TEXT),
        "small": ParagraphStyle("Small", parent=base["Normal"], fontSize=7.5,
            leading=10, spaceAfter=2, textColor=SUBTLE_TEXT),
        "bold": ParagraphStyle("Bold", parent=base["Normal"], fontSize=8,
            leading=11, spaceAfter=3, textColor=BODY_TEXT, fontName="Helvetica-Bold"),
        "callout": ParagraphStyle("Callout", parent=base["Normal"], fontSize=8,
            leading=11, spaceAfter=3, textColor=colors.HexColor("#333333"),
            leftIndent=6, rightIndent=6),
        "note": ParagraphStyle("Note", parent=base["Normal"], fontSize=7.5,
            leading=10, textColor=FAINT_TEXT, spaceAfter=1),
    }

# ============================================================
# HELPERS
# ============================================================

def hr(color=RULE_GREY, thickness=0.5, space=2):
    return HRFlowable(width="100%", thickness=thickness, color=color, spaceAfter=space)

def styled_table(data, col_widths_mm, header_row=True, bg=None):
    style_cmds = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LEFTPADDING", (0, 0), (-1, -1), 3),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3),
    ]
    if header_row:
        style_cmds += [
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("LINEBELOW", (0, 0), (-1, 0), 0.75, colors.HexColor("#333333")),
            ("LINEBELOW", (0, 1), (-1, -2), 0.25, RULE_GREY),
        ]
    else:
        style_cmds += [
            ("LINEBELOW", (0, 0), (-1, -2), 0.25, RULE_GREY),
        ]
    if bg:
        style_cmds += [
            ("BACKGROUND", (0, 0), (-1, -1), bg),
            ("BOX", (0, 0), (-1, -1), 0.5, RULE_GREY),
            ("INNERGRID", (0, 0), (-1, -1), 0.25, RULE_GREY),
        ]
    t = Table(data, colWidths=[w * mm for w in col_widths_mm])
    t.setStyle(TableStyle(style_cmds))
    return t

def draw_furniture(canvas, doc, footer_text):
    canvas.saveState()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(TEXT_GREY)
    canvas.drawString(doc.leftMargin, 7 * mm, footer_text)
    canvas.drawRightString(doc.pagesize[0] - doc.rightMargin, 7 * mm, f"Page {doc.page}")
    canvas.restoreState()

# ============================================================
# PDF BUILDER
# ============================================================

def build_pdf(config, output_path):
    s = make_styles()
    P = lambda txt, style="body": Paragraph(txt, s[style])
    PS = lambda txt: Paragraph(txt, s["small"])

    footer = config.get("footer", "VIP Tour Brief")

    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=PAGE_SIZE,
        leftMargin=MARGIN_LR, rightMargin=MARGIN_LR,
        topMargin=MARGIN_TOP, bottomMargin=MARGIN_BOT,
        title=f"{config['title']} - TechBBQ",
        author=config.get("author", ""),
    )

    story = []

    # ---- PAGE 1: ON-THE-GO GUIDE ----

    story.append(P(config["title"], "title"))
    story.append(P(config["subtitle"], "subtitle"))
    story.append(Spacer(1, 1.5 * mm))
    story.append(hr(ACCENT, 1.2, 3))

    # Quick Reference table
    story.append(P("Quick Reference", "h2"))
    story.append(hr())

    ref = config["quick_reference"]
    ref_header = [PS(f"<b>{h}</b>") for h in ref["headers"]]
    ref_rows = []
    for row in ref["rows"]:
        ref_rows.append([PS(cell) for cell in row])
    story.append(styled_table([ref_header] + ref_rows, ref["col_widths"]))
    story.append(Spacer(1, 2 * mm))

    # Itinerary
    story.append(P("Itinerary", "h2"))
    story.append(hr())

    for stop in config["itinerary"]:
        time_label = stop["time"]
        stop_title = stop["title"]
        stop_body = stop["body"]
        block = [
            P(f"<b>{time_label}</b> &nbsp;|&nbsp; {stop_title}", "bold"),
            P(stop_body, "body"),
            Spacer(1, 1 * mm),
        ]
        story.append(KeepTogether(block))

    # ---- PAGE 2: DETAILED OVERVIEW ----

    story.append(PageBreak())

    story.append(P(config["title"], "title"))
    story.append(P(config["subtitle"], "subtitle"))
    story.append(Spacer(1, 1.5 * mm))
    story.append(hr(ACCENT, 1.2, 3))

    # Who & Context
    story.append(P("Who & Context", "h2"))
    story.append(hr())

    ctx = config["context"]
    ctx_rows = []
    for row in ctx["rows"]:
        ctx_rows.append([PS(f"<b>{row[0]}</b>"), PS(row[1])])
    story.append(styled_table(ctx_rows, ctx["col_widths"], header_row=False, bg=LIGHT_GREY))
    story.append(Spacer(1, 2 * mm))

    # Quick Run-Down
    story.append(P("Quick Run-Down", "h2"))
    story.append(hr())

    for para in config["run_down"]:
        story.append(P(para, "body"))
        story.append(Spacer(1, 0.5 * mm))
    story.append(Spacer(1, 1 * mm))

    # Key Contacts
    story.append(P("Key Contacts", "h2"))
    story.append(hr())

    contacts = config["contacts"]
    contacts_header = [PS(f"<b>{h}</b>") for h in contacts["headers"]]
    contacts_rows = []
    for row in contacts["rows"]:
        contacts_rows.append([PS(cell) for cell in row])
    story.append(styled_table([contacts_header] + contacts_rows, contacts["col_widths"]))
    story.append(Spacer(1, 2 * mm))

    # Closing note
    if config.get("closing_note"):
        story.append(hr(ACCENT, 0.5, 2))
        story.append(P(config["closing_note"], "callout"))

    if config.get("closing_tagline"):
        story.append(Spacer(1, 0.5 * mm))
        story.append(P(config["closing_tagline"], "note"))

    # Build
    on_page = lambda canvas, doc: draw_furniture(canvas, doc, footer)
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)

    # Verify
    from pypdf import PdfReader
    reader = PdfReader(str(output_path))
    print(f"Generated: {output_path} ({len(reader.pages)} page(s))")

# ============================================================
# MAIN
# ============================================================

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 vip_tour_template.py <config.json> [output.pdf]")
        sys.exit(1)

    config_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("vip_tour_brief.pdf")

    with open(config_path) as f:
        config = json.load(f)

    build_pdf(config, output_path)
