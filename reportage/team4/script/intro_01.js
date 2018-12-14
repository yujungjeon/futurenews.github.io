var getClicked = 0;
var moveToggle = null;
var jpgToggle = [false, false, false];

function countClicked()
{
  getClicked++;
}

function initPosition(img, imageNum)
{
  img.style.position = 'absolute';
  img.style.top =  '-50px';
  img.style.left = (imageNum*105) + 'px';
  img.style.opacity = '100'
}

var goDown = function(img, limit, moveinterval, imageNum, toggle)
{
  if(getClicked >= 4 && toggle == 0) {
    goToNext();
    clearInterval(moveToggle);
  }
  if(parseInt(img.style.top, 10) > limit) img.style.top =  '-60px';
  else img.style.top = moveinterval + 'px';
}

function goToNext()
{
  var src='rep04_01_02_main.html';
  self.close();
  window.open(src);
}

function moveImage(img, limit, moveinterval, imageNum, toggle)
{
  if(toggle == 1)
  {
    moveRain(img, limit, moveinterval);
    return ;
  }

  initPosition(img, imageNum);
  moveToggle = setInterval(function(){
    if(parseInt(img.style.top, 10) > limit) moveinterval = 0;
    goDown(img, limit, moveinterval, imageNum, toggle);
    moveinterval+=0.3;
  }, 35);
}

function openNewPage(imageNum) {
  var src='team4/page/human'+imageNum+'.html';
  countClicked();
  window.open(src, 'human1','width=500px,height=500px,location=no,status=no,scrollbars=no')

  var clickedObject = "hu" + imageNum;
  var elem = document.getElementById(clickedObject);
  elem.parentNode.removeChild(elem);
}

function createRain()
{
  var img = new Array();  var i;

  for(i=1; i < 25; i++)
  {
    img[i-1] = new Image(40, 40);
    img[i-1].src = 'team4/img/01Intro/rain.png';1
    moveImage(img[i-1], 670, 0.7, i, 1);
    document.getElementById("rain").appendChild(img[i-1]);
  }
}

function moveRain(img, limit, initInterval)
{
  var rainPosition = Math.random() * 10;
  var interval = Math.random();

  if(interval <= 0.4) interval = interval * 3.5;
  if(1 <= rainPosition && rainPosition <= 2) rainPosition = rainPosition + 10;
  else if(7 <= rainPosition && rainPosition <= 8) rainPosition = rainPosition + 3;
console.log(rainPosition);
  initPosition(img, rainPosition);
  moveToggle = setInterval(function(){
    if(parseInt(img.style.top, 10) > limit) initInterval = 0;
    goDown(img, limit, initInterval, rainPosition, 1);
    initInterval+=interval;
  }, 10);
}
