// import "./assets/css/styles.css";

// // ajouter/retirer de l'argent
// // gestion du solde (voir le solde, balance doit être mise à jour automatiquement) et découvert autorisé
// // virement bancaire

// import User from "./components/user";

// const submitUser = document.getElementById("submit-user");
// const accountNumber = document.getElementById("account-number");
// const resultsAccount = document.getElementById("results-account");

// function addUser() {
//   let user = new User (accountNumber.value);

//   resultsAccount.append(user.accountNumber);
// }

// // ADD EVENT TO A BUTTON
// submitUser.addEventListener("click", addUser);

// // FONCTION FLÉCHÉ 2022

//  const Phone = () => {}

// HERITAGE
class Phone {
  constructor(price, color, brand) {
    super(category);
    this.color = color;
    this.price = price;
    this.brand = brand;
  };

  show() {
    console.log(`Catégorie : ${super.headphones()}`);
  }
};

let phone = new Phone ("blue", 500, "apple", "airpods");
let phone2 = new Phone2 ("silver", 1000, "samsung");
console.log(phone, phone2);

class Accessory {
  constructor(category) {
    this.category = category;
  };

  headphones() {
    return `mon casque est un : ${this.category}`;
  };

  earphones() {
    return `mes écouteurs sont des : ${this.category}`;
};
};



// import Computer from './computer';

// let hatim = new Computer("ssd", "Rtx3090", "intel 7");
// let warren = new Computer("hdd", "lorem", "amd 5");

// console.log(hatim);
// console.log(warren);

// const btn = document.getElementById("submit");
// const hardDisk = document.getElementById("hard-disk");
// const gpu = document.getElementById("gpu");
// const cpu = document.getElementById("cpu");
// const category = document.getElementById("category");

// const resultsHdd = document.getElementById("results-hdd");
// const resultsgpu = document.getElementById("results-gpu");
// const resultscpu = document.getElementById("results-cpu");
// const resultsCategory = document.getElementById("results-category");

// const submitForm = () => {
//     let computer = new Computer(hardDisk.value, gpu.value, cpu.value, category.value);
//     resultsHdd.append(computer.hardDisk);
//     resultsgpu.append(computer.gpu);
//     resultscpu.append(computer.cpu);
//     resultsCategory.append(computer.category);
//     console.log(computer);
// }
// btn.addEventListener("click", submitForm);

// let a = new Computer("hdd", "rtc", "intel", "keybo");
// console.log(a);
// class AccessoryPc {
//     constructor(category) {
//         this.category = category;
//     };

//     keyboard(value) {
//         value = this.category;
//         try {
//             if(value === "keyboard") {
//                 return "je suis un clavier.";
//             } else {
//                 return "keyboard error";
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

// class Computer extends AccessoryPc {
//     constructor(hardDisk, gpu, cpu, category) {
//         super(category);
//         this.hardDisk = hardDisk;
//         this.gpu = gpu;
//         this.cpu = cpu;
//     };
// };

// export default Computer;

// // IIFE

//       (function () {
//         let test = "test";
//         console.log(test);
//       })();

//       (function () {
//         let test = "test";
//         console.log(test);
//       })();

//       (function () {
//         let test = "test";
//         console.log(test);
//       })();

// PROMESSE

// class Phone {
//   constructor(color, price) {
//     this.color = color;
//     this.price = price;
//   }
// }

// const time = () => {
//   setTimeout(() => {
//     console.log(new Phone("red", 1700));
//     setInterval(() => {
//       console.log(new Phone("blue", 1700));
//     }, 50000);
//   }, 50000);
// };

// time();

// const promise = (message) => {
//   setTimeout(() => {
//     console.log(message);
//     return message;
//   }, 1000);
// };

// let promisee = new Promise((resolve, reject) => {
//   resolve(
//     setTimeout(() => {
//       "42";
//     })
//   );
// });

// promisee
//   .then(() => {
//     console.log("true");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   // ! IFFE

//   (function () {
//     let test = "test";
//     console.log(test);
//   })();

//   (function () {
//     let test = "test";
//     console.log(test);
//   })();

//   (function () {
//     let test = "test";
//     console.log(test);

//     // ADD EVENT TO A BUTTON
// submitUser.addEventListener("click", addUser);

// // // FONCTION FLECHES 2022

// const Phone = () => {}

// // // HERITAGE

// class Phone {
// constructor(price, color, brand) {
// super(category);
// this.color = color;
// this.price = price;
// this.brand = brand;
// };

// show() {
// console.log(`Catégorie : ${super.headphones()}`);
// }
// };

// let phone = new Phone ("blue", 500, "apple", "airpods");
// let phone2 = new Phone2 ("silver", 1000, "samsung");
// console.log(phone, phone2);

// class Accessory {
// constructor(category) {
// this.category = category;
// };

// headphones() {
// return `mon casque est un : ${this.category}`;
// };

// earphones() {
// return `mes écouteurs sont des : ${this.category}`;
// };
// };

// // ! DARK MODE

// const btn = document.getElementById("dark-mode");
// const body = document.querySelector("body");
// const title = document.querySelectorAll("h1");

// const darkMode = () => {
//     body.classList.toggle("bg-black");
//     body.classList.toggle("text-white");
//     title.forEach((value) => {
//         value.classList.toggle("bg-red-500")
//     })
// };

// btn.addEventListener("click", darkMode);
// // !

