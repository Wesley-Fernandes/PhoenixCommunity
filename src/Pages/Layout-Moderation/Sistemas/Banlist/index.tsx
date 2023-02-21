import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../../../Components/Button";
import supabase from "../../../../Supabase/supabase";
import "./Banlist.scss";
export const MOD_Banlist = () => {
  const [powers, setPowers] = useState<any[]>();

  const FormSubmiter = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title:  { value: string };
      image:  { value: string };
      status: { value: string };
      about:  { value: string };
    };
    const title   = target.title.value;
    const image   = target.image.value;
    const about   = target.about.value;
    const status  = target.status.value;

    const { data, error } = await supabase
      .from("Banlist")
      .insert([{ title: title.toUpperCase(), image, about, status }]);

    if (error) {
      alert(error.message);
    }


    toast.success(`${title} adicionado com sucesso!`);

  };

  return (
    <>
      <form className="Formulary-Banlist" onSubmit={FormSubmiter}>
        <div className="mb-3">
          <h3 className="text-light ps-2">Atualizando a banlist</h3>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="name@example.com"
          />
          <input
            type="text"
            className="form-control"
            placeholder="http://example.com/image.png"
            name="image"
          />


        <select className="form-select" aria-label="Default select example" name="status">
          <option value="Proibido">Proibido</option>
          <option value="Permitido">Permitido</option>
        </select>


        <textarea
            className="form-control"
            placeholder="Descrição do poder..."
            id="exampleFormControlTextarea1"
            cols={30}
            rows={10}
            name="about"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar poder
        </button>
      </form>
    </>
  );
};
