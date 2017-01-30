//There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).
//Few Billion
// How much was the reward after 30 days?
// Bonus:
//How many days would it take the servant to make $10,000?
//How about 1 billion?
// Using Infinity, how many days until the servant has infinite money?

function fewbillion(days){

  var reward =.01;

  for (var i = 0; i <= 30; i ++){

    reward = reward * 2;

    console.log(reward)
  }
}
fewbillion()
