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

interface Collection<T> {
  add(t: T): void;
  remove(t: T): void;
  asArray(): T[];
}

class List<T> implements Collection<T> {
  private items: T[] = [];

  add(t: T): void {
    this.items.push(t);
  }

  remove(t: T): void {
    const index = this.items.indexOf(t);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  asArray(): T[] {
    return this.items;
  }
}

const list = new List<number>();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
console.log(list.asArray()); // [1, 3]
