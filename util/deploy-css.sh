#Compiles all CSS, SCSS, and Sass files in css-raw/ into public/
dirname=${PWD##*/}
projectname="boraini.herokuapp.com"
if [ "$dirname" == $projectname ]
then
  for file in css-raw/*.sass
  do
    name=${file##*/}
    base=${name%.sass}
    echo "===================================\nCompiling $name \n==================================="
    sass css-raw/$name public/css/$base.css
  done
  for file in css-raw/css/*.scss
  do
    name=${file##*/}
    base=${name%.scss}
    echo "===================================\nCompiling $name \n==================================="
    sass css-raw/$name public/css/$base.css
  done
  for file in css-raw/*.css
  do
    name=${file##*/}
    base=${name%.sass}
    cp css-raw/$name public/css/$name
  done
else
  echo "please cd to repository root directory, which should be named $projectname"
fi
