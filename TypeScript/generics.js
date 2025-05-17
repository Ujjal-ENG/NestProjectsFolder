function LoggerAndReturn(thing) {
    return thing;
}
var message = LoggerAndReturn("Hello, world!");
var number = LoggerAndReturn(42);
console.log(message);
console.log(number);
