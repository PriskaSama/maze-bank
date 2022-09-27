// pour taper la touche "entrer" pour valider.
inputDeposit.addEventListener("keydown", (key) => {
  console.log(key.code);
  if (key.code === "Enter") {
    alert("a");
  }
});

key.code === "Enter" ? alert("a") : "";