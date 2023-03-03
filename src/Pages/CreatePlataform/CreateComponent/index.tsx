import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Accordion from "../../../Components/ArticlePlataform/Accordions/Accordion";
import Modal from "../../../Components/Modal";
import {
  PlataformButton,
  PlataformNav,
  PlataformTitle,
} from "../../Plataform/style";
import {
  ButtonOption,
  CreatePlataformPage,
  FormContainer,
  FormOptionsBar,
  Input,
  TextArea,
} from "./styles";

export interface IOption {
  title: string;
  text: string;
  id: number;
}
interface ICreatePlataform{
  setDatas: ()=>void;
  datas: any[]
}
function CreateComponentPlataform({setDatas, datas}:any): JSX.Element {
  const [options, setOptions] = useState<IOption[]>([]);
  const [create, setCreate] = useState<boolean>(false);
  const checkbox = useRef<HTMLInputElement>(null);

  function checagem() {
    console.log("running");
    if (checkbox.current?.checked === true) {
      setCreate(true);
      return;
    }
    setCreate(false);
    return;
  }

  const submiter = (event: FormEvent) => {
    event.preventDefault();

    const values = event.target as typeof event.target & {
      title: { value: string };
      image: { value: string };
      about: { value: string };
    };

    const title = values.title.value;
    const image = values.image.value;
    const about = values.about.value;
    if(!title || !image || !about){
      toast.error("Todos os campos precisam ser preenchidos!")
      return
    }
    setDatas([...datas, { title, image, about, options }]);
    toast.success("Componente criado com sucesso!");
  };

  return (
    <CreatePlataformPage>
      <Modal options={options} setOptions={setOptions} />
      <FormContainer onSubmit={submiter}>
        <div className="form-check form-switch mb-4 mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            ref={checkbox}
            onClick={checagem}
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label text-light"
            htmlFor="flexSwitchCheckDefault"
          >
            Criar regras para esse componente
          </label>
        </div>
        <Input name="title" type="text" placeholder="Titulo do componente" />
        <Input name="image" type="text" placeholder="url da imagem" />
        <TextArea
          name="about"
          cols={30}
          rows={10}
          placeholder="Descreva o componente"/>

        <FormOptionsBar>
          {create && (
            <>
              <ButtonOption
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                  <i className="bi bi-file-earmark-plus" />
              </ButtonOption>
            </>
          )}
          <ButtonOption type="submit">
            <i className="bi bi-check2" />
          </ButtonOption>
        </FormOptionsBar>
      </FormContainer>

      <div className="accordion min-400" id="accordionExample">
        {options.map((option) => {
          return (
            <Accordion
              title={option.title}
              attId={1}
              id={option.id}
              text={option.text}
              key={option.id}
            />
          );
        })}
      </div>
    </CreatePlataformPage>
  );
}

export default CreateComponentPlataform;
