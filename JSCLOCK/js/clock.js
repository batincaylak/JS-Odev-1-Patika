let personName = prompt("Lütfen adınızı girin.");
let myName = document.getElementById("myName");
let clock = document.querySelector(".clock");

myName.innerHTML = personName;

function timeFnc() {
  const weekday = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  const day = new Date();
  let hours = day.getHours();
  let sec = day.getSeconds();
  let min = day.getMinutes();
  let now = weekday[day.getDay()];

  let time = `${hours} : ${min} : ${sec} ${now}`;
  clock.innerHTML = time;
}
setInterval(timeFnc, 1000);
