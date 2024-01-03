let colors=["rgb(253 224 71)","rgb(252 165 165)","rgb(212 212 212)"];
let imgpath=["./images/chrome.db58996d.svg" ,"./images/mobile.548cdf6e.svg","./images/desktop.6a735a94.svg"];
var i=0;
function change(){
    document.body.style.background="radial-gradient(ellipse at 50% -10%,"+colors[i] + ", #181717, #000000)";
    document.body.style.color=colors[i];
    document.getElementById("icons").src=imgpath[i];
    i++;
    if(i>=colors.length){
        i=0;
    }
        
    window.setTimeout("change()",2000);
}
change();


var countDownDate = new Date("Jan 31, 2024 12:59:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML =minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time is Up";
  }
}, 1000);