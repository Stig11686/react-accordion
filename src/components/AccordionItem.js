function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
