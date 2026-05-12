with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Find bonus1 week
bonus_idx = content.find("id: 'bonus1'")
if bonus_idx < 0:
    print("ERROR: bonus1 not found")
    exit()

# Find the days array start
days_start = content.find('days: [', bonus_idx)
print(f"Days array starts at: {days_start}")

# Find day 1 start
day1_start = content.find('{\n        id: 1,', days_start)
if day1_start < 0:
    day1_start = content.find('{ id: 1,', days_start)
print(f"Day 1 starts at: {day1_start}")
print(f"Context: {repr(content[day1_start:day1_start+50])}")

# Find day 2 start (to know where day 1 ends)
day2_start = content.find('{ id: 2,', days_start)
if day2_start < 0:
    day2_start = content.find('{\n        id: 2,', days_start)
print(f"Day 2 starts at: {day2_start}")
print(f"Context: {repr(content[day2_start:day2_start+50])}")

if day1_start > 0 and day2_start > 0 and day2_start > day1_start:
    # Replace day 1 with clean version
    clean_day1 = "{ id: 1, title: '\u05e7\u05d0\u05e0\u05d8: \u05d4\u05d0\u05dd \u05de\u05d5\u05ea\u05e8 \u05dc-AI \u05dc\u05e9\u05e7\u05e8?', titleEn: 'Kant: Is AI Allowed to Lie?', thinker: '\u05e2\u05de\u05e0\u05d5\u05d0\u05dc \u05e7\u05d0\u05e0\u05d8', thinkerEn: 'Immanuel Kant', thinkerId: 'kant', xp: 50, sections: [] },\n      "
    content = content[:day1_start] + clean_day1 + content[day2_start:]
    
    with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
        f.write(content)
    print("SUCCESS: Day 1 replaced with clean empty version")
else:
    print("ERROR: Could not find day boundaries")
