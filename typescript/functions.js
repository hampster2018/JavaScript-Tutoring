// Input Parameters
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}


greet(42);
// Output Types
function getFavoriteNumber() {
    return 26;
}
// More complicated inputs
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 3, y: 7 });
printCoord2({ x: 3, y: 7 });
function printId(id) {
    console.log("Your ID is: " + id);
}
