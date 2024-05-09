document.addEventListener("DOMContentLoaded", function () {
  loadTip();
  buildCalendar();
});

function loadTip() {
  const tips = [
    "Beba água",
    "30 min de caminhada",
    "Alongue-se",
    "Coma frutas",
    "Durma bem",
    "Evite açúcar",
    "Mantenha consistência",
  ];
  const today = new Date().getDay();
  document.getElementById("tip-of-the-day").innerText = tips[today];
}

function buildCalendar() {
  const calendar = document.getElementById("calendar");
  for (let i = 1; i <= 30; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = i;

    const event = document.createElement("div");
    event.className = "event";
    event.innerText = "Evento " + i; // Example text
    day.appendChild(event);

    calendar.appendChild(day);
  }
}
