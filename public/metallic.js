// Makes every ".metallic" surface glint as the page scrolls: a band of light
// sweeps across each panel based on how far it has travelled through the
// viewport, faking the look of light hitting real metal.

// Skip the whole effect if the visitor prefers reduced motion.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const panels = document.querySelectorAll(".metallic");

  // Recompute every panel's glint position. Called on scroll/resize.
  function updateGlint() {
    const viewportHeight = window.innerHeight;

    panels.forEach(function (panel) {
      const rect = panel.getBoundingClientRect();

      // progress = 0 when the panel's top is at the bottom of the screen,
      // 1 when it has scrolled up to the top. (rect.top runs from
      // viewportHeight down to -rect.height as you scroll past it.)
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);

      // map 0..1 progress to a 0%..100% background position for the sheen band
      const glint = Math.max(0, Math.min(1, progress)) * 100;
      panel.style.setProperty("--glint", `${glint}%`);
    });
  }

  // Scroll fires very rapidly, so we don't run the math on every single event.
  // Instead we set a flag and let requestAnimationFrame run the update once per
  // frame (~60x a second), which is smooth and much cheaper.
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        updateGlint();
        ticking = false;
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateGlint(); // set the starting positions once on load
}
