// Class that represents Bank Account

class BankAccount {
  accountNumber;
  owner;
  transactions;



  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [] // this should hold transaction objects, initally set to empty array. 
  }

  /**
   * This method takes in a single input, the deposit amount. 
   * This method should create a new transaction representing the deposit, and add it to the transactions array.
   * @param {number} amt should only be positive number
   */
  deposit(amt){
    // prevent negative numbers from being deposited
    if (amt < 0){
      return;
    } else {
      // create a variable for the new deposit, use the Transaction class
      let depositNew = new Transaction(amt);
      // push to the new variable
      this.transactions.push(depositNew);
    }
  }



  /**
   * This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
   * !!!!! You should not be able to charge an amount that would make your balance dip below 0 !!!!!
   * 
   * @param {string} payee the person you are paying
   * @param {number} amt the amount you are paying
   */
  charge(amt, payee){
    // You should not be able to charge an amount that would make your balance dip below 0
    if (this.balance() < amt * -1){
      return "This account has insufficient funds, purchase declined."
    } else {
      // declare charge variable with new Transaction class
      let charge = new Transaction(amt, payee);
      // push the charge to the charge 
      this.transactions.push(charge);
    }
  }



  /**
   * This method does not take any input, and returns the current balance on the account.
   * The balance is computed by summing up the amounts in the transactions array.
   */
  balance(){
    //it should always start at 0
    let balance = 0;
    // forEach loop to traverse through each array
    this.transactions.forEach((transaction) => {
      balance = balance + transaction.amt;
    })
    return balance;
  }

}


class Transaction{

  description; // description of the transaction
  amt; // the amt of transaction
  date; // date of transaction
  constructor(amt, payee){
    this.amt = amt;
    this.payee = payee;
    this.date = Date.now();
  }
}


let account = new BankAccount('1234', "John Smith");
console.log(account)

account.balance() // 0
account.deposit(100);
console.log(account.balance())

account.balance(); // 100

//cannot do negative deposit
account.deposit(-100)
account.balance(); //100
console.log(account.balance())

account.charge("target", 50);
account.balance(); //50

// cannot overcharge
account.charge('Diamon Store', 1000);
account.balance(); // 50

// can do refunds
account.charge("target", -20);
account.balance(); // 70

account.transactions.length // 3