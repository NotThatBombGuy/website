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

// CODE STUF NOW

const codes = {
    melvin: function () {
      showMelvin();
    },
  
    "shutupshawn!": function () {
      showPsych();
    },
  
    weird: function () {
      const weirdsound = new Audio('audio/weird.mp3');

      weirdsound.play()
    },

    doobmare: function () {
      showDoob();
      let doobrandom = Math.floor(Math.random() * 5) + 1;

      let doobsound = new Audio('audio/doob_' + doobrandom + '.mp3');

      doobsound.play()
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
      message.textContent = "[Accepted]";
      input.value = "";         // clear input
      input.placeholder = "[Registered]";
      input.disabled = true;
    } else {
      message.textContent = "[Denied]";
      input.value = "";         // clear input
      input.placeholder = "[Registered]";
      input.disabled = true;
    }
  });

  function showMelvin() {
    let melvin = document.querySelector("#melvin");
  
    if (!melvin) {
      melvin = document.createElement("img");
      melvin.id = "melvin";
      melvin.src = "images/melvin.webp";  // your image path
      melvin.alt = "Melvin Sneedly";
      melvin.className = "melvin-popup";
      document.body.appendChild(melvin);
      text = document.createElement("p");
      text.textContent = "the sneedification has begun";
      text.className = "melvin-text";
      text.style.textAlign = "center";
      text.style.fontSize = "20pt";
      text.style.color = "white";
      document.body.appendChild(text);
    }
  
    melvin.style.display = "block";
  }

  function showPsych() {
    let psych = document.querySelector("#psych");
  
    if (!psych) {
      psych = document.createElement("img");
      psych.id = "psych";
      psych.src = "images/pineapple.webp";  // your image path
      psych.alt = "Pineapple";
      psych.className = "psych-popup";
      document.body.appendChild(psych);
    }
  
    psych.style.display = "block";
  }

  function showDoob() {
    let doob = document.querySelector("#doob");
  
    if (!doob) {
      doob = document.createElement("img");
      doob.id = "doob";
      doob.src = "images/mare.png";  // your image path
      doob.alt = "doobmare";
      doob.className = "doob-popup";
      document.body.appendChild(doob);
    }
  
    doob.style.display = "block";
  }