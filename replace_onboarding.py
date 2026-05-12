with open('/Users/omeroth/CORPUS/Onboarding_new.html', 'r', encoding='utf-8') as f:
    new_file = f.read()

with open('/Users/omeroth/CORPUS/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

style_start = new_file.find('<style>') + len('<style>')
style_end = new_file.find('</style>')
new_css = new_file[style_start:style_end].strip()

body_start = new_file.find('<body')
body_start = new_file.find('>', body_start) + 1
body_end = new_file.rfind('</body>')
body_content = new_file[body_start:body_end].strip()

start = content.find('<div id="intro-overlay"')
depth = 0
i = start
while i < len(content):
    if content[i:i+4] == '<div':
        depth += 1
    elif content[i:i+6] == '</div>':
        depth -= 1
        if depth == 0:
            end = i + 6
            break
    i += 1

new_overlay = '<div id="intro-overlay" style="display:none;position:fixed;inset:0;z-index:1100;overflow:hidden;">\n' + body_content + '\n</div>'
content = content[:start] + new_overlay + content[end:]

last_style = content.rfind('</style>')
content = content[:last_style] + '\n/* ONBOARDING NEW */\n' + new_css + '\n' + content[last_style:]

with open('/Users/omeroth/CORPUS/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

import subprocess
r = subprocess.run(['grep', '-n', 'Welcome to Corpus', '/Users/omeroth/CORPUS/index.html'], capture_output=True, text=True)
print("HTML:", r.stdout)
r2 = subprocess.run(['grep', '-n', 'ONBOARDING NEW', '/Users/omeroth/CORPUS/index.html'], capture_output=True, text=True)
print("CSS:", r2.stdout)
