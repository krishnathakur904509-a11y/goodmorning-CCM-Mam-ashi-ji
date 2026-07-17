new Typed("#typed", {
  strings: [
    "Decrypting Morning Message...",
    "Connecting to Sunshine...",
    "Loading Happiness...",
    "Access Granted ✔"
  ],
  typeSpeed: 45,
  backSpeed: 20,
  showCursor: true
});

// Loader
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";

  gsap.from(".content", {
    opacity: 0,
    y: 80,
    duration: 1.5
  });

}, 3000);

// Open Letter
document.getElementById("openBtn").onclick = () => {

  document.getElementById("letter").style.display = "flex";

  // Confetti
  confetti({
    particleCount: 200,
    spread: 100,
    origin: {
      y: 0.6
    }
  });

};
