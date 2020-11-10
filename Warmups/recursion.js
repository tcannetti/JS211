// Factorial 
// n! = 1  --- if n is 1
// n! = n x (n-1)!  --- if n is greater than 1

// 1! = 1
// 2! = 2 * 1! = 2
// 3! = 3 * 2! = 6
// 12! = 12 * 11!

function factorial(number){
  // this vvv line stops the function at a certain point
  if(number == 1){ 
    return 1;
  } else {
    return number * factorial(number-1);
  }
}

console.log(factorial(12));


// Fibonocci 
// fib(n) == the same as "number at position n"

// n is the position of the number
// n=0, what is the number at position n? 0
// n=1, what is the number at position n? 1
// n=2, what is the number at position n? 1
// n=3, what is the number at position n? 2
// n=4, what is the number at position n? =>
// is the number at position 2 + the number at position 3
// n=5, what is fib(n)? fib(3) + fib(4)
// n=6. what is fib(n)? fib(n-2) + fib(n-1)

// fib(n) = 0 when n = 0
// fib(n) = 1 when n = 1
// fib(n) = fib(n-2) + fib(n-1) when n > 1


function fib(n){
  if(n == 0){
    return 0;
  } 
  if(n == 1){
    return 1;
  }
  if(n >1){
    return fib(n-2) + fib(n-1);
  }
}


console.log(fib(35))


/**
 * 
 * if its the first day the money is in the account you earn 10c= cents
 * if its the second day you earn 5 cents
 * for every subsequent day, you earn .02% if the previous days balance 
 * 
 * 
 * if i deposit $500 what is the balance day 325
 * 
 */

function balance(initialBalance, balanceDay){
  if(balanceDay == 1){
    return initialBalance + .1;
  }
  if(balanceDay == 2){
    return balance(initialBalance, balanceDay-1) + .05
  }
  let previousDaysBalance = balance(initialBalance, balanceDay -1);
  return previousDaysBalance * .0002 + previousDaysBalance;
}

console.log(balance(500, 325));