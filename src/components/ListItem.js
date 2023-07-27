import React, { useEffect, useState } from 'react';

export default function ListItem(props) {
  const [expanded, setExpanded] = useState(false);
  const [trigger, setTrigger] = useState(false);
  // TODO pull out props from parent and populate list item with details.
  // TODO make list items collapse or expand on click.
  // {
  //   title,
  //   note,
  //   objectID,
  //   primaryImage,
  //   primaryImageSmall,
  //   department,
  //   objectDate,
  //   dimensions,
  //   medium,
  //   artistDisplayName,
  // }
  // console.log('title: ', props.props);

  function handleDelete(event) {
    event.preventDefault();
    fetch('/api/notes', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.props),
    }).catch((err) => console.log(err));
    props.setCurrObj({ ...props.currObj });
  }
  return (
    <>
      <li>
        <div
          style={{
            textAlign: 'center',
            padding: '5px',
            margin: '5px',
            boxShadow: '2px 2px 6px lightgrey',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              src={props.props.primaryImageSmall}
              style={{ maxWidth: '25px' }}
            />
            {props.props.title}
            <span onClick={() => setExpanded(!expanded)}>
              <b>...</b>
            </span>
          </div>
          {expanded ? (
            <div className="expandable">
              <img src={props.props.primaryImageSmall} />
              <ul
                style={{
                  listStyleType: 'none',
                  textAlign: 'center',
                  padding: '5px',
                }}
              >
                <li>Note: {props.props.note}</li>
                <li>Artist: {props.props.artistDisplayName}</li>
                <li>Date: {props.props.objectDate}</li>
                <li>Medium: {props.props.medium}</li>
                <li>Dimensions: {props.props.dimensions}</li>
                <li>Department: {props.props.department}</li>
              </ul>
              <button onClick={handleDelete}>Delete</button>
            </div>
          ) : null}
        </div>
      </li>
    </>
  );
}
