const body = document.querySelector("body");
const bicycle = document.querySelector(".bicycle");
const balon = document.querySelector(".balon");
const pup = document.querySelector(".pup");


body.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (!balon.classList.contains("up")) {
      bicycle.classList.add("go");
      balon.classList.add("up");
      pup.classList.add("pop")

    } else {
      bicycle.classList.remove("go");
      balon.classList.remove("up");
      pup.classList.remove("pop")
    }
  }
});
