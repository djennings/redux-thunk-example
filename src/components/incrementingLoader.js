import React from 'react';

const IncrementingLoader = () => {
  return (
    <div className='loadingMask'>
      <div className='loader'>
        <span />
        <span />
        <span />
        <span />
      </div>
      <br />
      <div className='loadingText'>Delaying increment for 2 seconds...</div>
    </div>
  );
}

export default IncrementingLoader;
