let countdownInterval;

function startCountdown() {
  const duration = parseInt(document.getElementById("duration").value);
  const display = document.getElementById("countdownDisplay");

  let timeLeft = duration;

  clearInterval(countdownInterval); // Clear any previous intervals

  countdownInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      display.textContent = "Time's up!";
    } else {
      display.textContent = `Time Left: ${timeLeft--}s`;
    }
  }, 1000);
}
function showDelayedNotification(message, delay) {
    setTimeout(() => {
      alert(`⏰ Notification: ${message}`);
    }, delay);
  }
  let notificationInterval;

function startRepeatingNotification() {
  if (!notificationInterval) {
    notificationInterval = setInterval(() => {
      alert("🔔 This is a repeating notification!");
    }, 4000); // every 4 seconds
  }
}

function stopRepeatingNotification() {
  clearInterval(notificationInterval);
  notificationInterval = null;
}

  // Example usage:
  showDelayedNotification("This is your delayed reminder!", 5000); // after 5 seconds
  <button onclick="showDelayedNotification('Break time!', 3000)">Notify Me in 3s</button>

