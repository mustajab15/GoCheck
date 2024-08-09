function Stats({ items }) {
  if (items.length === 0) {
    return (
      <div className="stats">
        <span>yuk ayo bikin catatan</span>
      </div>
    );
  }

  const totalItems = items.length;
  const doneitems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneitems / totalItems) * 100);
  return (
    <>
      <footer className="stats">
        <span>{percentage === 100 ? "kamu sudah melakukan chaklist semua " : `kamu punya ${totalItems} catatan baru ${doneitems} yang di checklist ${percentage}`}</span>
      </footer>
    </>
  );
}

export default Stats;
