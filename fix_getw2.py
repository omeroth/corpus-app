with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Line 5696 (index 5695)
print(f"Line 5696: {repr(lines[5695])}")

old_line = "  return [week1, week2, week3, week4, ...oldWeeks.slice(4)];\n"
new_lines = [
    "  const cdBonus1 = corpusData.weeks.find(function(w) { return w.id === 'bonus1'; });\n",
    "  const bonusWeek1 = cdBonus1 ? {\n",
    "    id: 'bonus1',\n",
    "    title: cdBonus1.title,\n",
    "    titleEn: cdBonus1.titleEn,\n",
    "    subtitle: '',\n",
    "    isBonus: true,\n",
    "    days: cdBonus1.days.map(function(d) { return deriveDay(d); }),\n",
    "  } : null;\n",
    "  return [week1, week2].concat(bonusWeek1 ? [bonusWeek1] : []).concat([week3, week4]).concat(oldWeeks.slice(4));\n",
]

if lines[5695] == old_line:
    lines = lines[:5695] + new_lines + lines[5696:]
    with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
        f.writelines(lines)
    print("SUCCESS: Updated getW() return")
else:
    print(f"ERROR: Line content mismatch")
    print(f"Expected: {repr(old_line)}")
    print(f"Got: {repr(lines[5695])}")
