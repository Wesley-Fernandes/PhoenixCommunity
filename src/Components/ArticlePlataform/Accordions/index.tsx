import React from "react";
import Accordion from "./Accordion";


function Accordions(props:any) {

  return (
    <div className="accordion" id="accordionExample">
      {props.datas.map((data:any, index:number) => {
        return (
        <Accordion
          key={index}
          id={data.id}
          attId={props.attId}
          text={data.text}
          title={data.title}/>);
      })}
    </div>
  );
}

export default Accordions;
