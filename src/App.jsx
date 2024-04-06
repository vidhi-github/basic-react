
import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox";

function App() {

  return (
    <>
    <MsgBox userName="vidhi" textColor="yellow"/>
    <MsgBox userName="delta" textColor="red"/>
    <MsgBox userName="holi" textColor="green"/>
    <ProductTab/>
    </>
  );
}

export default App;
