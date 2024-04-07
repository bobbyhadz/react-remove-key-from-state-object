import './App.css';

import {useState} from 'react';

export default function App() {
  const initialState = {
    id: 1,
    name: 'Bobby Hadz',
    salary: 100,
    department: 'development',
  };
  const [employee, setEmployee] = useState(initialState);

  const removeKey = () => {
    setEmployee(current => {
      // 👇️ Remove the salary key from an object
      const {salary, ...rest} = current;

      return rest;
    });
  };

  return (
    <div>
      <button onClick={removeKey}>Click</button>

      <h4>{JSON.stringify(employee, null, 4)}</h4>

      <hr />

      <h2>name: {employee.name}</h2>
      <h2>department: {employee.department}</h2>
      <h2>salary: {employee.salary}</h2>
    </div>
  );
}
