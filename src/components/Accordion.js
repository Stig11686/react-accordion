import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          onOpen={setIsOpen}
          curOpen={curOpen}
          title={el.title}
          text={el.text}
          num={i}
        />
      ))}
    </div>
  );
}

export default Accordion;
