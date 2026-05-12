let currentPage = 1;

const totalPages = 4;

const coverView = document.getElementById("coverView");
const bookView = document.getElementById("bookView");

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

const turnSound = document.getElementById("turnSound");

/* PAGE FILE NAME */

function pageFile(num) {

  return `pages/page${String(num).padStart(3, "0")}.png`;

}

/* PAGE TURN SOUND */

function playTurnSound() {

  turnSound.currentTime = 0;

  turnSound.play();

}

/* OPEN BOOK */

function openBook() {

  coverView.classList.add("hidden");

  bookView.classList.remove("hidden");

  playTurnSound();

}

/* UPDATE PAGES */

function updatePages() {

  leftPage.src = pageFile(currentPage);

  rightPage.src = pageFile(currentPage + 1);

}

/* NEXT SPREAD */

function nextSpread() {

  if (currentPage + 2 <= totalPages) {

    currentPage += 2;

    updatePages();

    playTurnSound();

  }

}

/* PREVIOUS SPREAD */

function prevSpread() {

  if (currentPage - 2 >= 1) {

    currentPage -= 2;

    updatePages();

    playTurnSound();

  }

  else {

    bookView.classList.add("hidden");

    coverView.classList.remove("hidden");

    playTurnSound();

  }

}