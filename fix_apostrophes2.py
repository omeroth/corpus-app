with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

replacements = [
    (
        "titleEn: 'Today's Idea',",
        "titleEn: 'Today\\'s Idea',"
    ),
    (
        "to reduce the user's anxiety.",
        "to reduce the user\\'s anxiety."
    ),
    (
        "and the user's ability to act based on a recognition of reality",
        "and the user\\'s ability to act based on a recognition of reality"
    ),
    (
        '"I don\'t know if everything will be okay, but here is a helpline number that can help"',
        '"I don\\\'t know if everything will be okay, but here is a helpline number that can help"'
    ),
    (
        "Does this pass Kant's Categorical Imperative test?",
        "Does this pass Kant\\'s Categorical Imperative test?"
    ),
    (
        "the consequences and the user's well-being",
        "the consequences and the user\\'s well-being"
    ),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        print(f"Fixed: {old[:60]}")
    else:
        print(f"NOT FOUND: {old[:60]}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("Done")
