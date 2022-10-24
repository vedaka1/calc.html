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

let buffer = "0"

const screen = document.querySelector('.screen');

function buttonClick(value){
  if(isNaN(value)){
    handleSymbol(value);
  }else{
    handleNumber(value)
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol){
  switch(symbol){
    case 'C':
      buffer = '0';
      break;
    case '=':
      buffer = eval(screen)
      break;
    case '←':
      if(buffer.length === 1){
        buffer = '0'
      }else{
        buffer = buffer.toString(0, buffer.length - 1);
      }
      break
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol){
  if(buffer === '0'){
    return;
  }

  const intBuffer = parseInt(buffer);

  
}