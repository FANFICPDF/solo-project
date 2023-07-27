import React, { useEffect, useState } from 'react';

export default function MainImage() {
  const [note, setNote] = useState('');
  const [completeNote, setCompleteNote] = useState('');
  const [image, setImage] = useState('');
  const [idArray, setIdArray] = useState([]);
  const [currObj, setCurrObj] = useState({});
  const [randomId, setRandomId] = useState(0);
  const [dataToWrite, setDataToWrite] = useState({});

  // generates random index based on idArray length
  function newRandom() {
    setRandomId(Math.floor(Math.random() * idArray.length));
  }
  useEffect(() => {
    // fetches list of ObjectIDs from MET API
    fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir'
    )
      .then((res) => res.json())
      .then((arr) => setIdArray(arr.objectIDs));
  }, []);

  useEffect(() => {
    // sets a random number after array populates
    newRandom();
  }, [idArray]);

  useEffect(() => {
    // fetches an item's object by random ObjectID
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idArray[randomId]}`
    )
      .then((res) => res.json())
      .then((obj) => setCurrObj(obj));
  }, [randomId]);

  useEffect(() => {
    // checking if image property is an empty string
    if (currObj.primaryImageSmall !== '') {
      setImage(currObj.primaryImageSmall);
      setDataToWrite({
        title: currObj.title,
        note: '',
        objectID: currObj.objectID,
        primaryImage: currObj.primaryImage,
        primaryImageSmall: currObj.primaryImageSmall,
        department: currObj.department,
        objectDate: currObj.objectDate,
        dimensions: currObj.dimensions,
        medium: currObj.medium,
        artistDisplayName: currObj.artistDisplayName,
      });
    } else {
      // pulls another random ID if there is no image
      newRandom();
    }
  }, [currObj]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // adds current note input
    setCompleteNote(note);
    // setDataToWrite({ ...dataToWrite, note: completeNote });
    //  write to database
  };
  useEffect(() => {
    fetch('/api/notes', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...dataToWrite, note: completeNote }),
    }).catch((err) => console.log(err));
  }, [completeNote]);
  // TODO add dropdown to choose a collection to query
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        boxShadow: '2px 2px 6px lightgrey',
      }}
    >
      <h3>{currObj.title}</h3>
      <img
        style={{ margin: '4px 10px' }}
        src={image}
        aria-hidden
        alt="the current image title"
      />
      <div>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <b>{currObj.artistDisplayName}</b>
          </li>
          <li>{currObj.objectDate}</li>
          <li>{currObj.medium}</li>
          <li>{currObj.dimensions}</li>
          <li>{currObj.department}</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Note:{' '}
          <textarea
            style={{ width: '250px' }}
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <input style={{ margin: '5px' }} type="submit" />
      </form>
      <button
        style={{ margin: '5px' }}
        onClick={() => {
          newRandom();
        }}
      >
        Get New Random Image
      </button>
    </div>
  );
}
