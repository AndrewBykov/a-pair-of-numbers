

function findPairsWithSum(arr, num) {
  let pairs = [];

  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] + arr[j] === num) {
              pairs.push([arr[i], arr[j]]);
          }
      }
  }

  return `Пары чисел, дающих сумму ${num}: ${pairs.map(pair => `${pair[0]} + ${pair[1]}`).join(', ')}`;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 6; // Замените на желаемую сумму

let result = findPairsWithSum(arr, num);
console.log(result);
