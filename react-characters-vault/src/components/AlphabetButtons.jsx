


const AlphabetButtons = ({ onLetterClick }) => {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      {alphabet.map(letter => (
        <button key={letter} onClick={() => onLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetButtons;
