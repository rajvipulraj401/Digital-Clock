const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours(); // this is a method to get the hour .
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";// starting me am rkhte hai isme logic lagana padega if else wala .


  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;//ternary operator agr 10 se chhota hua toh
  //concatenate kr do 0 ke saath
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000); //1sec=1000ms
}

updateClock();