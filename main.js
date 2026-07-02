// changes greeting based on the time of day

const heading = document.querySelector(".title-text");
const hour = new Date().getHours();

if (hour < 12) {
  heading.textContent = "Good morning - assume I'm not working on this.";
} else if (hour < 18) {
  heading.textContent = "Good afternoon - I'm probably being lazy and not working on this.";
} else {
  heading.textContent = "Good evening - I'm actually prob working on this.";
}

// changes logo text to a random message when clicked

const messages = [
    "you found the secret",
    "bomb dot com goes hard",
    "why are you clicking me"
  ];
  
  const logo = document.querySelector(".logo a");
  const chance = 0.1;
  
  logo.addEventListener("click", function (event) {
    if (Math.random() < chance) {
      event.preventDefault();
  
      const random = messages[Math.floor(Math.random() * messages.length)];
      logo.textContent = random;
    }
  });

  function fitLogoText(linkElement, maxSize = 35, minSize = 14) {
    linkElement.style.fontSize = maxSize + "px";
  
    const container = linkElement.parentElement;
  
    while (
      linkElement.scrollWidth > container.clientWidth &&
      parseFloat(linkElement.style.fontSize) > minSize
    ) {
      linkElement.style.fontSize =
        parseFloat(linkElement.style.fontSize) - 1 + "px";
    }
  }

  fitLogoText()