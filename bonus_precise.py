with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Verify line 3395 (index 3394) and 3396 (index 3395)
print(f"Line 3394: {repr(lines[3393])}")
print(f"Line 3395: {repr(lines[3394])}")
print(f"Line 3396: {repr(lines[3395])}")
print(f"Line 3397: {repr(lines[3396])}")
print(f"Line 3398: {repr(lines[3397])}")

# Line 3395 should be "  }," and line 3397 should have "id: 3,"
if lines[3394].strip() == '},' and 'id: 3,' in lines[3396]:
    print("CORRECT LOCATION CONFIRMED")
    
    bonus_lines = [
        "  ,\n" if lines[3394].strip() == '}' else "",
    ]
    # Actually insert after the "}," on line 3395
    bonus = [
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
    
    # Insert after line 3395 (index 3394)
    new_lines = lines[:3395] + bonus + lines[3395:]
    
    with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
        f.writelines(new_lines)
    
    print(f"SUCCESS: Inserted {len(bonus)} lines after line 3395")
    
    # Verify
    with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
        verify = f.readlines()
    print(f"Lines around insertion:")
    for i in range(3393, 3415):
        print(f"  {i+1}: {repr(verify[i][:60])}")
else:
    print(f"ERROR: Line 3395 is {repr(lines[3394])} and line 3397 has id: 3: {'id: 3,' in lines[3396]}")
