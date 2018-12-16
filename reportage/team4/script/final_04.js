var imageName = ["team4/img/04Final/human1.jpg", "team4/img/04Final/human2.jpg", "team4/img/04Final/human3.jpg", "team4/img/04Final/human4.jpg"];
var index = 0;

function changeOpacity(img, flag)
{
  if(flag == 0) img.style.opacity = 1;
  else img.style.opacity = 0.5;
}

function changeHuman(num)
{
  var image = document.getElementById("mainImage");
  if(num < 0) {
    if(index == 0) index = 3;
    else index--;
    image.src = imageName[index];
  } else {
    if(index == 3) index = 0;
    else index++;
    image.src = imageName[index];
  }
}
