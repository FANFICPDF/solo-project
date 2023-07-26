import React, { useEffect, useState } from 'react';

export default function MainImage() {
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const [idArray, setIdArray] = useState([]);
  const [currObj, setCurrObj] = useState({});
  const [randomId, setRandomId] = useState(0);
  const [dataToWrite, setDataToWrite] = useState({});

  function newRandom() {
    setRandomId(Math.floor(Math.random() * idArray.length));
  }
  useEffect(() => {
    // const fetchData =  () => {
    fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting'
    )
      .then((res) => res.json())
      .then((arr) => setIdArray(arr.objectIDs));
  }, []);

  useEffect(() => {
    newRandom();
  }, [idArray]);

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idArray[randomId]}`
    )
      .then((res) => res.json())
      .then((obj) => setCurrObj(obj));

    setImage(currObj.primaryImageSmall);
  }, [randomId]);

  useEffect(() => {
    if (currObj.primaryImageSmall !== '') {
      setImage(currObj.primaryImageSmall);
      setDataToWrite({
        title: currObj.title,
        note: note,
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
      newRandom();
    }
  }, [currObj]);

  // console.log('idArray', idArray);
  // console.log('currObj', currObj);
  // console.log('image', image);
  console.log('data to write: ', JSON.stringify(dataToWrite));
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
        boxShadow: '2px 2px 6px lightgrey',
      }}
    >
      <h3>{currObj.title}</h3>
      <img src={image} aria-hidden alt="the current image title" />
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
          Note:
          <textarea
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          newRandom();
        }}
      >
        Get New Random Image
      </button>
    </div>
  );
}
