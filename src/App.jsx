import "./App.css";
import TextList from "./component/TextList";
import { useTextContext } from "./context/TextContext";
function App() {
  const [state, dispatch] = useTextContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_text" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "set_value", payload: { name, value } });
  };
  console.log(state);

  return (
    <>
      <h2>Text form</h2>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="">Entre ton texte</label>
        <input type="text" name="content" onChange={handleChange} />
        <label htmlFor="">Size</label>
        <select name="size" id="" onChange={handleChange}>
          <option defaultValue={""}>----</option>
          <option value={"15"}>15px</option>
          <option value={"16"}>16px</option>
          <option value={"17"}>17px</option>
          <option value={"18"}>18px</option>
          <option value={"19"}>19px</option>
          <option value={"20"}>20px</option>
        </select>
        <label htmlFor="">Color</label>
        <select name="color" id="" onChange={handleChange}>
          <option defaultValue={""}>----</option>
          <option defaultValue={"palevioletred"} value={"palevioletred"}>
            palevioletred
          </option>
          <option value={"tomato"}>tomato</option>
        </select>
        <button onClick={handleSubmit}>Envoyer</button>
      </form>
      <TextList />
    </>
  );
}

export default App;
