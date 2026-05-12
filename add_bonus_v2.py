with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Find line 4920 (index 4919) which is "  },"
# and insert bonus week after it
bonus_lines = [
    '  ,\n',
    '  {\n',
    "    id: 'bonus1',\n",
    "    title: '\u05e4\u05d9\u05dc\u05d5\u05e1\u05d5\u05e4\u05d9\u05d4 \u05e9\u05dc \u05d4\u05e2\u05ea\u05d9\u05d3',\n",
    "    titleEn: 'Philosophy of the Future',\n",
    "    subtitle: '\u05db\u05e9\u05d4\u05d0\u05dc\u05d2\u05d5\u05e8\u05d9\u05ea\u05dd \u05e4\u05d5\u05d2\u05e9 \u05d0\u05ea \u05d4\u05d0\u05ea\u05d9\u05e7\u05d4',\n",
    "    subtitleEn: 'When the Algorithm Meets Ethics',\n",
    '    isBonus: true,\n',
    '    xp: 100,\n',
    '    days: [\n',
    "      { id: 1, title: '\u05e7\u05d0\u05e0\u05d8: \u05d4\u05d0\u05dd \u05de\u05d5\u05ea\u05e8 \u05dc-AI \u05dc\u05e9\u05e7\u05e8?', titleEn: 'Kant: Is AI Allowed to Lie?', thinker: '\u05e2\u05de\u05e0\u05d5\u05d0\u05dc \u05e7\u05d0\u05e0\u05d8', thinkerEn: 'Immanuel Kant', thinkerId: 'kant', xp: 50, sections: [] },\n",
    "      { id: 2, title: '\u05de\u05d9\u05dc: \u05d1\u05de\u05d9 \u05d4\u05de\u05db\u05d5\u05e0\u05d4 \u05e6\u05e8\u05d9\u05db\u05d4 \u05dc\u05e4\u05d2\u05d5\u05e2?', titleEn: 'Mill: Who Should the Machine Hurt?', thinker: \"\u05d2'\u05d5\u05df \u05e1\u05d8\u05d9\u05d5\u05d0\u05e8\u05d8 \u05de\u05d9\u05dc\", thinkerEn: 'John Stuart Mill', thinkerId: 'mill', xp: 50, sections: [] },\n",
    "      { id: 3, title: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5: \u05db\u05e9\u05d4-AI \u05d8\u05d5\u05e2\u05d4 - \u05de\u05d9 \u05d0\u05d7\u05e8\u05d0\u05d9?', titleEn: 'Aristotle: When AI Errs - Who is Responsible?', thinker: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5', thinkerEn: 'Aristotle', thinkerId: 'aristotle', xp: 50, sections: [] },\n",
    "      { id: 4, title: '\u05e0\u05d9\u05d8\u05e9\u05d4: \u05de\u05d9 \u05de\u05d7\u05dc\u05d9\u05d8 \u05de\u05d4 \u05d4\u05e2\u05e8\u05db\u05d9\u05dd \u05e9\u05dc \u05d4-AI?', titleEn: 'Nietzsche: Who Decides the Values of AI?', thinker: '\u05e4\u05e8\u05d9\u05d3\u05e8\u05d9\u05da \u05e0\u05d9\u05d8\u05e9\u05d4', thinkerEn: 'Friedrich Nietzsche', thinkerId: 'nietzsche', xp: 50, sections: [] },\n",
    "      { id: 5, title: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1: \u05d4\u05d0\u05dd AI \u05d9\u05db\u05d5\u05dc \u05dc\u05e2\u05d6\u05d5\u05e8 \u05dc\u05e0\u05d5 \u05dc\u05d7\u05e9\u05d5\u05d1?', titleEn: 'Socrates: Can AI Help Us Think?', thinker: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1', thinkerEn: 'Socrates', thinkerId: 'socrates', xp: 50, sections: [] }\n",
    '    ]\n',
    '  }\n',
]

# Line 4920 is index 4919
# After "  }," which closes week 2, we need to change it to "  }," then add bonus
insert_after = 4919  # 0-indexed, line 4920

# Verify we're at the right place
print(f"Line 4920 content: {repr(lines[insert_after])}")
print(f"Line 4921 content: {repr(lines[insert_after+1])}")
print(f"Line 4922 content: {repr(lines[insert_after+2])}")

# Insert bonus week after line 4920
# First change the closing "  }," to "  }," (no change needed, already has comma)
# Then insert before "  {" of week 3
new_lines = lines[:insert_after+1] + bonus_lines + lines[insert_after+1:]

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.writelines(new_lines)

print(f"SUCCESS: Inserted {len(bonus_lines)} lines after line 4920")

# Now fix getW()
with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

old_return = '  return [week1, week2, week3, week4, ...oldWeeks.slice(4)];'
new_return = """  const cdBonus1 = corpusData.weeks.find(function(w) { return w.id === 'bonus1'; });
  const bonusWeek1 = cdBonus1 ? {
    id: 'bonus1',
    title: cdBonus1.title,
    titleEn: cdBonus1.titleEn,
    subtitle: '',
    isBonus: true,
    days: cdBonus1.days.map(function(d) { return deriveDay(d); }),
  } : null;
  return [week1, week2].concat(bonusWeek1 ? [bonusWeek1] : []).concat([week3, week4]).concat(oldWeeks.slice(4));"""

if old_return in content:
    content = content.replace(old_return, new_return)
    print("SUCCESS: Updated getW() return")
else:
    print("ERROR: Could not find getW() return")
    idx = content.find('return [week1, week2')
    if idx > 0:
        print(f"Found at {idx}: {repr(content[idx:idx+80])}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("ALL DONE")
