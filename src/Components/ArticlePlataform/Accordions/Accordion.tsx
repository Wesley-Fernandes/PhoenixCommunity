import React from 'react'



export interface IAccordions{
  id: number;
  title: string;
  text: string;
  attId: number;
}

function Accordion({id, attId, text, title}:IAccordions) {

  return (
    <div className="accordion-item border-dark">

    <h2 className="accordion-header" id={`heading${attId}-${id}`}>
      <button className="accordion-button bg-ligth" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${attId}-${id}`} aria-expanded="true" aria-controls={`collapse${attId}-${id}`}>
        {title}
      </button>
    </h2>

    <div id={`collapse${attId}-${id}`} className="accordion-collapse collapse " aria-labelledby={`heading${attId}-${id}`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
          {text}
      </div>


    </div>


  </div>
  )
}

export default Accordion
