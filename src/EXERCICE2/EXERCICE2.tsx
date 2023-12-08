import React, { useState, useEffect } from 'react';



const EXERCICE2 = () => {
  const [clickCount, setClickCount] = useState(0);

  

  const handleClick = () =>
  {  
    setClickCount(clickCount + 1);
    console.log(clickCount);

    
  };

  useEffect(() => {
    if(clickCount > 10 ){
      alert(`Vous avez cliqué : ${clickCount} fois`);
    }
  })

  return (
    <div className='center2'>
      <div className='container mt'>
        <h1>Compteur de Clics</h1>
        <p>Nombre de clics : {clickCount}</p>
        <button onClick={handleClick}>Cliquez ici</button>
      </div>
    </div>
  );
};

export default EXERCICE2;