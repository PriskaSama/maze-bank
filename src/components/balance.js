// let sold = 3500;
// sold <= -100 ? console.log("true") : console.log("false");

// solde doit prendre valeur de dépôt et retrait pour être additionné
// newsolde = valeur de depositInput + solde
// newsolde = valeur de retrait withdrawInput - solde
// afficher nouveau solde ("total solde")

const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("deposit-btn");

const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("withdraw-btn");

const totalBalance = document.getElementById("balance");
const deposits = [];
const withdrawals = [];

let balance = 3500;

depositBtn.addEventListener("click", () => {
  if (isNaN(depositInput.value)) {
    alert("Veuillez entrer un chiffre.");
    return (depositInput.value = "");
  } else {
    if (depositInput.value < 10 && depositInput.value > 1000) {
      alert("Vous ne pouvez ajouter qu'entre 10€ et 1000€.");
      return (depositInput.value = "");
    } else {
      deposits.push(parseInt(depositInput.value));
      balance += parseInt(depositInput.value);
    }
  }
});

withdrawBtn.addEventListener("click", () => {
  if (isNaN(withdrawInput.value)) {
    alert("Veuillez entrer un chiffre.");
    return (withdrawInput.value = "");
  } else {
    if (withdrawInput.value > balance - 300) {
      alert("Vous avez atteint la limite maximum de retrait.");
      return (withdrawInput.value = "");
    } else {
      withdrawals.push(parseInt(withdrawInput.value));
      balance -= parseInt(withdrawInput.value);
    }
  }
});

// const newBalance = () => {
//   let addBalance = parseInt(depositInput.value) += balance;
//   let withdrawBalance = parseInt(withdrawInput.value) -= balance;
// };

export default balance;

// AJOUTER LE ENTER