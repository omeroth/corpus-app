import re
import base64
import os

# paths
HTML_FILE = os.path.expanduser('~/CORPUS/index.html')
IMAGES_DIR = os.path.expanduser('~/CORPUS/images')

os.makedirs(IMAGES_DIR, exist_ok=True)

with open(HTML_FILE, 'r', encoding='utf-8') as f:
    html = f.read()

# find all base64 image strings
pattern = r'(image\s*:\s*["\`])(data:image/[a-zA-Z]+;base64,([A-Za-z0-9+/=\n]+))(["\`])'
matches = list(re.finditer(pattern, html))

print(f'Found {len(matches)} base64 images')

counter = 1
for match in matches:
    prefix = match.group(1)
    full_data = match.group(2)
    b64_data = match.group(3).replace('\n', '').strip()
    suffix = match.group(4)
    
    # save image file
    filename = f'thinker_{counter}.png'
    filepath = os.path.join(IMAGES_DIR, filename)
    
    try:
        img_data = base64.b64decode(b64_data)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f'Saved: {filename} ({len(img_data) / 1024:.0f} KB)')
        
        # replace in html
        new_value = f'{prefix}images/{filename}{suffix}'
        html = html.replace(match.group(0), new_value, 1)
        counter += 1
    except Exception as e:
        print(f'Error on image {counter}: {e}')
        counter += 1

# save updated html
with open(HTML_FILE, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'\nDone! Extracted {counter-1} images.')
print(f'New index.html size: {os.path.getsize(HTML_FILE) / 1024 / 1024:.1f} MB')
