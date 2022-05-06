export const Answer = () => {
    return <div>Answer</div>
}

/* Tasks */

/* Mapped types */

/* Make new Generic 'BetterUser' type, which would change all fields type to number except field 'name'*/

type User = {
    name: string
    age: string
    experience: string
  }
  
type BetterUser<T> = {
[K in keyof T]: K extends 'name' ? T[K] : number
}

let s: BetterUser<User> = {
name: 'asd',
age: 4,
experience: 5
}


/* Overloads */

/* Make a function createLabel which depending on argument type, return value certain type
if arguments type is number - return  IdLabel, string - return NameLabel*/

interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }
  
  function createLabel(id: number): IdLabel
  function createLabel(name: string): NameLabel
  function createLabel(value: number | string): IdLabel | NameLabel {
    return typeof value === 'string' ? {name: value} : {id: value}
  }
  
  /* Write the same using conditional types */

  type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel2<T extends number | string>(value: T): NameOrId<T> {
  throw 'unimplemented'
}