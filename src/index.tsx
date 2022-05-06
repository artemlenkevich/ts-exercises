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

/* Overloads */

/* Make a function createLabel which depends on argument type, return value certain type
if arguments type is number - return IdLabel, string - return NameLabel*/

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

/* Make the same using conditional types */