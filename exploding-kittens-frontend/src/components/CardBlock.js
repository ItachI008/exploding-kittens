
import React, { useState, useEffect } from 'react';
import cat from '../assets/cat.png';
import diffuse from '../assets/diffuse.png';
import shuffle from '../assets/shuffle.png';
import explode from '../assets/explode.png';

function CardBlock({ cardType, index, onCardFlip, flippedArray }) {
  const [flipped, setFlipped] = useState(flippedArray[index]);

  useEffect(() => {
    setFlipped(flippedArray[index]);
  }, [flippedArray, index]);

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
      onCardFlip(index, cardType);
    }
  };

  const getBackImage = () => {
    switch (cardType) {
      case 'cat':
        return cat; 
      case 'defuse':
        return diffuse; 
      case 'shuffle':
        return shuffle; 
      case 'exploding':
        return explode; 
      default:
        return '';
    }
  };

  return (
    <div className={`card-block ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front"></div>
      <div className="card-back" style={{ backgroundImage: `url(${getBackImage()})`, backgroundSize: '80%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        {flipped} {}
      </div>
    </div>
  );
}

export default CardBlock;
