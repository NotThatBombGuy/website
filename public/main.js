// querySelector returns null if the element isn't on this page, so we check
// for it first — otherwise setting .textContent on null would crash the script.
const heading = document.querySelector(".hero-welcome");
if (heading) {
  const headmes = [
  "Welcome...",
  "Great googily moogily this site is cool!",
  "It's actually kind of hard to come up with ideas for these.",
  "Bro ACTUALLY went to this website in the big '26",
  "Did you know? Roblox go boing boing yes? Wow.",
  "Some say that there is a secret page around here somewhere...",
  "I am Mart, the Water Imp... wait no I'm not...",
  "uhhhhhhh ummm uhhhh uhhhhmmmm uhhhhhhmmmmmmmmmm uhhhh uhhhhhhhhhhh ummmmm uhmmmm um uhhhhhhh ummmmm uh ummmmm",
  "Hello everybody my name is Markiplier and I am a fish.",
  "Coming straight from YOUR house!",
  ];
  
  const random = headmes[Math.floor(Math.random() * headmes.length)];
  heading.textContent = random;
}

// changes the nav logo text to a random message when clicked (10% of the time)
const messages = [
  "you found the secret",
  "bomb dot com",
  "why are you clicking me",
];

const logo = document.querySelector(".logo a");
const chance = 0.1;

if (logo) {
  logo.addEventListener("click", function (event) {
    if (Math.random() < chance) {
      event.preventDefault();
      const random = messages[Math.floor(Math.random() * messages.length)];
      logo.textContent = random;
    }
  });
}
