import { useState } from 'react';

const Task = ({ text }) => {
  const [counter, setCounter] = useState(0);
  return (
    <li>
      {text} ha clicado {counter} veces
      <button onClick={() => {setCounter(counter + 1)}}>Click</button>
    </li>
  )
}

export default Task;