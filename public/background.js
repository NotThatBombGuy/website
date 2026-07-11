// Builds two fixed black columns (one on each side of the screen) filled with
// white shapes that cycle triangle -> circle -> square and rise slowly upward
// on a seamless loop.

const shapesPerColumn = 18;
const shapeTypes = ["triangle", "circle", "square"];
const riseDuration = 16; // seconds for one shape to travel bottom -> top

// Builds a single side column ("left" or "right") and returns the element.
function buildColumn(side) {
  const column = document.createElement("div");
  column.className = `side-shapes ${side}`;

  for (let i = 0; i < shapesPerColumn; i++) {
    const type = shapeTypes[i % shapeTypes.length];
    const shape = document.createElement("div");
    shape.className = `side-shape shape-${type}`;

    // all shapes share one size so the column reads as a tidy stream
    shape.style.setProperty("--size", "34px");
    shape.style.setProperty("--rise-duration", `${riseDuration}s`);

    // spread the shapes evenly along the loop using negative delays, so the
    // stream is already full on load instead of starting empty. A negative
    // delay means "pretend this animation started N seconds ago".
    const delay = -(riseDuration / shapesPerColumn) * i;
    shape.style.setProperty("--delay", `${delay}s`);

    column.appendChild(shape);
  }

  return column;
}

const left = buildColumn("left");
const right = buildColumn("right");

// add both columns as the first things in <body> so they sit behind the content
document.body.insertBefore(right, document.body.firstChild);
document.body.insertBefore(left, document.body.firstChild);
