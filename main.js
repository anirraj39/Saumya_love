
const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const index = (dayOfYear - 1) % notes.length;

document.getElementById("note").innerText = notes[index];
