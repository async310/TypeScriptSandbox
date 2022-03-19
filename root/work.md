## Step0
- [] install the the type script compiler
    sudo npm i -g typescript
- [] check what version is installed
    tsc -v

- [] Typsescript Compiler WatchMode
    tsc --watch <targetedFile>


-[] Create a TSC config file
    tsc --init


## Interface Declaration
 interface declaration with classes:

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

## interfaces to annotate parameters and return values to functions:

function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
Try


##  set of primitive types available in JavaScript:
- boolean,
- bigint,
- null,
- number,
- string,
- symbol, and
- undefined
## TypeScript extends this list
-  any (allow anything),
- unknown (ensure someone using this type declares what the type is),
- never (it’s not possible that this type could happen),
-  void (a function which returns undefined or has no return value).


## Unions
With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBool = true | false;


## Generics
Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

## declare your own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);





## References:
https://www.typescriptlang.org/cheatsheets
