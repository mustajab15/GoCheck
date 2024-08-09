import { useState } from "react";

function Form({ onAddItem }) {
  const [title, settitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = { id: Date.now(), title, done: false };
    onAddItem(newItem);
    settitle("");
    console.log(e);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>ada yang mau di catat yaa guys</h3>
        <input type="text" name="title" value={title} onChange={(e) => settitle(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
