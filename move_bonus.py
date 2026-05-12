with open('/Users/omeroth/CORPUS/index.html', 'r') as f:
    content = f.read()

# Find bonus week block in corpusData
bonus_start = content.find("\n  {\n    id: 'bonus1'")
if bonus_start < 0:
    bonus_start = content.find("  {\n    id: 'bonus1'")
    
print(f"Bonus starts at: {bonus_start}")
print(f"Context before: {repr(content[bonus_start-30:bonus_start+30])}")

# Find end of bonus week block
bonus_end = content.find("\n  },\n  {\n    id: 4,", bonus_start)
if bonus_end < 0:
    bonus_end = content.find("\n  {\n    id: 4,", bonus_start)
    
print(f"Bonus ends at: {bonus_end}")
print(f"Context at end: {repr(content[bonus_end:bonus_end+40])}")

# Extract the bonus week block
bonus_block = content[bonus_start:bonus_end]
print(f"Bonus block length: {len(bonus_block)}")
print(f"Bonus block start: {repr(bonus_block[:50])}")

# Remove bonus from current position
content_without_bonus = content[:bonus_start] + content[bonus_end:]

# Find where week 2 ends (before week 3)
week3_start = content_without_bonus.find("\n  {\n    id: 3,")
print(f"Week 3 starts at: {week3_start}")
print(f"Context: {repr(content_without_bonus[week3_start-10:week3_start+30])}")

# Insert bonus before week 3
content_new = content_without_bonus[:week3_start] + bonus_block + content_without_bonus[week3_start:]

with open('/Users/omeroth/CORPUS/index.html', 'w') as f:
    f.write(content_new)

print("SUCCESS: Moved bonus week to correct position (after week 2)")
