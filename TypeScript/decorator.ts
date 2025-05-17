function log(target, key, descriptor) {
  console.log(`Logging: ${key}`);
}

class Calaculator {
  // using the decorator on a method @log
  @log
  square(num: number) {
    return num * num;
  }
}
