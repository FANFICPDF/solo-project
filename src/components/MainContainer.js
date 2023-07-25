import React from 'react';
import MainImage from './MainImage';
import ListContainer from './ListContainer';

export default function MainContainer() {
  // TODO make API calls and store in props for MainImage
  // TODO
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          padding: '5px',
          margin: '5px',
          boxShadow: '8px 8px 3px lightgrey',
          maxWidth: '80vw',
        }}
      >
        <h2>The Main Container</h2>
        <MainImage />
        <ul
          style={{ listStyleType: 'none', textAlign: 'center', padding: '5px' }}
        >
          <ListContainer />
        </ul>
      </div>
    </>
  );
}
