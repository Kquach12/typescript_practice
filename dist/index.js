//Basic Types
var id = 5;
var food = 'Pizza';
var isCold = true;
var i = 'some';
i = 5;
var randomNumbers = [1, 2, 3, 4, 5, 7, 9];
//Tuple
var person = [1, true, 'abc'];
var employee;
employee = [
    [2, 'svfsdf'],
    [5, 'acasd']
];
//Union
var id1 = 'svsd';
id1 = 4;
//enum
var Direction;
(function (Direction) {
    Direction["Up"] = "akd";
    Direction["Down"] = "ad";
    Direction["Left"] = "as";
    Direction["Right"] = "ag";
})(Direction || (Direction = {}));
console.log(Direction.Down);
