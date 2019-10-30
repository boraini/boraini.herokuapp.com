dirname=${PWD##*/}
if [ -d .git ]
then
node util/deploy-views.js
fi
