rm -rf dist &&
yarn build &&
cd dist
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin https://gitee.com/belaxie/uu-ui-website.git &&
git push -u origin master &&
cd -
echo "https://gitee.com/belaxie/uu-ui-website.git"