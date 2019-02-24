#!/bin/bash

git branch -D gh-pages
git checkout -b gh-pages

npm run build
sed -e 's/vue.js/vue.min.js/g' src/index.html > build/index.html

cp -R build/* .

rm -rf src package-lock.json package.json

git add --all
git commit -m "gh page build"
git push -f origin gh-pages

git checkout master
