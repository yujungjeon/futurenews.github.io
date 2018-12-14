var imgObject = new Array();
var imgOpacity = 0;
var opacToggle = false;
var opacSet = null;

var draw = function(r, num, initX, initY, moveFlag)
{
  var canvas = document.getElementById('circle');
  if (canvas.getContext)
  {
    var ctx = canvas.getContext('2d');
    switch(num) {
      case 0:
        drawCircle(canvas, ctx, r);
        break;
      case 1:
        drawDownLine(canvas, ctx, r, initX, initY);
        break;
      case 2:
        drawSideLine(canvas, ctx, r, initX, initY, moveFlag);
        break;
      default:
        break;
    }
  }
}

function drawCircle(canvas, ctx, r) {
  var X = 740;
  var Y = 300;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(X, Y, r, 0, 2 * Math.PI, false);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
}

function drawDownLine(canvas, ctx, r, initX, initY)
{
  ctx.beginPath();
  ctx.moveTo(initX, initY);
  ctx.lineTo(initX, r);
  ctx.lineWidth = 10;
  ctx.stroke();
}

function drawSideLine(canvas, ctx, r, initX, initY, flag)
{
  ctx.beginPath();
  ctx.moveTo(initX, initY);
  if(flag == 1) ctx.lineTo(initX + r, initY);
  else ctx.lineTo(initX - r, initY);
  ctx.lineWidth = 10;
  ctx.stroke();
}

function initPosition(img, index)
{
  if(index == 0) {
    img.style.position = 'absolute';
    img.style.top =  '260px';
    img.style.left = '600px';
  }
  imgObject[index] = img;
}

function appearSpaceLogo(opac, index)
{
  imgObject[index].style.opacity = opac;
}
