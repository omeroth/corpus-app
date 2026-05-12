with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Fix line 5697 (index 5696) - remove markdown links
line = lines[5696]
print(f"Before 5697: {repr(line[:80])}")
lines[5696] = "  const cdBonus1 = corpusData.weeks.find(function(w) { return w.id === 'bonus1'; });\n"
print(f"After  5697: {repr(lines[5696][:80])}")

# Fix line 5704 (index 5703) - remove markdown links
line = lines[5703]
print(f"Before 5704: {repr(line[:80])}")
lines[5703] = "    days: cdBonus1.days.map(function(d) { return deriveDay(d); }),\n"
print(f"After  5704: {repr(lines[5703][:80])}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.writelines(lines)
print("DONE")
