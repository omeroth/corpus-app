with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Fix the week indices - use find() instead of fixed indices
fixes = [
    ("const cdWeek1  = corpusData.weeks[0];", "const cdWeek1  = corpusData.weeks.find(function(w) { return w.id === 1; });"),
    ("const cdWeek2  = corpusData.weeks[1];", "const cdWeek2  = corpusData.weeks.find(function(w) { return w.id === 2; });"),
    ("const cdWeek3  = corpusData.weeks[2];", "const cdWeek3  = corpusData.weeks.find(function(w) { return w.id === 3; });"),
    ("const cdWeek4  = corpusData.weeks[3];", "const cdWeek4  = corpusData.weeks.find(function(w) { return w.id === 4; });"),
]

for old, new in fixes:
    if old in content:
        content = content.replace(old, new)
        print(f"Fixed: {old[:50]}")
    else:
        print(f"NOT FOUND: {old[:50]}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("DONE")
