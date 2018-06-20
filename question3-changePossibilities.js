// Question 3 -- changePossibilities(amount,amount): 
// Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, 
// computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
// your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

const changePossibilities = (amount, denominations) => {
  const coinCountCombos = [] //O(n) space where n = amount
  for (let i = 0; i <= amount; i++) { //O(m) time where m = amount
    coinCountCombos.push(0)
  }
  coinCountCombos[0] = 1
  for (let j = 0; j < denominations.length; j++) { //O(d) time where d = denom..
    for (let k = 1; k < coinCountCombos.length; k++) { //O(m) time where m = amount
      if (k >= denominations[j]) {
        coinCountCombos[k] += coinCountCombos[k - denominations[j]]
      }
    }
  }
  return coinCountCombos[amount]
}
//Total time complexity O(md + m ) ~ O(md) 
//Total space complexity O(n) 


console.log(changePossibilities(6, [1, 3, 5]))
console.log(changePossibilities(4, [1, 2, 3]))

module.exports = changePossibilities
