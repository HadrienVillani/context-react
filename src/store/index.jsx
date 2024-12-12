import { useReducer } from "react";
let id = 0;

const initialState = {
  text: {
    id: id++,
    content: "",
    color: "",
    size: "",
  },
  texts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        text: {
          ...state.text,
          [action.payload.name]: action.payload.value,
        },
      };

    case "add_text":
      return state.text.content !== "" &&
        state.text.color !== "" &&
        state.text.size !== ""
        ? {
            ...state,
            text: {
              id: id++,
              content: "",
              size: "",
              color: "",
            },
            texts: state.texts.concat([state.text]),
          }
        : state;

    case "delete_text":
      return {
        ...state,
        texts: state.texts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export const useTextsReducer = () => useReducer(reducer, initialState);
