with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

line = lines[7804]
print(f"Line 7805 repr: {repr(line)}")
print(f"Length: {len(line)}")
print(f"Chars 20-50: {[ord(c) for c in line[20:50]]}")
