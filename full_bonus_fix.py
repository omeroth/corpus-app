with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

# Step 1: Remove old bonus week insertion (around line 4920)
# Find the pattern: "  ,\n" followed by "  {\n" followed by "    id: 'bonus1'"
start_remove = None
for i in range(4900, 4960):
    if i < len(lines) and lines[i].strip() == ',' and i+1 < len(lines) and lines[i+1].strip() == '{':
        # Check if next lines have bonus1
        for j in range(i+1, min(i+5, len(lines))):
            if 'bonus1' in lines[j]:
                start_remove = i
                break
    if start_remove:
        break

if start_remove:
    # Find end of this bonus block
    end_remove = start_remove
    brace_count = 0
    found_open = False
    for i in range(start_remove+1, len(lines)):
        if '{' in lines[i]:
            brace_count += lines[i].count('{')
            found_open = True
        if '}' in lines[i]:
            brace_count -= lines[i].count('}')
        if found_open and brace_count <= 0:
            end_remove = i
            break
    print(f"Removing old bonus from line {start_remove+1} to {end_remove+1}")
    print(f"First line: {repr(lines[start_remove])}")
    print(f"Last line: {repr(lines[end_remove])}")
    lines = lines[:start_remove] + lines[end_remove+1:]
    print(f"Lines after removal: {len(lines)}")
else:
    print("No old bonus found to remove")

# Step 2: Find correct insertion point - after week 2 closes (before week 3)
# Week 2 in corpusData is around line 2894, ends around 3395
# Find "  }," followed by "  {" followed by "    id: 3,"
insert_at = None
for i in range(2800, 4000):
    if i+2 < len(lines):
        if (lines[i].strip() == '},' and 
            lines[i+1].strip() == '{' and
            "id: 3," in lines[i+2]):
            insert_at = i + 1  # Insert before the "  {" of week 3
            break

if insert_at:
    print(f"Inserting at line {insert_at+1} (before: {repr(lines[insert_at][:40])})")
    bonus_lines = [
        "  {\n",
        "    id: 'bonus1',\n",
        "    title: '\u05e4\u05d9\u05dc\u05d5\u05e1\u05d5\u05e4\u05d9\u05d4 \u05e9\u05dc \u05d4\u05e2\u05ea\u05d9\u05d3',\n",
        "    titleEn: 'Philosophy of the Future',\n",
        "    subtitle: '\u05db\u05e9\u05d4\u05d0\u05dc\u05d2\u05d5\u05e8\u05d9\u05ea\u05dd \u05e4\u05d5\u05d2\u05e9 \u05d0\u05ea \u05d4\u05d0\u05ea\u05d9\u05e7\u05d4',\n",
        "    subtitleEn: 'When the Algorithm Meets Ethics',\n",
        "    isBonus: true,\n",
        "    xp: 100,\n",
        "    days: [\n",
        "      { id: 1, title: '\u05e7\u05d0\u05e0\u05d8: \u05d4\u05d0\u05dd \u05de\u05d5\u05ea\u05e8 \u05dc-AI \u05dc\u05e9\u05e7\u05e8?', titleEn: 'Kant: Is AI Allowed to Lie?', thinker: '\u05e2\u05de\u05e0\u05d5\u05d0\u05dc \u05e7\u05d0\u05e0\u05d8', thinkerEn: 'Immanuel Kant', thinkerId: 'kant', xp: 50, sections: [] },\n",
        "      { id: 2, title: '\u05de\u05d9\u05dc: \u05d1\u05de\u05d9 \u05d4\u05de\u05db\u05d5\u05e0\u05d4 \u05e6\u05e8\u05d9\u05db\u05d4 \u05dc\u05e4\u05d2\u05d5\u05e2?', titleEn: 'Mill: Who Should the Machine Hurt?', thinker: \"\u05d2'\u05d5\u05df \u05e1\u05d8\u05d9\u05d5\u05d0\u05e8\u05d8 \u05de\u05d9\u05dc\", thinkerEn: 'John Stuart Mill', thinkerId: 'mill', xp: 50, sections: [] },\n",
        "      { id: 3, title: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5: \u05db\u05e9\u05d4-AI \u05d8\u05d5\u05e2\u05d4 - \u05de\u05d9 \u05d0\u05d7\u05e8\u05d0\u05d9?', titleEn: 'Aristotle: When AI Errs - Who is Responsible?', thinker: '\u05d0\u05e8\u05d9\u05e1\u05d8\u05d5', thinkerEn: 'Aristotle', thinkerId: 'aristotle', xp: 50, sections: [] },\n",
        "      { id: 4, title: '\u05e0\u05d9\u05d8\u05e9\u05d4: \u05de\u05d9 \u05de\u05d7\u05dc\u05d9\u05d8 \u05de\u05d4 \u05d4\u05e2\u05e8\u05db\u05d9\u05dd \u05e9\u05dc \u05d4-AI?', titleEn: 'Nietzsche: Who Decides the Values of AI?', thinker: '\u05e4\u05e8\u05d9\u05d3\u05e8\u05d9\u05da \u05e0\u05d9\u05d8\u05e9\u05d4', thinkerEn: 'Friedrich Nietzsche', thinkerId: 'nietzsche', xp: 50, sections: [] },\n",
        "      { id: 5, title: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1: \u05d4\u05d0\u05dd AI \u05d9\u05db\u05d5\u05dc \u05dc\u05e2\u05d6\u05d5\u05e8 \u05dc\u05e0\u05d5 \u05dc\u05d7\u05e9\u05d5\u05d1?', titleEn: 'Socrates: Can AI Help Us Think?', thinker: '\u05e1\u05d5\u05e7\u05e8\u05d8\u05e1', thinkerEn: 'Socrates', thinkerId: 'socrates', xp: 50, sections: [] }\n",
        "    ]\n",
        "  },\n",
    ]
    # Also need to change the previous line from "  }," to "  }," - already correct
    lines = lines[:insert_at] + bonus_lines + lines[insert_at:]
    print(f"Inserted {len(bonus_lines)} lines")
else:
    print("ERROR: Could not find insertion point")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.writelines(lines)

print("DONE")
