import React, { useState } from "react";
import produce from 'immer'

const MutateArray = () => {
  const [array1, setArray1] = useState(["first", "second", "third"]);
  const handleClick = () => {
    // setArray1([...array1, 'fourth']) //add new element
    // setArray1(array1.filter(item => item !== 'first')) // remove an element
    // setArray1(array1.map(item => item === 'first' ? 'New item': item))

    //using immer | treat draft as old array, change it and return the modified
    setArray1(produce(draft => {
        draft.push('new');
    }))
    console.log(array1);
  }
  return (
    <>
      {array1.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default MutateArray;
