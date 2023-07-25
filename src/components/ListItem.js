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
            boxShadow: '8px 8px 3px lightgrey',
          }}
        >
          THUMBNAIL …Title... ....Notes...
          <span onClick={() => setExpanded(!expanded)}>
            <b>Read More</b>
          </span>
          {expanded ? (
            <div className="expandable">
              …contents of the expanded div Xdelete
            </div>
          ) : null}
        </div>
      </li>
    </>
  );
}
