import React, { useState } from 'react';

export default function MainImage() {
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    //  write to database
    //  send a new query to API
  };
  // TODO show random image and discription text from MET API passed from parent
  // TODO render text field for notes and buttons to save or next image
  // TODO add dropdown to choose a collection to query
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        boxShadow: '8px 8px 3px lightgrey',
      }}
    >
      <h3>Main Image</h3>
      <img src={image}></img>
      <form onSubmit={handleSubmit}>
        <label>
          Notes:
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
