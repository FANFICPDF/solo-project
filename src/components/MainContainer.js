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
          // boxShadow: '2px 2px 6px lightgrey',
          // maxWidth: '80vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>The MET Image Notes APP</h2>
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
