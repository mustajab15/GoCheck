import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);

  function handelAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handelDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setListItems((listItems) => {
      return listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
    });
  }

  function handelOnclearItems() {
    const confirm = window.confirm("apakah anda ingin menhapus");
    if (confirm) {
      setListItems([]);
    }
  }

  return (
    <>
      <Logo />
      <Form onAddItem={handelAddItem} />
      <Checklist items={listItems} onDeleteItem={handelDeleteItem} onToggleItem={handelToggleItem} onClearItems={handelOnclearItems} />
      <Stats items={listItems} />
    </>
  );
}

export default App;
