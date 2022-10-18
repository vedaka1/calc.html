function changeColor(){
    let color1 = document.querySelector('#colorPicker1').value;
    let color2 = document.querySelector('#colorPicker2').value;
    document.body.style.background = 'linear-gradient('+color1+','+color2+')';
    
  }

function calculate(){
  let a = document.querySelector('#calc_field').value;
  let b = eval(a);
  document.getElementById('calc_field').value = b;
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