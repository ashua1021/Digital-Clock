const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEL = document.getElementById ("ampm");


function updateClock()
{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM"



  if(h > 12)
{
  ampm = "PM";
}
/*   if(h<10)
  { 
    h = "0" + h;
  }
 */  

  h = h < 10 ? "0" + h : h; 
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  /* if(m < 10)
  {
    m = "0" + m;
  }



  if(s < 10)
  {
    s = "0" + s;
  } */
  

  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEL.innerText=ampm; 
}

updateClock();
setInterval(updateClock, 1000)