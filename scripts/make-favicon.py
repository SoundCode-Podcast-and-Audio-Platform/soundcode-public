from PIL import Image
from pathlib import Path

src = Image.open(r"public/logo-cyan.png").convert("RGBA")


def make_icon(size: int, pad_ratio: float = 0.18) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (6, 6, 11, 255))  # #06060b
    max_side = int(size * (1 - 2 * pad_ratio))
    logo = src.copy()
    logo.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    x = (size - logo.width) // 2
    y = (size - logo.height) // 2
    canvas.paste(logo, (x, y), logo)
    return canvas


app = Path("app")
make_icon(512).save(app / "icon.png", optimize=True)
make_icon(180).save(app / "apple-icon.png", optimize=True)
make_icon(32).save(app / "favicon.ico", format="ICO")

print("wrote app/icon.png, app/apple-icon.png, app/favicon.ico")
