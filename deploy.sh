#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# if you are deploying to a custom domain
# echo 'jaclynchan.me' > CNAME

git add -A
git commit -m 'deploy'

git push

cd -