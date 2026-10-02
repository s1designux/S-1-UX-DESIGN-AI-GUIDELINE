#!/usr/bin/env python3
"""
capture-poc — 대응표(s1-mapping.json)의 부품마다 POC 화면을 넓게 찍어 확인 요청서에 넣을 그림을 만든다.
--------------------------------------------------------------------------
  python3 ai/scripts/capture-poc.py <POC폴더>/s1-mapping.json
  python3 ai/scripts/capture-poc.py --check      캡처 도구가 준비됐는지만 본다(준비됨 0 · 없음 3)

  · 항목마다 그 부품을 빨간 테두리로 표시하고, 주변이 보이게 넓게 잘라 찍는다 → s1-captures/<id>.png
  · 화면마다 전체 모습에 모든 항목 번호를 붙여 찍는다 → s1-captures/screen-<n>.png
  · 찍은 그림 경로를 대응표(poc.image · screens)에 적어 넣는다. 그다음 review-request.mjs 를 돌리면 요청서에 들어간다.

어디를 찍을지: 항목의 "selector"(CSS 선택자, 필요하면 "nth" — 0부터) 로 찾는다.
화면 주소: 항목의 "url" 이 있으면 그 주소(실행 중인 개발 서버 등), 없으면 대응표 옆의 "file".
필요한 것: Playwright — pip install playwright && python3 -m playwright install chromium
"""
import json
import pathlib
import sys

INSTALL = "pip install playwright && python3 -m playwright install chromium"

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print(f"캡처 도구 없음 — 설치: {INSTALL}")
    sys.exit(3)

if "--check" in sys.argv:
    # 설치만 되고 브라우저를 안 받은 경우도 있어 실제로 한 번 띄워 본다.
    try:
        with sync_playwright() as pw:
            pw.chromium.launch().close()
    except Exception:
        print(f"캡처 도구 없음(브라우저 미설치) — 설치: python3 -m playwright install chromium")
        sys.exit(3)
    print("캡처 도구 준비됨")
    sys.exit(0)

if len(sys.argv) < 2:
    sys.exit("대응표 파일을 알려주세요.  예: python3 ai/scripts/capture-poc.py poc/s1-mapping.json")

mapping_file = pathlib.Path(sys.argv[1]).resolve()
base = mapping_file.parent
mapping = json.loads(mapping_file.read_text(encoding="utf-8"))
out_dir = base / "s1-captures"
out_dir.mkdir(exist_ok=True)

PAD_X, PAD_Y, MIN_W, MIN_H = 280, 180, 760, 380
VIEWPORT = {"width": 1440, "height": 900}

# 표시는 캡처 그림에만 들어가는 덧칠이다(POC 화면을 고치지 않는다).
MARK = """
(([els, label, color]) => {
  const boxes = [];
  for (const el of els) {
    const r = el.getBoundingClientRect();
    const box = document.createElement('div');
    box.setAttribute('data-s1-capture-mark', '');
    Object.assign(box.style, { position: 'absolute', left: (r.left + scrollX - 4) + 'px', top: (r.top + scrollY - 4) + 'px',
      width: (r.width + 8) + 'px', height: (r.height + 8) + 'px', border: '3px solid ' + color, borderRadius: '6px',
      boxSizing: 'border-box', zIndex: 2147483646, pointerEvents: 'none' });
    const tag = document.createElement('div');
    tag.textContent = label;
    Object.assign(tag.style, { position: 'absolute', left: '-3px', top: '-24px', background: color, color: '#fff',
      font: '700 12px/20px sans-serif', padding: '0 8px', borderRadius: '4px', whiteSpace: 'nowrap' });
    box.appendChild(tag);
    document.body.appendChild(box);
    boxes.push({ x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height });
  }
  return boxes;
})
"""
CLEAR = "() => document.querySelectorAll('[data-s1-capture-mark]').forEach((n) => n.remove())"


def page_address(item):
    if item.get("url"):
        return item["url"]
    return (base / item["file"]).resolve().as_uri()


def find(page, item):
    elements = page.query_selector_all(item["selector"])
    if not elements:
        return []
    if "nth" in item:
        n = item["nth"]
        return [elements[n]] if n < len(elements) else []
    return elements  # 같은 부품이 여러 번 나오면 모두 표시한다(잘라 찍는 기준은 첫 번째)


done, missing = [], []
with sync_playwright() as pw:
    browser = pw.chromium.launch()
    page = browser.new_page(viewport=VIEWPORT, device_scale_factor=2)
    screens = {}
    for item in mapping.get("items", []):
        if not item.get("selector") or not (item.get("file") or item.get("url")):
            missing.append(f'{item.get("id")}: selector·file(또는 url)이 없어 찍지 못함')
            continue
        address = page_address(item)
        screens.setdefault(address, {"name": item.get("screen") or address, "items": []})["items"].append(item)

    for n, (address, screen) in enumerate(screens.items(), start=1):
        page.goto(address)
        page.wait_for_load_state("networkidle")
        size = page.evaluate("() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight })")
        # 항목마다 넓게
        for item in screen["items"]:
            page.evaluate(CLEAR)
            els = find(page, item)
            if not els:
                missing.append(f'{item["id"]}: "{item["selector"]}" 를 화면에서 찾지 못함')
                continue
            boxes = page.evaluate(MARK, [els, item["id"], "#E50533"])
            b = boxes[0]
            w = max(b["w"] + PAD_X * 2, MIN_W)
            h = max(b["h"] + PAD_Y * 2, MIN_H)
            x = max(0, min(b["x"] + b["w"] / 2 - w / 2, size["w"] - w))
            y = max(0, min(b["y"] + b["h"] / 2 - h / 2, size["h"] - h))
            clip = {"x": x, "y": y, "width": min(w, size["w"]), "height": min(h, size["h"])}
            file = out_dir / f'{item["id"]}.png'
            page.screenshot(path=str(file), clip=clip, full_page=True)
            item.setdefault("poc", {})["image"] = str(file.relative_to(base))
            done.append(item["id"])
        # 화면 전체에 번호 붙여서
        page.evaluate(CLEAR)
        for item in screen["items"]:
            els = find(page, item)
            if els:
                page.evaluate(MARK, [els, item["id"], "#E50533"])
        overview = out_dir / f"screen-{n}.png"
        page.screenshot(path=str(overview), full_page=True)
        mapping.setdefault("screens", [])
        mapping["screens"] = [s for s in mapping["screens"] if s.get("name") != screen["name"]]
        mapping["screens"].append({"name": screen["name"], "image": str(overview.relative_to(base))})
    browser.close()

mapping_file.write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"찍은 부품 {len(done)}개 · 화면 {len(screens)}장 → {out_dir.relative_to(base)}/")
for line in missing:
    print(f"  ⚠ {line}")
