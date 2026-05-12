with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Find the bonus week section and fix newlines in string literals
# The problem: actual newlines inside JS string literals
# We need to find the bonus week days section and fix it

import re

# Find the bonus week data section
bonus_start = content.find("id: 'bonus1'")
bonus_end = content.find("  },\n  {\n    id: 3,")

if bonus_start > 0 and bonus_end > 0:
    bonus_section = content[bonus_start:bonus_end]
    
    # Fix: replace literal newlines inside single-quoted strings
    # We need to find content: '...' and contentEn: '...' and fix newlines
    fixed_section = []
    in_string = False
    quote_char = None
    i = 0
    result = []
    
    while i < len(bonus_section):
        c = bonus_section[i]
        
        if not in_string:
            if c in ("'", '"'):
                in_string = True
                quote_char = c
            result.append(c)
        else:
            if c == '\\':
                result.append(c)
                i += 1
                result.append(bonus_section[i])
            elif c == quote_char:
                in_string = False
                result.append(c)
            elif c == '\n':
                # Replace literal newline with \n escape
                result.append('\\n')
            else:
                result.append(c)
        i += 1
    
    fixed_bonus = ''.join(result)
    content = content[:bonus_start] + fixed_bonus + content[bonus_end:]
    
    with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
        f.write(content)
    print("SUCCESS: Fixed newlines in bonus week strings")
else:
    print(f"ERROR: bonus_start={bonus_start}, bonus_end={bonus_end}")
