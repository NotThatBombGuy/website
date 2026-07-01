const source = document.querySelector(".echo-text");
const wrapper = document.querySelector(".echo-wrapper");

function spawnEcho() {
  const clone = document.createElement("span");
  clone.className = "echo-clone";
  clone.textContent = source.textContent;
  wrapper.appendChild(clone);

  const x = (Math.random() - 0.5) * 100;
  const y = 20 + Math.random() * 50;

  clone.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ],
    {
      duration: 600 + Math.random() * 400,
      easing: "ease-out",
      fill: "forwards"
    }
  ).onfinish = function () {
    clone.remove();
  };
}

setInterval(spawnEcho, 120);

const codes = {
    melvin: function () {
      showMelvin();
    },
  
    rainbow: function () {
      document.body.style.background =
        "linear-gradient(45deg, red, orange, yellow, green, blue, purple)";
    },
  
    home: function () {
      window.location.href = "./index.html";
    }
  };

const form = document.querySelector("#code-form");
  const input = document.querySelector("#code-input");
  const message = document.querySelector("#code-message");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // don't reload the page
  
    const typed = input.value.trim().toLowerCase();
  
    if (codes[typed]) {
      codes[typed]();           // run the matching action
      message.textContent = "";
      input.value = "";         // clear input
    } else {
      message.textContent = "...";
    }
  });

  function showMelvin() {
    let melvin = document.querySelector("#melvin");
  
    if (!melvin) {
      melvin = document.createElement("img");
      melvin.id = "melvin";
      melvin.src = "images/melvin.png";  // your image path
      melvin.alt = "Melvin Sneedly";
      melvin.className = "melvin-popup";
      document.body.appendChild(melvin);
    }
  
    melvin.style.display = "block";
  }