function changeColor(){
    let color1 = document.querySelector('#colorPicker1').value;
    let color2 = document.querySelector('#colorPicker2').value;
    document.body.style.background = 'linear-gradient('+color1+','+color2+')';
    
  }

function startTime(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    m=FullTime(m);
    s=FullTime(s);
    document.getElementById('times').innerHTML = h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
    }
    function FullTime(i)
    {
    if (i<10){
    i="0" + i;
    }
    return i;
    }

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn')

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerText = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal') {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal') {
      display.innerText = 'Empty!'
      setTimeout(() => (display.innerText = ''), 2000);
    } else {
      display.innerText += item.id;
    }
  } 
})