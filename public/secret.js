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

// SECRET CODE STUF NOW

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
    },

    annoyingdog: function () {
      annoyingDog();
    },

    cat: function () {
      cat();
      let catrandomcat = Math.floor(Math.random() * 4) + 1;

      let catsound = new Audio('audio/Cat_idle' + catrandomcat + '.ogg.mp3');

      catsound.play()
    },
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

  function annoyingDog() {
    console.log("Dog called");

    const kaboom = new Audio('audio/deltarune-explosion.mp3');
    const drive = new Audio('audio/snd_drive.mp3');

    let toby = document.querySelector("#toby");

    if (!toby) {
        toby = document.createElement("img");
        toby.id = "toby";
        toby.src = "images/toby.png";
        toby.alt = "toby";
        toby.className = "toby-popup";
        document.body.appendChild(toby);
    }

    let flash = document.querySelector("#flash");
    if (!flash) {
        flash = document.createElement("img");
        flash.id = "flash";
        flash.src = "images/explo.gif";
        document.body.appendChild(flash);
    }

    flash.style.display = "none";

    // IMPORTANT: reset animation state
    toby.classList.remove("move-center");

    // FORCE browser to repaint before animation starts
    void toby.offsetWidth;

    toby.style.display = "block";
    toby.classList.add("move-center");
    drive.play()

    toby.addEventListener("animationend", function () {
        console.log("Animation finished!");
        toby.style.display = "none";
        flash.style.display = "block";
        kaboom.play()
        setTimeout(function () {
          flash.style.display = "none";
        }, 760);
    }, { once: true });
  }
    function cat() {
      let cat = document.querySelector("#cat");
      const randomcat = [
        "cat1.jpg",
        "cat2.gif",
        "cat3.webp",
        "cat4.jpg",
      ];
      console.log("cat!");
      const catrandom = randomcat[Math.floor(Math.random() * randomcat.length)];

      if (!cat) {
        cat = document.createElement("img");
        cat.id = "cat";
        cat.src = "images/" + catrandom;  // your image path
        cat.alt = "cat";
        cat.className = "cat-popup";
        document.body.appendChild(cat);
      }
    
      cat.style.display = "block";
    }
