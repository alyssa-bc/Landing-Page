//Landing Page

//Event Listener on Ham Icon
document.getElementById("ham-icon").addEventListener("click", hamIconClicked);

function hamIconClicked() {
  //Get Current Display Setting
  let displaySetting = document.getElementById("settings-div").style.display;

  //Test Current Display Setting

  if (displaySetting === "none") {
    document.getElementById("settings-div").style.display = "block";
  } else {
    document.getElementById("settings-div").style.display = "none";
  }
}

//Name and Focus
document.getElementById("saveSettings").addEventListener("click", saveSettings);

function saveSettings() {
  let name = document.getElementById("name-in").value;
  let focus = document.getElementById("focus-in").value;
  let bg = document.getElementById("bg").value;

  document.getElementById("name-out").innerHTML = `Hello ${name}!`;
  document.getElementById("focus-out").innerHTML = `${focus}`;

  // Background
  document.body.style.backgroundImage = `url('img/${bg}.jpg')`;
}

//Quote
document.getElementById("randQuote").addEventListener("click", quote);

function quote() {
  let randNum = Math.random();
  if (randNum < 0.1) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Adversity does teach who your real friends are." -Lois McMaster Bujold`;
  } else if (randNum < 0.2) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Life is far too important a thing ever to talk seriously about" -Oscar Wilde`;
  } else if (randNum < 0.3) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"People seem to enjoy things more when they know a lot of other people have been left out of the pleasure." -Russell Baker`;
  } else if (randNum < 0.4) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Indecision may or may not be my problem." - Jimmy Buffet`;
  } else if (randNum < 0.5) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything." -Sydney Smith`;
  } else if (randNum < 0.6) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Maybe life is random, but I doubt it" -Steven Tyler`;
  } else if (randNum < 0.7) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Random Chance okays a huge part in everybody's life" -Gary Gygax`;
  } else if (randNum < 0.8) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"You cannot overestimate the unimportance of practically everything" -John Maxwell`;
  } else if (randNum < 0.9) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `"Death does not concern us, becuase as long as we exist, death is not here. And when it doesn come, we no longer exist" -Unknown`;
  } else {
    document.getElementById(
      "quote-out"
    ).innerHTML = `Age is a question of minde over matter. if you don't mind, it don't matter" -Unknown`;
  }
}
