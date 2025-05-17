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
// multiple type variable
function getInfo(id, name) {
    console.log("ID: ".concat(id, ", Name: ").concat(name));
}
var user1 = getInfo(1, "Alice");
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
function getCustomerInfo(customer) {
    console.log("Customer: ".concat(customer.firstName, " ").concat(customer.lastName));
}
var customer1 = new Customer("John", "Doe");
getCustomerInfo(customer1);
