import React, { useState } from 'react';

export default function ListItem() {
  const [expanded, setExpanded] = useState(false);
  // TODO pull out props from parent and populate list item with details.
  // TODO make list items collapse or expand on click.
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
          THUMBNAIL …Title... ....Notes...
          <span onClick={() => setExpanded(!expanded)}>
            <b>Read More</b>
          </span>
          {expanded ? (
            <div className="expandable">
              <img src="/" />
              …contents of the expanded div
              <button>Delete</button>
            </div>
          ) : null}
        </div>
      </li>
    </>
  );
}
