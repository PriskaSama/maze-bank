let currentSold = -160;
let overdraftSold = -150;

const overdraft = () => {
  if (currentSold < overdraftSold){
    console.log("retrait impossible");
  } else 
  console.log("retrait possible");
};

overdraft();

// installer decouvert authorisé + alerte quand seuil atteint "pas possible de retirer solde insuffisant"