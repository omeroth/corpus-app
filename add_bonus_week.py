with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Step 1: Fix any broken markdown links first
import re
content = re.sub(r'\[([a-zA-Z0-9_.]+)\]\(https?://[^)]+\)', r'\1', content)

# Step 2: Find where week 3 starts in corpusData to insert bonus before it
# Look for the weeks array - week 3 has id:3
week3_marker = None
candidates = [
    "      { id:3,",
    "    { id: 3,",  
    "    {id:3,",
]
for c in candidates:
    if c in content:
        week3_marker = c
        break

if week3_marker:
    idx = content.find(week3_marker)
    # Insert bonus week before week 3
    bonus = """,
  {
    id: 'bonus1',
    title: '\u05e4\u05d9\u05dc\u05d5\u05e1\u05d5\u05e4\u05d9\u05d4 \u05e9\u05dc \u05d4\u05e2\u05ea\u05d9\u05d3',
    titleEn: 'Philosophy of the Future',
    isBonus: true,
    xp: 100,
    days: [
      { id: 1, title: '\u05e7\u05d0\u05e0\u05d8: \u05d4\u05d0\u05dd \u05de\u05d5\u05ea\u05e8 \u05dc-AI \u05dc\u05e9\u05e7\u05e8?', titleEn: 'Kant: Is AI Allowed to Lie?', thinker: '\u05e2\u05de\u05e0\u05d5\u05d0\u05dc \u05e7\u05d0\u05e0\u05d8', thinkerEn: 'Immanuel Kant', thinkerId: 'kant', xp: 50, sections: [] },
      { id: 2, title: '\u05de\u05d9\u05dc: \u05d1\u05de\u05d9 \u05d4\u05de\u05db\u05d5\u05e0\u05d4 \u05e6\u05e8\u05d9\u05db\u05d4 \u05dc\u05e4\u05d2\u05d5\u05e2?', titleEn: 'Mill: Who Should the Machine Hurt?', thinker: "\u05d2'\u05d5\u05df \u05e1\u05d8\u05d9\u05d5\u05d0\u05e8\u05d8 \u05de\u05d9\u05dc", thinkerEn: 'John Stuart Mill', thinkerId: 'mill', xp: 50, sections: [] },
      { id: 3, title: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5: \u05db\u05e9\u05d4-AI \u05d8\u05d5\u05e2\u05d4 - \u05de\u05d9 \u05d0\u05d7\u05e8\u05d0\u05d9?', titleEn: 'Aristotle: When AI Errs - Who is Responsible?', thinker: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5', thinkerEn: 'Aristotle', thinkerId: 'aristotle', xp: 50, sections: [] },
      { id: 4, title: '\u05e0\u05d9\u05d8\u05e9\u05d4: \u05de\u05d9 \u05de\u05d7\u05dc\u05d9\u05d8 \u05de\u05d4 \u05d4\u05e2\u05e8\u05db\u05d9\u05dd \u05e9\u05dc \u05d4-AI?', titleEn: 'Nietzsche: Who Decides the Values of AI?', thinker: '\u05e4\u05e8\u05d9\u05d3\u05e8\u05d9\u05da \u05e0\u05d9\u05d8\u05e9\u05d4', thinkerEn: 'Friedrich Nietzsche', thinkerId: 'nietzsche', xp: 50, sections: [] },
      { id: 5, title: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1: \u05d4\u05d0\u05dd AI \u05d9\u05db\u05d5\u05dc \u05dc\u05e2\u05d6\u05d5\u05e8 \u05dc\u05e0\u05d5 \u05dc\u05d7\u05e9\u05d5\u05d1?', titleEn: 'Socrates: Can AI Help Us Think?', thinker: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1', thinkerEn: 'Socrates', thinkerId: 'socrates', xp: 50, sections: [] }
    ]
  }
"""
    content = content[:idx] + bonus + content[idx:]
    print("SUCCESS: Inserted bonus week into corpusData")
else:
    print("ERROR: Could not find week 3 marker in corpusData")

# Step 3: Fix getW() return
old_return = '  return [week1, week2, week3, week4, ...oldWeeks.slice(4)];'
new_return = '''  const cdBonus1 = corpusData.weeks.find(function(w) { return w.id === "bonus1"; });
  const bonusWeek1 = cdBonus1 ? {
    id: "bonus1",
    title: cdBonus1.title,
    titleEn: cdBonus1.titleEn,
    subtitle: "",
    isBonus: true,
    days: cdBonus1.days.map(function(d) { return deriveDay(d); }),
  } : null;
  return [week1, week2].concat(bonusWeek1 ? [bonusWeek1] : []).concat([week3, week4]).concat(oldWeeks.slice(4));'''

if old_return in content:
    content = content.replace(old_return, new_return)
    print("SUCCESS: Updated getW() return")
else:
    print("ERROR: Could not find getW() return statement")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("DONE")
