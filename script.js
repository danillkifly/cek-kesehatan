document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector('input[type="nama"]');
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name) {
      popupText.innerHTML = `<span style="font-size:1.5em; font-weight:bold;">${name} Pengen Sehat?,<br>KELUAR OLAHRAGA ANJ.</span>`;
      popup.style.display = "flex";
    } else {
      popupText.textContent = "Silakan isi nama dan umur terlebih dahulu.";
      popup.style.display = "flex";
    }
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
