// creates the floating background shapes and adds them to every page that includes this script

const shapeCount = 20;
const shapeTypes = ["triangle", "square", "circle"];
const bgContainer = document.createElement("div");
bgContainer.className = "bg-shapes";

// returns a random number between min and max (both inclusive-ish)
function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

// randomBetween, but 50/50 chance of being negative — used so shapes
// glide in different directions instead of all drifting the same way
function randomSigned(min, max) {
  const value = randomBetween(min, max);
  return Math.random() < 0.5 ? -value : value;
}

for (let i = 1; i <= shapeCount; i++) {
  const type = shapeTypes[(i - 1) % shapeTypes.length];
  const shape = document.createElement("div");
  shape.className = `bg-shape shape-${type}`;

  // position and size, as percentages/pixels
  shape.style.setProperty("--top", `${randomBetween(0, 90)}%`);
  shape.style.setProperty("--left", `${randomBetween(0, 90)}%`);
  shape.style.setProperty("--size", `${Math.round(randomBetween(50, 200))}px`);

  // how far it glides, in viewport-width/height units so it scales with screen size
  shape.style.setProperty("--dx", `${randomSigned(15, 35).toFixed(1)}vw`);
  shape.style.setProperty("--dy", `${randomSigned(10, 25).toFixed(1)}vh`);

  // timing, so shapes don't all move in lockstep
  shape.style.setProperty("--glide-duration", `${Math.round(randomBetween(35, 60))}s`);
  shape.style.setProperty("--spin-duration", `${Math.round(randomBetween(40, 70))}s`);

  bgContainer.appendChild(shape);
}

// insert as the very first element in <body>, so it sits behind everything else
document.body.insertBefore(bgContainer, document.body.firstChild);
