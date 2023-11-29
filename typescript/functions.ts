// Input Parameters
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet(42);

// Output Types
function getFavoriteNumber() : number {
    return 26;
}

type Point = {
    x: number;
    y: number;
  };

// More complicated inputs
function printCoord1(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 3, y: 7 });
printCoord2({ x: 3, y: 7 });


function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId("Hello")
printId(123)