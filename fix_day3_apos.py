with open('/Users/omeroth/CORPUS/index.html', 'rb') as f:
    content = f.read()

fixes = [
    (b"don't exactly", b"don\\'t exactly"),
    (b"isn't", b"isn\\'t"),
    (b"it's just", b"it\\'s just"),
    (b"Aristotle's", b"Aristotle\\'s"),
    (b"machine's output", b"machine\\'s output"),
    (b"Phronesis (practical wisdom) and the ability to weigh the machine\\'s output", b"Phronesis (practical wisdom) and the ability to weigh the machine\\'s output"),  # already fixed
]

for old, new in fixes:
    if old == new:
        continue
    count = content.count(old)
    if count > 0:
        content = content.replace(old, new)
        print(f"Fixed {count}x: {old[:40]!r}")
    else:
        print(f"Not found: {old[:40]!r}")

with open('/Users/omeroth/CORPUS/index.html', 'wb') as f:
    f.write(content)
print("Done")
