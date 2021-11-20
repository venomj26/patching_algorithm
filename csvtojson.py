

# %%
import csv
import json
from collections import OrderedDict

li = []
with open('sr57_patching_color.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        #print(row)
        d = OrderedDict()
        d['geometry'] = {
            'type': 'Point', #linestring geojson.io
            'coordinates': [float(row['Longitude']), float(row['Latitude'])] #two pair of points
        }
        d['type'] = 'Feature'
        d['properties']={
            'DMI': row['DMI'],
            'L_IRI' : row["L_IRI"],
            'R_IRI' : row["R_IRI"],
            'patching': row["Patching_color_map"],
            'color':row["Patching_color"],
            'D0':row["D0"],
            'D48' : row["D48"],
            'BDI' : row["BDI"],
            'BCI' : row["BCI"],
            'SCI' : row["SCI"]
        }
        li.append(d)

d = OrderedDict()
d['type'] = 'FeatureCollection'
d['features'] = li

with open('sr57_patching_color.json','w') as f:
    json.dump(d,f,indent=4)

# %%
