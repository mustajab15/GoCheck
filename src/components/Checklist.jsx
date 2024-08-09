import { useState } from "react";
import Item from "./Item";

function Checklist({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    if (sortBy === "title") {
      return items.slice().sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "status") {
      return items.slice().sort((a, b) => Number(a.done) - Number(b.done));
    }
    if (sortBy === "input") {
      return items;
    }
  }

  const sortedItems = sortItems();

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">masukkan berdasarkan inputan</option>
            <option value="title">masukkan berdasarkan judul</option>
            <option value="status">masukkan berdasarkan title</option>
          </select>
          <button onClick={onClearItems}>hapus</button>
        </div>
      </div>
    </>
  );
}

export default Checklist;
