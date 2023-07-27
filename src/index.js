import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from './components/MainContainer';
const App = () => {
  return (
    <>
      <MainContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));
