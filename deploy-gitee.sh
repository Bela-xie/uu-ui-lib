rm -rf dist &&
yarn build &&
cd dist
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin https://gitee.com/belaxie/uu-ui-website.git &&
git push -u -f origin master &&
cd -
echo "https://gitee.com/belaxie/uu-ui-website.git"