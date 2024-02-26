import { useState } from 'react';

const Phrase = ({ phrasesWithAuthor, deleteElement }) => {
  const [show, setShow] = useState(phrasesWithAuthor.show);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <>
          <h4>{phrasesWithAuthor.phrase}</h4>
          <p>{phrasesWithAuthor.author}</p>
        </>
      ) : null}
      <button onClick={deleteElement}>Delete</button>
      <button onClick={toggleShow}>Show</button>
    </div>
  );
};

export default Phrase;
