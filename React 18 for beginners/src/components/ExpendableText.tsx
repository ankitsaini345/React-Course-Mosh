import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpendableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>{" "}
    </p>
  );
};

export default ExpendableText;
