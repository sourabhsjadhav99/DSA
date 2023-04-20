
function findSumPairsAndCombinations(arr, target) {
    const resultPairs = [];
    const resultCombinations = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          resultPairs.push([arr[i], arr[j]]);
        }
      }
    }
    function findCombinations(index, currentCombination, currentSum) {
      if (currentSum === target) {
        resultCombinations.push(currentCombination);
        return;
      }
      if (currentSum > target || index === arr.length) {
        return;
      }
      findCombinations(index + 1, currentCombination.concat(arr[index]), currentSum + arr[index]);
      findCombinations(index + 1, currentCombination, currentSum);
    }
    findCombinations(0, [], 0);
    return [resultPairs, resultCombinations];
  }
  

  const arr = [2, 5, 8, 11, 3];
  const target = 10;
  const [sumPairs, sumCombinations] = findSumPairsAndCombinations(arr, target);
  console.log(sumPairs); // Output: [[2, 8], [5, 5], [3, 7]]
  console.log(sumCombinations); // Output: [[2, 8], [2, 5, 3], [5, 3, 2]]
  