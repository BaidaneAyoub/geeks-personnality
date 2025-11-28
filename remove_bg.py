import os
from PIL import Image

def remove_background(image_path):
    try:
        print(f"Processing {image_path}...")
        img = Image.open(image_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        # Assume white background (255, 255, 255) with some tolerance
        tolerance = 10
        for item in datas:
            if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(image_path, "PNG")
        print(f"Successfully processed {image_path}")
    except Exception as e:
        print(f"Failed to process {image_path}: {e}")

files = [
    "src/assets/characters/istj.png"
]

base_dir = "y:/OneDrive/Desktop/test page updated"

for file in files:
    full_path = os.path.join(base_dir, file)
    if os.path.exists(full_path):
        # Increase tolerance slightly to catch compressed artifacts
        remove_background(full_path)
    else:
        print(f"File not found: {full_path}")
