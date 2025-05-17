var p = {
    first: "hello",
    second: "world",
};
console.log(p);
var c = {
    id: 1,
    run: function () { return "hello"; },
};
console.log(c);
console.log(c.run());
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (t) {
        this.items.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.items.indexOf(t);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.items;
    };
    return List;
}());
var list = new List();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
console.log(list.asArray()); // [1, 3]
