"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const list_1 = require("./list");
const basti = new module_1.User('basti', 'springer');
console.log(basti.getFullName());
let value = 'foo';
// value = 4;
console.log(value);
function greet(user) {
    console.log('Hello ' + user.getFullName());
}
greet(basti);
greet({
    getFullName() {
        return 'Hans-Peter';
    },
});
var foo;
(function (foo) {
    foo["schnitzel"] = "Kalbsschnitzel mit Pommes";
    foo["kn\u00F6del"] = "Semmelkn\u00F6del mit etwas Petersilie";
})(foo || (foo = {}));
const a = foo.schnitzel;
const b = foo.knödel;
if (a === foo.schnitzel) {
    console.log('yummy');
}
const khaled = new module_1.User('Khaled', 'Labidi');
const userList = new list_1.List();
userList.add(basti);
userList.add(khaled);
// userList.add(4);
console.log(userList.get());
