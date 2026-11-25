from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
index_path = BASE_DIR / "index.html"
output_dir = BASE_DIR / "output"
output_dir.mkdir(parents=True, exist_ok=True)
output_path = output_dir / "portfolio_rgb_3d.html"

html = index_path.read_text(encoding="utf-8")
output_path.write_text(html, encoding="utf-8")
print(f"Created: {output_path} ({output_path.stat().st_size} bytes)")