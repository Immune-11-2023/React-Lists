import { useState } from 'react';
import Task from '../Task/Task';

const ListTask = () => {
  const [texts, setTexts] = useState([
    'Leche',
    'Tomates',
    'La vida es un viaje, no un destino',
    'El que no llora, no mama',
  ]);
  const order = () => {
    setTexts(texts.toSorted());
  };
  return (
    <div>
      <h1>Textos</h1>
      <ul>
        {texts.map((text, index) => (
          <Task key={index} text={text} />
        ))}
        <p>------</p>
        {texts.map((text) => (
          <Task key={text} text={text} />
        ))}
      </ul>
      <button onClick={order} >Ordernar frase</button>
    </div>
  );
};

export default ListTask;
