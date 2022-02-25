//Basic Types

let id: number = 5
let food: string = 'Pizza'
let isCold: boolean = true
let i: any = 'some'
i = 5

let randomNumbers: number[] = [1,2,3,4,5,7,9]

//Tuple
let person: [number, boolean, string] = [1, true, 'abc']
let employee: [number, string][]

employee = [
    [2, 'svfsdf'],
    [5, 'acasd']
]

//Union
let id1: number|string = 'svsd'
id1 = 4

//enum
enum Direction {
    Up = 'akd',
    Down = 'ad',
    Left = 'as',
    Right = 'ag'
}

console.log(Direction.Down)

//Objects
type User = {
    id: number,
    name?: string
}

const user: User = {
    id: 3,
}

function addNum(x: number, y: number): number{
    return x+ y
}

//no return
function message(msg: string): void {
    console.log(msg)
}

//interfaces
interface UserInterface {
    id: number,
    name: string
}

const user1: UserInterface = {
    id: 2,
    name: 'Bob'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y