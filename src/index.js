import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from './components/MainContainer';
const App = () => {
  return (
    <>
      <h1>Image Notes</h1>
      <MainContainer />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
