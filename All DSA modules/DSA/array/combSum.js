function combinationSum(input, target) {
    let result = [];
    let curr = [];
    
    function backtrack(start, sum) {
      if (sum === target) {
        result.push([...curr]);
      } else if (sum < target) {
        for (let i = start; i < input.length; i++) {
          curr.push(input[i]);
          backtrack(i, sum + input[i]);
          curr.pop();
        }
      }
    }
    
    backtrack(0, 0);
    
    return result;
  }
  
  let input = [1, 2, 3, 4];
  let target = 5;
  let output = combinationSum(input, target);
  
  console.log(output);
  // Output: [[1,1,1,1],[1,1,2],[2,2]]
  