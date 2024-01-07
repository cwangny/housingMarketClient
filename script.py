import json

# Specify the path to your GeoJSON file
geojson_file_path = "suburb-10-nsw.json"
suburbs_list_file_path = "sydney-suburbs-list.json"

with open(geojson_file_path, "r") as file:
    geojson_data = json.load(file)

with open(suburbs_list_file_path, "r") as file:
    suburbs_list_data = json.load(file)

# print(geojson_data["features"][0]["properties"]["nsw_loca_2"])

filtered_features = []

# Print Suburbs names
for data in geojson_data["features"]:
  if data["properties"]["nsw_loca_2"] in suburbs_list_data:
    
    filtered_features.append(data)
    
    # print(data["properties"]["nsw_loca_2"])

# for data in filtered_features:    
#   print(data["properties"]["nsw_loca_2"])

# with open('output.json', 'w') as file:
#     json.dump(filtered_features, file)