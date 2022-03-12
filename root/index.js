// Basic Types
var id = 5;
var company = 'Stuff Co.';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// union
var pid = 22;
// Enum = sets of named contants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
