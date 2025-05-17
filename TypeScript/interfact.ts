interface Pair<T, U> {
  first: T;
  second: U;
}

let p: Pair<string, string> = {
  first: "hello",
  second: "world",
};

console.log(p);

interface Command<T, R> {
  id: T;
  run(): R;
}

let c: Command<number, string> = {
  id: 1,
  run: () => "hello",
};
console.log(c);
console.log(c.run());
