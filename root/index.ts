// Basic Types
let id: number = 5;
let company:string = 'Stuff Co.';
let isPublished: boolean = true;
let x: any = 'Hello';
let ids:number[] = [1,2,3,4]
let arr:any[] = [1,true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// union
let pid: string | number = 22;

// Enum = sets of named contants
enum Direction1{
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
console.log(Direction1.Left)
enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Left)
