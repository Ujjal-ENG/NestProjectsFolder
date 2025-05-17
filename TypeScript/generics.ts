function logAndReturn<T>(thing: T): T {
  return thing;
}

const message: string = logAndReturn("Hello, world!");
const number: number = logAndReturn(42);
console.log(message);
console.log(number);

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numberArray: number[] = getArray([1, 2, 3]);
const stringArray: string[] = getArray(["Hello", "world"]);
const booleanArray: boolean[] = getArray([true, false, true]);
const mixedArray: (number | string)[] = getArray([1, "Hello", 2, "world"]);

const objectArray: { name: string; age: number }[] = getArray([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
]);
console.log(numberArray, stringArray, booleanArray, mixedArray, objectArray);

// multiple type variable
function getInfo<T, U>(id: T, name: U): void {
  console.log(`ID: ${id}, Name: ${name}`);
}

const user1 = getInfo<number, string>(1, "Alice");
