const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function tick() {
  const time = new Date();
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const interval = 6;

  secondHand.style.setProperty("--rotation", seconds * interval);
  minuteHand.style.setProperty("--rotation", minutes * interval + seconds / 10);
  hourHand.style.setProperty("--rotation", hours * 30 + minutes / 2);
}

tick();
setInterval(tick, 1000);