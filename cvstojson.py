

# %%
import csv
import json
from collections import OrderedDict

li = []
with open('GLL#41 SR-57 RP-49+55 to 50+75SR57 SB-PL-20201027.130712Result-IRI-report.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        d = OrderedDict()
        d['geometry'] = {
            'type': 'Point',
            'coordinates': [float(row['Longitude']), float(row['Latitude'])]
        }
        d['type'] = 'Feature'
        d['properties']={
            'DMI': row['RefDMI(ft)'],
            'L_IRI' : row[" L_IRI(in/mi)"],
            'R_IRI' : row[" R_IRI(in/mi)"]
        }
        li.append(d)

d = OrderedDict()
d['type'] = 'FeatureCollection'
d['features'] = li

with open('sr57.json','w') as f:
    json.dump(d,f,indent=4)

# %%
