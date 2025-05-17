function logAndReturn<T>(thing: T): T {
  return thing;
}

const message: string = logAndReturn("Hello, world!");
const number: number = logAndReturn(42);
console.log(message);
console.log(number);
