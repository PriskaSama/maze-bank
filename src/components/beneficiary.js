// BENEFICIAIRES VIREMENTS

class Beneficiary {
  constructor(benName, accountNumber, iban, bic, bankName) {
    this.benName = benName;
    this.accountNumber = accountNumber;
    this.iban = iban;
    this.bic = bic;
    this.bankName = bankName;
  };
};

let nami = new Beneficiary("Nami", 567869, "OP765345XXXX", "NSMBRY", "BERRYSBANK");
let zoro = new Beneficiary("Zoro", 346790, "OP765345XXXX", "RRONZR", "KATANABANKS");
let luffy = new Beneficiary("Luffy", 453234, "OP765467XXXX", "MKDLFY", "MEATBANKS");
let choppa = new Beneficiary("Choppa", 876798, "OP762367XXXX", "CHPRCC", "DOCTABANKS");

// export default Beneficiary;

// Exporter dans input => select a beneficiary
// Utiliser event "change" pour selectioner benef