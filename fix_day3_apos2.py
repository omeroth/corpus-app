with open('/Users/omeroth/CORPUS/index.html', 'rb') as f:
    content = f.read()

# Fix Hebrew letter + apostrophe (option labels like א' and ג')
fixes = [
    ("(א')".encode('utf-8'), "(א\\')".encode('utf-8')),
    ("(ג')".encode('utf-8'), "(ג\\')".encode('utf-8')),
    ("Aristotle\\'s \"Mean\"".encode('utf-8'), None),  # check if already fixed
]

for old, new in fixes:
    if new is None:
        print(f"Check: {old!r} present: {old in content}")
        continue
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        print(f"Fixed {count}x: {old!r}")
    else:
        print(f"Not found: {old!r}")

with open('/Users/omeroth/CORPUS/index.html', 'wb') as f:
    f.write(content)
print("Done")
