

# %%
import csv
import json
from collections import OrderedDict 
import math

li = []
with open('/Users/jhasneha/Documents/Spring2021/SPR_indot/SPRprojectcodes/Sampled_patching_SR.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        #print(row)
        d = OrderedDict()
        d['geometry'] = {
            'type': 'Point', #linestring geojson.io
            'coordinates': [float(row['Longitude']),float(row['Latitude'])] #two pair of points
        }
        d['type'] = 'Feature'
        d['properties']={
            'DMI': int (row['DMI']),
            'L_IRI': math.trunc(float(row["L_IRI"])*100)/100,
            'R_IRI': math.trunc(float(row["R_IRI"])*100)/100,
            'patching': row["Patching_color_map"],
            'color':row["Patching_color"],
            'D0': math.trunc(float(row["D0"])*100)/100,
            'D48': math.trunc(float(row["D48"])*100)/100,
            'BDI': math.trunc(float(row["BDI"])*100)/100,
            'BCI': math.trunc(float(row["BCI"])*100)/100,
            'SCI': round(float(row["SCI"]),3),
            'Road': row["Road"],
            'Bound': row["Bound"],
            'Lane': row["Lane"]
        }
        li.append(d)

d = OrderedDict()
d['type'] = 'FeatureCollection'
d['features'] = li

with open('sampled_patching_SR.json','w') as f:
    json.dump(d,f,indent=4)

# %%
