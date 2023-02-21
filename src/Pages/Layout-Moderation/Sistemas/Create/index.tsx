import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import supabase from "../../../../Supabase/supabase";
import "./CreateUser.scss"
export const CreateUser = () => {

    const FormSubmiter =  async (event:FormEvent) =>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: {value: string}
            password: {value: string}
            moderation: {value: string}
        };
        const email = target.email.value;
        const password = target.password.value;
        const moderation = target.moderation.value;

        let { data:signedUser, error:ErrorSigned } = await supabase.auth.signUp({email,password})


        if(ErrorSigned){
            toast.error(`Erro ${ErrorSigned.status}: ${ErrorSigned.message}`);
            return;
        }

        toast.success(`Usuario criado com sucesso!`);


        const { data:UpdatedUser, error:UpdateUserError } = await supabase.auth.updateUser({
          data: {moderation}
        })


        if(UpdateUserError){
          toast.error(`Erro ${UpdateUserError.status}: ${UpdateUserError.message}`);
          return;
        }


        toast.success(`Usuario atualizado para ${moderation} com sucesso!`);

        console.log(UpdatedUser)
    }
  return (
    <form className="container" onSubmit={FormSubmiter}>
    <div className="mb-3 d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-light">Criando novo usuario</h1>
          <input
            type="email"
            name="email"
            className="form-control mt-2 mb-2"
            placeholder="name@example.com"
            required
          />

          <input
            type="password"
            name="password"
            className="form-control mt-2 mb-2"
            placeholder="secret password"
            min={6}
            required
          />
          <select className="form-select mt-1 mb-2" aria-label="Default select example" name="moderation">
              <option value="omega">Curador Omega</option>
              <option value="zeta">Curador Zeta</option>
          </select>
        <button type="submit" className="btn btn-primary mt-1 mb-2">
          Criar novo usuario
        </button>
      </div>
    </form>
  );
};
