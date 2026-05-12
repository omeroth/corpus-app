with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Fix user.email broken link
import re
content = re.sub(r'\[user\.email\]\(http[^)]+\)', 'user.email', content)
content = re.sub(r'\[currentUser\.id\]\(http[^)]+\)', 'currentUser.id', content)

count = content.count('user.email')
print(f"user.email appears {count} times")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)
print("Done")
