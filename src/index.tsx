import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);

/* Tasks */

/* Mapped types */

/* Make a new Generic 'BetterUser' type, which would change all fields type to number except field 'name'*/

type User = {
  name: string
  age: string
  experience: string
}

type BetterUser<T> = {
  [K in keyof T]: K extends 'name' ? T[K] : number;
}

let obj: BetterUser<User> = {
  name: 'adasd',
  age: 4,
  experience: 4
}

/* Overloads */

/* Make a function createLabel which depends on argument type, return value certain type
if arguments type is number - return IdLabel, string - return NameLabel*/

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel 
// function createLabel(value: number | string): IdLabel | NameLabel {
//   let result 
//   if (typeof value === 'number') {
//     result = {id: value}
//   } else {
//     result = {name: value}
//   }
//   return result
// }

// console.log(createLabel(4));
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(value: T): NameOrId<T> {
  throw 'unimplemented'
}