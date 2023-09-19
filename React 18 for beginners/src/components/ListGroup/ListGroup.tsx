import { MouseEvent, useState } from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string)=> void
}

export default function ListGroup({items, heading, onSelectItem}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading} List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index);
            onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
