with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Find bonus week section and fix unescaped apostrophes in single-quoted strings
bonus_start = content.find("id: 'bonus1'")
bonus_end = content.find("  },\n  {\n    id: 3,")

if bonus_start > 0 and bonus_end > 0:
    bonus_section = content[bonus_start:bonus_end]
    
    # Fix specific known problematic strings
    fixes = [
        ("person's duty", "person\\'s duty"),
        ("That's absurd", "That\\'s absurd"),
        ("what's the", "what\\'s the"),
    ]
    
    for bad, good in fixes:
        if bad in bonus_section:
            bonus_section = bonus_section.replace(bad, good)
            print(f"Fixed: {bad}")
    
    # Also do a more thorough pass - fix apostrophes inside single-quoted strings
    result = []
    i = 0
    in_single_quote = False
    
    while i < len(bonus_section):
        c = bonus_section[i]
        
        if c == '\\' and i + 1 < len(bonus_section):
            result.append(c)
            i += 1
            result.append(bonus_section[i])
        elif c == "'" and not in_single_quote:
            in_single_quote = True
            result.append(c)
        elif c == "'" and in_single_quote:
            # Check if this is end of string or apostrophe
            # If next char is a letter, it's likely an apostrophe
            next_char = bonus_section[i+1] if i+1 < len(bonus_section) else ''
            if next_char.isalpha():
                result.append("\\'")
            else:
                in_single_quote = False
                result.append(c)
        else:
            result.append(c)
        i += 1
    
    fixed_bonus = ''.join(result)
    content = content[:bonus_start] + fixed_bonus + content[bonus_end:]
    
    with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
        f.write(content)
    print("SUCCESS: Fixed apostrophes")
else:
    print(f"ERROR: bonus_start={bonus_start}, bonus_end={bonus_end}")
