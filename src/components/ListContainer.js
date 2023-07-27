import React, { useEffect } from 'react';
import ListItem from './ListItem';

export default function ListContainer(props) {
  // TODO pull documents from MongoDB server into an array and map list items.
  // useEffect(() => {
  //   const pingBackend = () => {
  //     fetch('/api/notes', {
  //       method: 'GET',
  //     })
  //       .then((response) =>
  //         response.text().then(function (text) {
  //           setPingResponse(text);
  //         })
  //       )
  //       .catch((err) => console.log(err));
  //   };
  // }, []);
  // console.log('props: ', props.props);
  const listArr = [];

  props.props.forEach((el, index) => {
    listArr.push(
      <ListItem
        props={el}
        currObj={props.currObj}
        setCurrObj={props.setCurrObj}
        key={el._id}
      />
    );
  });

  return <>{listArr}</>;
}
