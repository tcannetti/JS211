class BankAccount {
  constructor(){

    this.transactions = [] // this should hold transaction objects
  }

  /**
   * deposit amount into account 
   * @param {*} amt 
   */
  deposit(amt){

  }

  /**
   * 
   * @param {string} payee the person you are paying
   * @param {number} amt the amount you are paying
   */
  charge(payee, amt){

  }

  /**
   * returns the current balance on the account 
   */
  balance(){

  }
}

class Transaction{

  description; // description of the transaction
  amt; // the amt of transaction
  constructor(){

  }
}


let account = new BankAccount('1234', "John Smith");

account.balance() // 0
account.deposit(100);

account.balance(); // 100

//cannot do negative deposit
account.deposit(-100)
account.balance(); //100

account.charge("target", 50);
account.balance(); //50

// cannot overcharge
account.charge('Diamon Store', 1000);
account.balance(); // 50

// can do refunds
account.charge("target", -20);
account.balance(); // 70

account.transactions.length // 3