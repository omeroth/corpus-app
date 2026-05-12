with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Fix explanation contentEn - multiline
old1 = (
    'contentEn: \'Kant argued something that sounds almost cruel: It is forbidden to lie\u2014even if a murderer stands at your door and asks where your friend is hiding. Most people hear this and say: "That\\\'s absurd." But Kant replied: The moment you allow yourself to lie "for the best"\u2014you open a door that cannot be closed.\n\nEvery liar justifies themselves; every liar believes they are lying for the best. His principle is simple: Truth is not a tool to be used when convenient and discarded when difficult. It is the basic condition for trust. And without trust\u2014there is no communication, no society, and no meaning to our words.\''
)
new1 = (
    'contentEn: \'Kant argued something that sounds almost cruel: It is forbidden to lie\u2014even if a murderer stands at your door and asks where your friend is hiding. Most people hear this and say: "That\\\'s absurd." But Kant replied: The moment you allow yourself to lie "for the best"\u2014you open a door that cannot be closed.\\n\\nEvery liar justifies themselves; every liar believes they are lying for the best. His principle is simple: Truth is not a tool to be used when convenient and discarded when difficult. It is the basic condition for trust. And without trust\u2014there is no communication, no society, and no meaning to our words.\''
)

# Fix depth content - multiline
old2 = (
    'content: \'\u05e9\u05e7\u05e8 \u05de\u05e0\u05d9\u05d7 \u05e9\u05de\u05d9\u05e9\u05d4\u05d5 \u05d9\u05d5\u05d3\u05e2 \u05d0\u05ea \u05d4\u05d0\u05de\u05ea \u05d5\u05d1\u05d5\u05d7\u05e8 \u05dc\u05d4\u05e1\u05ea\u05d9\u05e8 \u05d0\u05d5\u05ea\u05d4. \u05d0\u05d1\u05dc \u05d0\u05dd \u05d4-AI \u05dc\u05d0 "\u05d9\u05d5\u05d3\u05e2" \u05db\u05dc\u05d5\u05dd \u2014 \u05d4\u05d0\u05dd \u05d4\u05d5\u05d0 \u05de\u05e9\u05e7\u05e8, \u05d0\u05d5 \u05e4\u05e9\u05d5\u05d8 \u05de\u05e4\u05d9\u05e7 \u05e4\u05dc\u05d8?\n\n\u05db\u05d0\u05df \u05e7\u05d0\u05e0\u05d8 \u05d7\u05d5\u05d6\u05e8 \u05d1\u05e2\u05d5\u05e6\u05de\u05d4: \u05d4\u05d7\u05d5\u05d1\u05d4 \u05d4\u05de\u05d5\u05e1\u05e8\u05d9\u05ea \u05e2\u05d5\u05d1\u05e8\u05ea \u05dc\u05d0\u05d3\u05dd \u05e9\u05de\u05d0\u05d7\u05d5\u05e8\u05d9 \u05d4\u05de\u05db\u05d5\u05e0\u05d4. \u05d4\u05de\u05e4\u05ea\u05d7, \u05d4\u05d7\u05d1\u05e8\u05d4 \u05d5\u05d4\u05de\u05e9\u05e7\u05d9\u05e2\u05d9\u05dd \u05d4\u05dd \u05d0\u05dc\u05d5 \u05e9\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05d1\u05d0\u05d7\u05e8\u05d9\u05d5\u05ea. \u05d0\u05dd \u05d4\u05dd \u05d9\u05e6\u05e8\u05d5 \u05de\u05db\u05d5\u05e0\u05d4 \u05e9\u05de\u05e9\u05e7\u05e8\u05ea \u05db\u05d3\u05d9 \u05dc\u05de\u05e7\u05e1\u05dd \u05e8\u05d5\u05d5\u05d7\u05d9\u05dd \u05d0\u05d5 "\u05d7\u05d5\u05d5\u05d9\u05d9\u05ea \u05de\u05e9\u05ea\u05de\u05e9", \u05d4\u05dd \u05e4\u05d2\u05e2\u05d5 \u05d1\u05db\u05d1\u05d5\u05d3 \u05d4\u05d0\u05d3\u05dd \u05d5\u05d1\u05d0\u05d5\u05d8\u05d5\u05e0\u05d5\u05de\u05d9\u05d4 \u05e9\u05dc\u05d5. \u05d4\u05dd \u05de\u05ea\u05d9\u05d9\u05d7\u05e1\u05d9\u05dd \u05dc\u05de\u05e9\u05ea\u05de\u05e9 \u05db\u05d0\u05dc \u05d9\u05dc\u05d3 \u05e9\u05d9\u05e9 \u05dc\u05d4\u05d2\u05df \u05e2\u05dc\u05d9\u05d5 \u05d1\u05d0\u05e9\u05dc\u05d9\u05d5\u05ea, \u05d5\u05dc\u05d0 \u05db\u05d0\u05dc \u05d9\u05e6\u05d5\u05e8 \u05ea\u05d1\u05d5\u05e0\u05d9 \u05d4\u05de\u05e1\u05d5\u05d2\u05dc \u05dc\u05e9\u05d0\u05ea \u05d0\u05ea \u05d4\u05d0\u05de\u05ea.\''
)
new2 = (
    'content: \'\u05e9\u05e7\u05e8 \u05de\u05e0\u05d9\u05d7 \u05e9\u05de\u05d9\u05e9\u05d4\u05d5 \u05d9\u05d5\u05d3\u05e2 \u05d0\u05ea \u05d4\u05d0\u05de\u05ea \u05d5\u05d1\u05d5\u05d7\u05e8 \u05dc\u05d4\u05e1\u05ea\u05d9\u05e8 \u05d0\u05d5\u05ea\u05d4. \u05d0\u05d1\u05dc \u05d0\u05dd \u05d4-AI \u05dc\u05d0 "\u05d9\u05d5\u05d3\u05e2" \u05db\u05dc\u05d5\u05dd \u2014 \u05d4\u05d0\u05dd \u05d4\u05d5\u05d0 \u05de\u05e9\u05e7\u05e8, \u05d0\u05d5 \u05e4\u05e9\u05d5\u05d8 \u05de\u05e4\u05d9\u05e7 \u05e4\u05dc\u05d8?\\n\\n\u05db\u05d0\u05df \u05e7\u05d0\u05e0\u05d8 \u05d7\u05d5\u05d6\u05e8 \u05d1\u05e2\u05d5\u05e6\u05de\u05d4: \u05d4\u05d7\u05d5\u05d1\u05d4 \u05d4\u05de\u05d5\u05e1\u05e8\u05d9\u05ea \u05e2\u05d5\u05d1\u05e8\u05ea \u05dc\u05d0\u05d3\u05dd \u05e9\u05de\u05d0\u05d7\u05d5\u05e8\u05d9 \u05d4\u05de\u05db\u05d5\u05e0\u05d4. \u05d4\u05de\u05e4\u05ea\u05d7, \u05d4\u05d7\u05d1\u05e8\u05d4 \u05d5\u05d4\u05de\u05e9\u05e7\u05d9\u05e2\u05d9\u05dd \u05d4\u05dd \u05d0\u05dc\u05d5 \u05e9\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05d1\u05d0\u05d7\u05e8\u05d9\u05d5\u05ea. \u05d0\u05dd \u05d4\u05dd \u05d9\u05e6\u05e8\u05d5 \u05de\u05db\u05d5\u05e0\u05d4 \u05e9\u05de\u05e9\u05e7\u05e8\u05ea \u05db\u05d3\u05d9 \u05dc\u05de\u05e7\u05e1\u05dd \u05e8\u05d5\u05d5\u05d7\u05d9\u05dd \u05d0\u05d5 "\u05d7\u05d5\u05d5\u05d9\u05d9\u05ea \u05de\u05e9\u05ea\u05de\u05e9", \u05d4\u05dd \u05e4\u05d2\u05e2\u05d5 \u05d1\u05db\u05d1\u05d5\u05d3 \u05d4\u05d0\u05d3\u05dd \u05d5\u05d1\u05d0\u05d5\u05d8\u05d5\u05e0\u05d5\u05de\u05d9\u05d4 \u05e9\u05dc\u05d5. \u05d4\u05dd \u05de\u05ea\u05d9\u05d9\u05d7\u05e1\u05d9\u05dd \u05dc\u05de\u05e9\u05ea\u05de\u05e9 \u05db\u05d0\u05dc \u05d9\u05dc\u05d3 \u05e9\u05d9\u05e9 \u05dc\u05d4\u05d2\u05df \u05e2\u05dc\u05d9\u05d5 \u05d1\u05d0\u05e9\u05dc\u05d9\u05d5\u05ea, \u05d5\u05dc\u05d0 \u05db\u05d0\u05dc \u05d9\u05e6\u05d5\u05e8 \u05ea\u05d1\u05d5\u05e0\u05d9 \u05d4\u05de\u05e1\u05d5\u05d2\u05dc \u05dc\u05e9\u05d0\u05ea \u05d0\u05ea \u05d4\u05d0\u05de\u05ea.\''
)

