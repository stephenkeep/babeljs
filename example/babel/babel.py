#!/usr/bin/env python
import re
import os
import sys

regex = re.compile(r'(?<=Babel.key\()(.*?)(?=\))')

s = "{\n"

rootdir = "../"
for root, subFolders, files in os.walk(rootdir):
    for file in files:
        file = open(os.path.join(root,file), "r")
        for line in file:
            four_letter_words = regex.findall(line)
            for word in four_letter_words:
                    s += word + ":" + word + ",\n"

s = s[:-2]
s += "\n}"
print "Done! Its magic take a look ----> en.json"
text_file = open("en.json", "w")
text_file.write(s)
text_file.close()
