var html_arr = ['rep04_01_01_Intro.html','rep04_01_02_main.html', 'rep04_02_00_contents.html', 'rep04_03_00_articles.html', 'rep04_04_00_final.html']
var popUpFlag = [false, false];

function canNext(curr_idx)
{
  if(curr_idx + 1 < html_arr.length) moveToNext(curr_idx);
}

function canPrev(curr_idx)
{
  if(curr_idx - 1 >= 0) moveToPrev(curr_idx);
}

function changeImage(img, flag)
{
  var src;
  switch(flag)
  {
    case 0:
      src = "team4/img/00sub/prev.PNG";
      break;
    case 1:
      src = "team4/img/00sub/past.PNG";
      break;
    case 2:
      src = "team4/img/00sub/next.PNG";
      break;
    case 3:
      src = "team4/img/00sub/post.PNG";
      break;
    case 4:
      src = "team4/img/02Contents/ex1b.jpg";
      break;
    case 5:
      src = "team4/img/02Contents/space1.PNG";
      break;
    case 6:
      src = "team4/img/02Contents/ex2b.jpg";
      break;
    case 7:
      src = "team4/img/02Contents/space_2.PNG";
      break;
    default: break;
  }

  img.src = src;
}

function moveToNext(curr_idx)
{
  var src = html_arr[curr_idx + 1];
  self.close();
  window.open(src);
}

function moveToPrev(curr_idx)
{
  var src = html_arr[curr_idx - 1];
  self.close();
  window.open(src);
}

function popUpPage(index)
{
  if(index == 0) {
    //var src='rep04_02_01_contents.html';
    popUpFlag[0] = true;
    //window.open(src);
  } else if (index == 1) {
    //var src='rep04_02_02_contents.html';
    popUpFlag[1] = true;
    //window.open(src);
  }

  if(popUpFlag[0] || popUpFlag[1]) {
    var src='https://youtu.be/tF8a8Jq0RCc';
    window.open(src);
    popUpButton();
  }
}

function popUpButton()
{
  var position = document.createElement("img");
  position.src = "team4/img/02Contents/nextButton.PNG";
  position.style.top = '1420px';
  position.style.left = '305px';
  position.style.position = 'absolute';
  position.onclick = function(){
    var src = "rep04_03_00_articles.html";
    self.close();
    window.open(src);
  }
  document.getElementById("bottomButton").appendChild(position);
}
