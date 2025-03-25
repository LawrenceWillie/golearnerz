const targetDate = new Date('May 12, 2025 00:00:00').getTime();
const daysElement = document.getElementById('days-count');
const hoursElement = document.getElementById('hours-count');
const minutesElement = document.getElementById('minutes-count');
const daysCircle = document.querySelector('#days-circle .progress-circle-bar');
const hoursCircle = document.querySelector('#hours-circle .progress-circle-bar');
const minutesCircle = document.querySelector('#minutes-circle .progress-circle-bar');

const circleLength = daysCircle.getTotalLength(); // Reusable circle length

// Function to scale colors from Green to Red
function getColorFromTime(remainingTime, maxTime) {
  // Calculate percentage of time remaining
  const percentageRemaining = remainingTime / maxTime;

  // Interpolate between green and red
  const red = Math.floor(255 * (1 - percentageRemaining));
  const green = Math.floor(255 * percentageRemaining);
  const blue = 0;

  // Return the color as a CSS string
  return `rgb(${red}, ${green}, ${blue})`;
}

function updateProgressBar(circle, value, maxValue) {
  const offset = (value / maxValue) * circleLength;
  circle.style.strokeDashoffset = circleLength - offset;
}

setInterval(function () {
  const now = Date.now();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    // Target date has passed, stop updates
    clearInterval(this);
    return;
  }

  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  // Update text only if values have changed
  if (daysRemaining !== parseInt(daysElement.innerText)) {
    daysElement.innerText = daysRemaining;
    updateProgressBar(daysCircle, daysRemaining, 365);
    daysCircle.style.stroke = getColorFromTime(daysRemaining, 365);
  }
  if (hoursRemaining !== parseInt(hoursElement.innerText)) {
    hoursElement.innerText = hoursRemaining;
    updateProgressBar(hoursCircle, hoursRemaining, 24);
    hoursCircle.style.stroke = getColorFromTime(hoursRemaining, 24);
  }
  if (minutesRemaining !== parseInt(minutesElement.innerText)) {
    minutesElement.innerText = minutesRemaining;
    updateProgressBar(minutesCircle, minutesRemaining, 60);
    minutesCircle.style.stroke = getColorFromTime(minutesRemaining, 60);
  }
}, 1000);
