// Set the target date for the countdown (change this to your desired date)
const targetDate = new Date("2023-12-31 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = formatTimeUnit(days);
  document.getElementById("hours").innerHTML = formatTimeUnit(hours);
  document.getElementById("minutes").innerHTML = formatTimeUnit(minutes);
  document.getElementById("seconds").innerHTML = formatTimeUnit(seconds);
}

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
