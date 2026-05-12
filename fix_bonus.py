with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

bonus_week = """,
  {
    id: 'bonus1',
    title: 'פילוסופיה של העתיד',
    titleEn: 'Philosophy of the Future',
    isBonus: true,
    xp: 100,
    days: [
      { id: 1, title: 'קאנט: האם מותר ל-AI לשקר?', titleEn: 'Kant: Is AI Allowed to Lie?', thinker: 'עמנואל קאנט', thinkerEn: 'Immanuel Kant', thinkerId: 'kant', xp: 50, sections: [] },
      { id: 2, title: 'מיל: במי המכונה צריכה לפגוע?', titleEn: 'Mill: Who Should the Machine Hurt?', thinker: "ג'ון סטיוארט מיל", thinkerEn: 'John Stuart Mill', thinkerId: 'mill', xp: 50, sections: [] },
      { id: 3, title: 'אריסטו: כשה-AI טועה - מי אחראי?', titleEn: 'Aristotle: When AI Errs - Who is Responsible?', thinker: 'אריסטו', thinkerEn: 'Aristotle', thinkerId: 'aristotle', xp: 50, sections: [] },
      { id: 4, title: 'ניטשה: מי מחליט מה הערכים של ה-AI?', titleEn: 'Nietzsche: Who Decides the Values of AI?', thinker: 'פרידריך ניטשה', thinkerEn: 'Friedrich Nietzsche', thinkerId: 'nietzsche', xp: 50, sections: [] },
      { id: 5, title: 'סוקרטס: האם AI יכול לעזור לנו לחשוב?', titleEn: 'Socrates: Can AI Help Us Think?', thinker: 'סוקרטס', thinkerEn: 'Socrates', thinkerId: 'socrates', xp: 50, sections: [] }
    ]
  }"""

import re

# Find end of week 2 in corpusData weeks array
# Week 2 ends before week 3 starts (id:3)
week3_patterns = [
    "      { id:3, title:'What Does It Mean to Know?'",
    "      { id: 3, title: 'What Does It Mean to Know?'",
    '      { id:3,',
    "    { id: 3,",
]

inserted = False
for pattern in week3_patterns:
    if pattern in content:
        idx = content.find(pattern)
        # Go back to find the closing of week 2
        before = content[:idx]
        # Find the last }, before this point that closes a week
        last_close = before.rfind('},\n  {')
        if last_close == -1:
            last_close = before.rfind('},\n{')
        insert_at = last_close + 1
        content = content[:insert_at] + bonus_week + content[insert_at:]
        print(f"Inserted after pattern: {pattern[:40]}")
        inserted = True
        break

if not inserted:
    # Try finding where corpusData weeks array is defined
    weeks_start = content.find('corpusData = {')
    if weeks_start == -1:
        weeks_start = content.find('const corpusData')
    print(f"corpusData found at: {weeks_start}")
    print("Could not insert - need manual inspection")

# Fix getW return
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
    print("Updated getW() return")
else:
    print("Could not find getW() return - checking...")
    idx = content.find('return [week1, week2')
    print(f"Found at: {idx}, snippet: {content[idx:idx+60]}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("Done!")
