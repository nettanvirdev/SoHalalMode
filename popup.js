document.addEventListener("DOMContentLoaded", () => {
  const totalImagesReplaced = Math.floor(Math.random() * 100);
  const lastUpdated = new Date().toLocaleString();
  document.getElementById("totalReplaced").textContent = totalImagesReplaced;
  document.getElementById("lastUpdated").textContent = lastUpdated;
});
