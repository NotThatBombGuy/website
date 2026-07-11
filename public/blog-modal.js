// Opens/closes the blog post modals. Each card has data-modal="someId" and each
// modal has a matching id="someId". Clicking a card opens its modal; clicking the
// close button, the dark backdrop, or pressing Escape closes it.

// Every minimized card.
const cards = document.querySelectorAll("[data-modal]");

// Opens the modal whose id matches the given value.
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden"; // stop the page behind from scrolling
}

// Closes whichever modal is currently open.
function closeModal() {
  const open = document.querySelector(".blog-modal.is-open");
  if (!open) return;
  open.classList.remove("is-open");
  document.body.style.overflow = ""; // let the page scroll again
}

// Wire up each card to open its own modal.
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    openModal(card.dataset.modal); // dataset.modal reads the data-modal attribute
  });
});

// Wire up closing on each modal: the X button and clicks on the backdrop.
document.querySelectorAll(".blog-modal").forEach(function (modal) {
  const closeBtn = modal.querySelector(".blog-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // a click directly on the backdrop (not on the inner box) closes it
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });
});

// Escape key closes any open modal.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeModal();
});
