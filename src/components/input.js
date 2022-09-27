import Beneficiary from "./beneficiary";

// BENIFICIARY INPUT BUTTON - DROP DOWN MENU? 
const selectPeople = document.getElementById("select-input");
// --------------------------

const Input = (type) => {
  let input = document.createElement("input");
  input.type = type;
  return input;
}

// DROP DOWN MENU
const input = document.querySelector('input');
const selectInput = document.getElementById('select-input');

input.addEventListener("change", updateValue);

selectInput.addEventListener("change"), (updateValue) => {
  const result = document.querySelector("result");
}

const updateValue = (select) => {
  selectInput.textContent = select.target.value;
};



// export default Input;