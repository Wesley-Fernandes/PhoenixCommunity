import React, { ButtonHTMLAttributes, FormEvent, useRef } from "react";
import { toast } from "react-toastify";
import { IOption } from "../../Pages/CreatePlataform/CreateComponent";
import { TextArea, Input } from "../../Pages/CreatePlataform/CreateComponent/styles";




interface IModal{
    setOptions: any;
    options: IOption[];
}
function Modal({setOptions, options}: IModal) {
  const cancelButton = useRef<HTMLButtonElement>(null)

  const submiterModal = (event:FormEvent) => {
    event.preventDefault();

    const values = event.target as typeof event.target & {
      title:  { value: string };
      text:   { value: string };
    };

    const title = values.title.value;
    const text  = values.text.value;

    if(!title || !text) {
      toast.error("Você deve preeencher todos os campos!");
      return
    };

    const identification = options.length + 1;
    setOptions([...options, {id: identification, title, text}]);
    toast.success("Regra adicionada com sucesso!");


    cancelButton.current?.click()

  };
  return (
    <form
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onSubmit={submiterModal}
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Adicionar regra
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              color="#4BB4CC"/>
          </div>



          <div className="modal-body d-flex flex-column align-items-center">
            <Input
              name="title"
              type="text"
              placeholder="Titulo"/>
            <TextArea
              name="text"
              cols={30}
              rows={10}
              placeholder="Descreva o componente" />
          </div>




          <div className="modal-footer">
            <button
              type="button"
              ref={cancelButton}
              className="btn btn-danger"
              data-bs-dismiss="modal">
                <i className="bi bi-x-lg fs-5" />
            </button>
            <button
              type="submit"
              className="btn btn-success">
                <i className="bi bi-check2 fs-5" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Modal;
