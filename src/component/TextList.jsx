import React from "react";
import { useTextContext } from "../context/TextContext";
import TextItem from "./TextItem";
function TextList() {
  const [state, dispatch] = useTextContext();

  const { texts } = state;
  const handleDelete = () => {
    dispatch({ type: "delete_text", payload: text.id });
  };
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
