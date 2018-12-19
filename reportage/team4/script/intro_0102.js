var interval;
var opacity_arr = [0, 0, 0];

function initPosition(img, imageNum)
{
  if(imageNum < 2) {
    img.style.position = 'absolute';
    img.style.top =  (imageNum*175)+ 'px';
    img.style.left = (imageNum*400) + 'px';
  } else {
    img.style.position = 'absolute';
    img.style.top =  (imageNum*310)+ 'px';
    img.style.left = (imageNum*480) + 'px';
    img.style.opacity = '0'
  }
  interval = setInterval(function(){
    setOpacity(img, opacity_arr, imageNum, interval);
    opacity_arr[0] += 0.005;
    if(opacity_arr[0] >= 0.7) opacity_arr[1] += 0.008;
  }, 100);
}

function setOpacity(img, opac, imageNum, toggle) {
    if(opac[0] < 0.5) {
      if(imageNum == 1) img.style.opacity = opac[0];
      else img.style.opacity = opac[1];
    } else {
      if(imageNum == 1) img.style.opacity = opac[0];
      else img.style.opacity = opac[1];

      if(opac[1] > 1.0) {
        clearInterval(toggle);
        upNextButton(img, opac, imageNum);
      }
    }
}

function upNextButton(img, opac, imageNum)
{
    if(imageNum == 3) img.style.opacity = opac[2];
    setInterval(function(){
      upNextButton(img, opac, imageNum);
      opac[2] += 0.005;
    }, 100);
}

function goNext()
{
  var src='rep04_02_00_contents.html';
  self.close();
  window.open(src);
}
