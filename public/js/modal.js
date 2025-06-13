document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("recruiterModal");
  const openBtn = document.getElementById("recruiterBtn");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
