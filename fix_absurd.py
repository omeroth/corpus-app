with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

old = 'say: "That\u2019s absurd."'
new = 'say: "That\u2019s absurd."'

# Check what's actually in the file
idx = content.find('absurd')
if idx >= 0:
    snippet = content[idx-30:idx+30]
    print(repr(snippet))

# The apostrophe in "That's" - find it precisely
old2 = "say: \"That\u2019s absurd.\""
print(f"Unicode apostrophe found: {old2 in content}")

old3 = 'say: "That' + chr(39) + 's absurd."'
print(f"ASCII apostrophe found: {old3 in content}")
if old3 in content:
    new3 = 'say: "That\\' + chr(39) + 's absurd."'
    content = content.replace(old3, new3, 1)
    print("Fixed!")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)
