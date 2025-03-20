import csv
import json

csv_filename = r"./src/assets/information/characters.csv"
json_filename = r"./src/assets/information/delegate_info.json"

# Read CSV and convert to JSON format
data = []
with open(csv_filename, mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append({
            "characterName": row["Character Name"],
            "heart": int(row["Heart"]),
            "armor": int(row["Armor"]),
            "hunger": int(row["Hunger"]),
            "life": int(row["Life"])
        })

# Write to JSON file
with open(json_filename, mode='w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=2)
