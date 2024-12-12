import React from "react";
import { useTextContext } from "../context/TextContext";
import TextItem from "./TextItem";
function TextList() {
  const [state] = useTextContext();

  const { texts } = state;
  return (
    <div>
      <h2>TextList</h2>
      <ul>
        {texts.map((text, index) => {
          return <TextItem text={text} />;
        })}
      </ul>
    </div>
  );
}

export default TextList;
