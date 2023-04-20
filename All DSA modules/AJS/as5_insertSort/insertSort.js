function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToInsert = arr[i];
    let j = i - 1; 
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
}
let arr = ["AS", "KF", "ER", "DD", "JK"];
console.log(...insertionSort(arr));

