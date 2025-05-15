class Car {
  constructor(message) {
    console.log(message);
  }
}

const car = new Car("Hello, TypeScript!");
console.log(car);
// function sortedArray(numbers: Array<number>): Array<number> {
//   const sortedArr: number[] = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[i + 1]) {
//       sortedArr.push(numbers[i]);
//     }
//   }
//   return sortedArr;
// }

function sortedArrayUsingHashTable(numbers: Array<number>): Array<number> {
  const hashTable: { [key: number]: boolean } = {};
  const sortedArr: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!hashTable[numbers[i]]) {
      hashTable[numbers[i]] = true;
      sortedArr.push(numbers[i]);
    }
  }
  return sortedArr;
}
console.log(sortedArrayUsingHashTable([1, 2, 3, 3, 3, 4, 5, 6, 7, 5]));
