function slideImage(flag)
{
  var src;
  switch(flag)
  {
    case 0:
      src = "team4/img/03Articles/ex1b.png";
      break;
    case 1:
      src = "team4/img/03Articles/ex2b.png";
      break;
    case 2:
      src = "team4/img/03Articles/ex3b.png";
      break;
    case 3:
      src = "team4/img/03Articles/ex4b.png";
      break;
    case 4:
      src = "team4/img/03Articles/ex5b.png";
      break;
    default: break;
  }
  createImage(src, flag);
  changeLogo(flag);
}

function createImage(route, idx)
{
  var bigimage = document.createElement("img");
  bigimage.src = route
  bigimage.style.top = '200px';
  bigimage.style.width = '900px';
  bigimage.style.left = '400px';
  bigimage.style.height = '500px';
  bigimage.style.position = 'absolute';
  bigimage.onclick = function(){
    var clickSrc = "rep04_03_0"+(idx+1) + "_articles.html";
    window.open(clickSrc);
  }
  document.getElementById("big").appendChild(bigimage);
}

function changeOpacity(index, flag)
{
  var getID = "small" + (index + 1);
  var target = document.getElementById(getID);
  var src = "team4/img/03Articles/ex" + (index + 1) + "b.png";

  if(flag == 0) target.style.opacity = 1;
  else target.style.opacity = 0.35;

  changeBackGround(index);
  changeLogo(index);
  createImage(src, index);
}

function changeLogo(index)
{
  var target = document.getElementById("mainTitle");
  target.src = "team4/img/03Articles/people" + (index + 1) + ".PNG";
  if(index == 0) {
    target.style.left = '600px';
    target.style.top = '85px';
  }
  else if(index == 1) {
    target.style.left = '275px';
    target.style.top = '85px';
  }
  else if(index == 2) {
    target.style.left = '880px';
    target.style.top = '85px';
  }
  else if(index == 3) {
    target.style.left = '615px';
    target.style.top = '80px';
  }
  else {
    target.style.left = '325px';
    target.style.top = '85px';
  }
}

function changeBackGround(index)
{
  console.log('change background');
  var src = "team4/img/03Articles/ex" + (index + 1) + "b.jpg";
  var finalSrc = "url(" + src + ")"
  document.body.style.backgroundImage = finalSrc;
  document.body.style.backgroundSize = "1600px 800px";
}
/*
function effectImage(index)
{
  var effectimage = document.createElement("img");
  effectimage.src = "team4/img/03Articles/gray.PNG"
  effectimage.style.width = '200px';
  effectimage.style.left = '200px';
  effectimage.style.height = '100px';
  effectimage.style.position = 'absolute';
  effectimage.style.top = (150 + index*100) + 'px';
  effectimage.style.opacity = '0.3';
  effectimage.id = "effect" + index;

  document.getElementById("effect").appendChild(effectimage);
}

function removeEffect(index)
{
  var imageID = "effect" + index;
  var image_x = document.getElementById(imageID);
  image_x.parentNode.removeChild(image_x);
}
*/
