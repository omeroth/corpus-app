with open('/Users/omeroth/CORPUS/index.html', 'rb') as f:
    content = f.read()

# Fix ג'נבה - apostrophe in Hebrew word for Geneva breaks single-quoted JS string
old = 'בג\u2019נבה'.encode('utf-8')  # try unicode right single quote first
new = 'בג\u2019נבה'.encode('utf-8')
print(f'Unicode right quote found: {old in content}')

# Try ASCII apostrophe
old2 = "בג'נבה".encode('utf-8')
new2 = "בג\\'נבה".encode('utf-8')
print(f'ASCII apostrophe found: {old2 in content}')
if old2 in content:
    content = content.replace(old2, new2, 1)
    print('Fixed')

with open('/Users/omeroth/CORPUS/index.html', 'wb') as f:
    f.write(content)