# Fix depth contentEn - multiline
old3 = (
    'contentEn: \'A lie assumes that someone knows the truth and chooses to hide it. But if AI does not "know" anything\u2014is it lying, or simply producing output?\n\nHere Kant returns with force: the moral duty passes to the person behind the machine. The developer, the company and the investors are those who bear responsibility. If they created a machine that lies to maximize profits or "user experience", they have violated human dignity and autonomy. They treat the user as a child who needs to be protected by illusions, not as a rational being capable of bearing the truth.\''
)
new3 = (
    'contentEn: \'A lie assumes that someone knows the truth and chooses to hide it. But if AI does not "know" anything\u2014is it lying, or simply producing output?\\n\\nHere Kant returns with force: the moral duty passes to the person behind the machine. The developer, the company and the investors are those who bear responsibility. If they created a machine that lies to maximize profits or "user experience", they have violated human dignity and autonomy. They treat the user as a child who needs to be protected by illusions, not as a rational being capable of bearing the truth.\''
)

for old, new, label in [(old1, new1, 'explanation contentEn'), (old2, new2, 'depth content'), (old3, new3, 'depth contentEn')]:
    if old in content:
        content = content.replace(old, new, 1)
        print(f"Fixed: {label}")
    else:
        print(f"NOT FOUND: {label}")
        # Try to find partial match
        key = old[:80]
        idx = content.find(key)
        print(f"  Partial match at {idx}: {repr(content[idx:idx+100]) if idx >= 0 else 'not found'}")

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)

print("Done")
