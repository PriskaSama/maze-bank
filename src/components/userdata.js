
class UserLog {
  constructor(username, accountNumber, iban, bic, bankName) {
    this.username = username;
    this.accountNumber = accountNumber;
    this.iban = iban;
    this.bic = bic;
    this.bankName = bankName;
  };
};

let user = new UserLog ("Priska", 992778, "OP767899XXXX", "PRKSMA", "SHONENBANKS");


// export default UserLog;

// a importer dans formulaire account => créer formulaire account