// class FindClothes {
//   constructor(category) {
//     this.category = category;
//   }
//   SearchCategory(value) {
//     value = this.category;
//     switch (value) {
//       case "shirt":
//         console.log("je suis un t-shirt");
//         break;
//       case "shoes":
//         console.log("je suis une chaussure");
//       default:
//         console.log("je suis une alerte");
//         break;
//     }
//   }
// }

// export default FindClothes;

// import FindClothes from "./findClothes";

// export class Shirt extends FindClothes {
//   constructor(colors, size, mark, category) {
//     super(category);
//     this.colors = colors;
//     this.size = size;
//     this.mark = mark;
//   }
//   FindCategory() {
//     return `${super.SearchCategory()}`;
//   }
// }

// export class Shoes extends FindClothes {
//   constructor(colors, size, mark, category) {
//     super(category);
//     this.colors = colors;
//     this.size = size;
//     this.mark = mark;
//   }
// }
// import "./assets/css/styles.css";
// import { Shirt, Shoes } from "./clothes";
// import FindClothes from "./findClothes";

// let KillianShirt = new Shirt("blue", "XXL", "Nike", "shirt");
// let KillianShoes = new Shoes("white", "34", "Abibas", "shoes");
// KillianShirt.FindCategory();

// console.log(KillianShirt, KillianShoes);

// let array = [1, 2, 3];
// console.log(array);
// array.push(4);
// [...array] = [...array, 5];

// result.innerHTML = startingMoney;

// let solde = 5;
// solde <= -100 ? console.log("true") : console.log("false");

// import "./assets/css/styles.css";

// let string = "true";
// let number = 23;
// let array = [];
// let nulll = null;
// let object = {};
// let fonction = () => {};
// let symbole = new Symbol();
// let undefined;
// let truee = true;
// let falsee = false;
// let bigInt = bigInt();

// try {
//   string.length >= 1 ? console.log("true") : console.log("false");
// } catch (error) {
//   console.error(error);
// }

// switch (string) {
//   case string.length >= 1:
//     console.log("true");
//     break;
//   case "false":
//     console.log("false");
//   default:
//     break;
// }

// array.push(23);
// console.log(array);
// [...array] = [...array, 234, 453];
// console.log(array);

// array.forEach((element) => {
//     console.log(element);
// });

// array.map((element) => {
//     array.push(element," /" +40);
//     console.log(array);
// })

// // class

// class FilterProfil {
//   constructor(size, weight, number) {
//     this.size = size;
//     this.weight = weight;
//     this.number = number;
//   }

//   filterSize() {
//     return "je suis la taille";
//   }

//   filterWeight() {
//     return "je suis le poid";
//   }

//   filterNumber() {
//     return "je suis le nombre";
//   }
// }

// class Profil extends FilterProfil {
//   constructor(size, weight, number) {
//     super(size, weight, number);
//     this.size = size;
//     this.weight = weight;
//     this.number = number;
//   }

//   getFilterSize(size) {
//     size = this.size
//     try {
//         size.length >= 1 ? console.log("true") : console.log("false");
//     } catch (error) {
//         console.error(error);
//     }
//   }
// }

// let karine = new Profil("176cm", "80kg", 5);
// console.log(karine);
// karine.getFilterSize();

// const path = require("path");
// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');

// ajouter/retirer de l'argent
// gestion du solde (voir le solde, balance doit être mise à jour automatiquement) et découvert autorisé
// virement bancaire

// import User from "./components/user";

// const submitUser = document.getElementById("submit-user");
// const accountNumber = document.getElementById("account-number");
// const resultsAccount = document.getElementById("results-account");

// function addUser() {
//   let user = new User (accountNumber.value);

//   resultsAccount.append(user.accountNumber);
// }




// import Computer from './computer';

// let hatim = new Computer("ssd", "Rtx3090", "intel 7");
// let warren = new Computer("hdd", "lorem", "amd 5");

// console.log(hatim);
// console.log(warren);

// const btn = document.getElementById("submit");
// const hardDisk = document.getElementById("hard-disk");
// const gpu = document.getElementById("gpu");
// const cpu = document.getElementById("cpu");
// const category = document.getElementById("category");

// const resultsHdd = document.getElementById("results-hdd");
// const resultsgpu = document.getElementById("results-gpu");
// const resultscpu = document.getElementById("results-cpu");
// const resultsCategory = document.getElementById("results-category");

// const submitForm = () => {
//     let computer = new Computer(hardDisk.value, gpu.value, cpu.value, category.value);
//     resultsHdd.append(computer.hardDisk);
//     resultsgpu.append(computer.gpu);
//     resultscpu.append(computer.cpu);
//     resultsCategory.append(computer.category);
//     console.log(computer);
// }
// btn.addEventListener("click", submitForm);

// let a = new Computer("hdd", "rtc", "intel", "keybo");
// console.log(a);
// class AccessoryPc {
//     constructor(category) {
//         this.category = category;
//     };

//     keyboard(value) {
//         value = this.category;
//         try {
//             if(value === "keyboard") {
//                 return "je suis un clavier.";
//             } else {
//                 return "keyboard error";
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

// class Computer extends AccessoryPc {
//     constructor(hardDisk, gpu, cpu, category) {
//         super(category);
//         this.hardDisk = hardDisk;
//         this.gpu = gpu;
//         this.cpu = cpu;
//     };
// };

// export default Computer;