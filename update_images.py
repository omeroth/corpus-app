import os
import re

HTML_FILE = os.path.expanduser('~/CORPUS/index.html')
IMAGES_DIR = os.path.expanduser('~/CORPUS/images')

with open(HTML_FILE, 'r', encoding='utf-8') as f:
    html = f.read()

# get all image files in images/ folder
image_files = [f for f in os.listdir(IMAGES_DIR) if f.endswith('.png')]
print(f'Found {len(image_files)} images in folder: {image_files}')

changes = 0
for filename in image_files:
    name = filename.replace('.png', '')
    new_ref = f'images/{filename}'
    
    # replace any base64 data URI
    pattern_base64 = r'(image\s*:\s*["`\'])(data:image/[^"\'`]+)(["`\'])'
    
    # replace old external reference with any path containing the name
    pattern_old = r'(image\s*:\s*["`\'])([^"\'`]*' + re.escape(name) + r'[^"\'`]*)(["`\'])'
    
    # try replacing old external reference
    new_html, n = re.subn(pattern_old, lambda m: f'{m.group(1)}{new_ref}{m.group(3)}', html)
    if n > 0:
        html = new_html
        print(f'Updated reference for {filename}')
        changes += n

with open(HTML_FILE, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'\nDone! Made {changes} changes.')
print(f'index.html size: {os.path.getsize(HTML_FILE) / 1024 / 1024:.1f} MB')
