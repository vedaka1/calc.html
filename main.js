function changeColor(){
    let color = document.querySelector('#colorPicker').value;
    document.body.style.backgroundColor = color;
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