import { useState } from 'react';
import Phrase from '../Phrase/Phrase';

const phrasesWithAuthor = [
  {
    id: 0,
    phrase: 'El que no arriesga no gana',
    author: 'Anónimo',
    show: false,
  },
  {
    id: 1,
    phrase: 'La vida es un viaje, no un destino',
    author: 'Ralph Waldo Emerson',
    show: true,
  },
  { id: 2, phrase: 'El que no llora, no mama', author: 'Anónimo', show: true },
  {
    id: 3,
    phrase: 'El que mucho abarca, poco aprieta',
    author: 'Benjamin Franklin',
    show: false,
  },
  {
    id: 4,
    phrase: 'A caballo regalado no se le mira el diente',
    author: 'Anónimo',
    show: true,
  },
];

const Proverbs = () => {
  const [statePhrasesWithAuthor, setStatePhrasesWithAuthor] =
    useState(phrasesWithAuthor);

  const sorted = (phrases) => {
    const sortedPhrasesWithAuthor = phrases.toSorted((a, b) => {
      return a.author.localeCompare(b.author);
    });
    setStatePhrasesWithAuthor(sortedPhrasesWithAuthor);
  };

  const reset = () => {
    setStatePhrasesWithAuthor(phrasesWithAuthor);
  };

  const filterByAuthor = () => {
    const filtered = statePhrasesWithAuthor.filter(({ author }) => {
      return author !== 'Anónimo';
    });
    setStatePhrasesWithAuthor(filtered);
  };

  const deleteElement = (index) => {
    const deletedStatePhrasesWithAuthor = statePhrasesWithAuthor.toSpliced(
      index,
      1
    );
    setStatePhrasesWithAuthor(deletedStatePhrasesWithAuthor);
  };


  const changeInput = (event) => {
    const search = phrasesWithAuthor.filter(({ phrase }) => {
      return phrase.includes(event.target.value);
    });
    setStatePhrasesWithAuthor(search);
  };

  

  return (
    <div>
      <button onClick={() => sorted(statePhrasesWithAuthor)}>Order</button>
      <button onClick={reset}>Reset</button>
      <button onClick={filterByAuthor}>Filter</button>
      <input type='text' onChange={(event) => changeInput(event)} />
      <h1>Proverbios</h1>
      {statePhrasesWithAuthor.map((phrasesWithAuthor, index) => {
        return (
          <Phrase
            key={phrasesWithAuthor.id}
            phrasesWithAuthor={phrasesWithAuthor}
            deleteElement={() => deleteElement(index)}
          />
        );
      })}
    </div>
  );
};

export default Proverbs;
