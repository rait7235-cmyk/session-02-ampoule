document.querySelector("#ampoule").onclick = toggle;

function toggle(event) {
  let etat = document.querySelector("#etat");

  if (etat.textContent == "éteinte") {
    event.target.setAttribute("src", "ampoule_on.png");
    etat.textContent = "allumée";
    document.body.classList.add("light-room");
  } else {
    event.target.setAttribute("src", "ampoule_off.png");
    etat.textContent = "éteinte";
    document.body.classList.remove("light-room");
  }

  event.target.setAttribute("alt", "Ampoule " + etat.textContent);
}

