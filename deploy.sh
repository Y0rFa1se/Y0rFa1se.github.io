#!/bin/bash

rm -rf './docs'
rsync -au --delete '/Users/y0rfa1se/Library/Mobile Documents/iCloud~md~obsidian/Documents/docs/' './docs'

git add .
git commit -m "fuck" || echo "Nothing to commit"
git push

rm -rf './docs'
ln -s '/Users/y0rfa1se/Library/Mobile Documents/iCloud~md~obsidian/Documents/docs' './docs'