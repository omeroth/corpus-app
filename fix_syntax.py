with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Fix orphaned direction: lines outside CSS rules
import re

# Fix "direction: ltr;\n  .something" pattern - remove the orphaned line
content = re.sub(r'\n\s*direction:\s*ltr;\s*\n(\s*\.)', r'\n\1', content)
content = re.sub(r'\n\s*direction:\s*rtl;\s*\n(\s*\.)', r'\n\1', content)
content = re.sub(r'\n\s*flex-direction:\s*column;\s*\n(\s*\.)', r'\n\1', content)

# Count potential issues
issues = re.findall(r'\n\s+direction:\s*(ltr|rtl);\s*\n\s+[a-z]', content)
print(f"Remaining issues: {len(issues)}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)
print("Done")
