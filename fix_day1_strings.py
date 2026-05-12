with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    lines = f.readlines()

# Find the bonus day 1 section range
start = None
end = None
for i, line in enumerate(lines):
    if start is None and "id: 1," in line and i > 3400:
        context = ''.join(lines[max(0,i-60):i])
        if 'bonus1' in context:
            start = i
    if start is not None and end is None and i > start:
        mil_title = '\u05de\u05d9\u05dc'
        if "{ id: 2, title: '" + mil_title in line:
            end = i
            break

print(f"Processing lines {start} to {end}")

block = lines[start:end]
block_text = ''.join(block)

def collapse_js_strings(text):
    """Collapse literal newlines inside single-quoted JS strings to \\n"""
    result = []
    i = 0
    in_single = False
    in_double = False

    while i < len(text):
        c = text[i]

        if c == '\\' and i + 1 < len(text):
            result.append(c)
            result.append(text[i+1])
            i += 2
            continue

        if c == "'" and not in_double:
            in_single = not in_single
            result.append(c)
            i += 1
            continue

        if c == '"' and not in_single:
            in_double = not in_double
            result.append(c)
            i += 1
            continue

        if c == '\n' and in_single:
            result.append('\\n')
            i += 1
            while i < len(text) and text[i] in ' \t' and in_single:
                i += 1
            continue

        result.append(c)
        i += 1

    return ''.join(result)

fixed_block = collapse_js_strings(block_text)

# Fix unescaped apostrophe in explanationEn: company's
fixed_block = fixed_block.replace(
    "a company's personal preference.",
    "a company\\'s personal preference."
)

# Fix That's absurd - it's inside double quotes within a single-quoted string
# The double-quoted substring "That's absurd" has an apostrophe that's fine
# because it's inside double quotes, not single quotes. So no fix needed there.

lines[start:end] = [fixed_block]

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.writelines(lines)

print("Done")
