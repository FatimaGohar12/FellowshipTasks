import React, { useState } from 'react';

function Custom() {
  const [isTextShown, setIsTextShown] = useState(false);

  function toggleText() {
    setIsTextShown(!isTextShown);
  }

  return (
    <div className='container'>
      <button onClick={toggleText}>{isTextShown ? 'Hide Text' : 'Show Text'}</button>
      {!isTextShown && <p>The text is currently hidden.</p>}
      <p style={{ display: isTextShown ? 'block' : 'none' }}>Shown text</p>
    </div>
  );
}

export default Custom;
