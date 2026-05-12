with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Find and fix line with state.userEmail broken link
fixed = 0
for i, line in enumerate(lines):
    if 'state.userEmail' in line and 'user.email' in line and '](http' in line:
        print(f"Found broken line {i+1}: {repr(line[:80])}")
        lines[i] = "    state.userEmail = user.email || '';\n"
        print(f"Fixed to: {repr(lines[i])}")
        fixed += 1

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.writelines(lines)

print(f"Fixed {fixed} lines")
