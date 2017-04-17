

// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.



// Input: 0.67
//   Output:
//   {
//     quarters: 2,
//     dimes: 1,
//     nickels: 1,
//     pennies: 2
//   }
function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(input/.25);
  coinPurse.dimes = Math.floor((input - (coinPurse.quarters * .25))/.10);
  coinPurse.nickels = Math.floor((input - (coinPurse.dimes * .10) - (coinPurse.quarters * .25))/.05);
  coinPurse.pennies = Math.floor((input - (coinPurse.dimes * .10) - (coinPurse.quarters * .25) - (coinPurse.nickels * .05))/.01);

  return coinPurse;
}

var coins = coinCounter(1.2)
console.log(coins);







