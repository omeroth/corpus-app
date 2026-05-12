with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Find and remove the problematic day 1 content we added
# and replace with a clean version using proper escaping

# Find start of bonus week days
start_marker = "        sections: [\n          {\n            type: 'idea',\n            title: '\u05d4\u05e8\u05e2\u05d9\u05d5\u05df"
end_marker = "\n        ]\n      },"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx > 0 and end_idx > 0:
    print(f"Found day 1 content at {start_idx} to {end_idx}")
    # Remove the problematic content and replace with empty sections
    old_content = content[start_idx:end_idx + len(end_marker)]
    new_content = "        sections: []\n      },"
    content = content[:start_idx] + new_content + content[end_idx + len(end_marker):]
    print("Reverted day 1 to empty sections")
else:
    print(f"Could not find markers: start={start_idx}, end={end_idx}")
    # Try alternative
    idx = content.find("id: 'bonus1'")
    print(f"bonus1 at: {idx}")
    if idx > 0:
        print(content[idx:idx+200])

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content)
print("DONE")
