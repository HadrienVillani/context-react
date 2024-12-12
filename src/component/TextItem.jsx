import React from "react";
import { useTextContext } from "../context/TextContext";

function TextItem({ text }) {
  const [state, dispatch] = useTextContext();
  const handleDelete = () => {
    dispatch({ type: "delete_text", payload: text.id });
  };
  return (
    <li
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <p style={{ color: `${text.color}`, fontSize: `${text.size}px` }}>
        {text.content}
      </p>
      <span
        onClick={handleDelete}
        style={{
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
          fontSize: "30px",
          padding: "10px",
          borderRadius: "3px",
        }}
      >
        X
      </span>
    </li>
  );
}

export default TextItem;
