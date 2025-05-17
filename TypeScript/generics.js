function logAndReturn(thing) {
    return thing;
}
var message = logAndReturn("Hello, world!");
var number = logAndReturn(42);
console.log(message);
console.log(number);
function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([1, 2, 3]);
var stringArray = getArray(["Hello", "world"]);
var booleanArray = getArray([true, false, true]);
var mixedArray = getArray([1, "Hello", 2, "world"]);
var objectArray = getArray([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
]);
console.log(numberArray, stringArray, booleanArray, mixedArray, objectArray);
