import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import supabase from '../../Supabase/supabase';
import { Input } from '../CreatePlataform/styles';
import { PlataformButton, PlataformNav, PlataformTitle } from '../Plataform/style'

import "./recruitment.scss"
export default function Recrutamento() {
    const navigate = useNavigate()
    const active = true;


    async function submitter(e:FormEvent){
        e.preventDefault();

        const target = e.target as typeof e.target &{
            user:               {value: string},
            job:                {value: string},
            roleplayExperience: {value: string},
            staffExperience:    {value: string},
            directrizes:        {value: string},
            description:        {value: string},


            lutador:    {checked: boolean},
            editor:     {checked: boolean},
            blogueiro:  {checked: boolean},
            atencioso:  {checked: boolean},
            eventista:  {checked: boolean},
            divulgador: {checked: boolean},
            aprendiz:   {checked: boolean},
            dedicado:   {checked: boolean},
        };

        const username =            (target.user.value).trim();
        const job =                 target.job.value;
        const roleplayExperience =  target.roleplayExperience.value;
        const staffExperience =     target.staffExperience.value;
        const directrizes =         target.directrizes.value;
        const description =         target.description.value;


        const lutador =     target.lutador.checked;
        const eventista =   target.eventista.checked;
        const atencioso =   target.atencioso.checked;
        const editor =      target.editor.checked;
        const divulgador =  target.divulgador.checked;
        const aprendiz =    target.aprendiz.checked;
        const blogueiro =   target.blogueiro.checked;
        const dedicado =    target.dedicado.checked;

        const newRegistration = {
            username, job, roleplayExperience, directrizes, staffExperience, habilities: [
                {"lutador":     lutador},
                {"eventista":   eventista},
                {"atencioso":   atencioso},
                {"editor":      editor},
                {"divulgador":  divulgador},
                {"aprendiz":    aprendiz},
                {"blogueiro":   blogueiro},
                {"dedicado":    dedicado},
            ],
            description
        };

        if(!username||!job||!roleplayExperience||!staffExperience||!directrizes){
            toast.error("Preencha todos os campos!");
            console.log(newRegistration)
            return;
        }


        const { data, error } = await supabase
            .from("Recruitment")
            .insert(newRegistration);

        if (error) {
            toast.error(error.message);
            return;
        }


        toast.success("Formulario enviando com sucesso!");


    }
  return (
    <main className='recruitment-page'>
        <PlataformNav>
            <PlataformButton onClick={()=>{navigate("/")}}>
                <i className="bi bi-arrow-left-square-fill"/>
            </PlataformButton>
            <PlataformTitle>Fazendo o recrutamento</PlataformTitle>
        </PlataformNav>
        {active?(
           <form className='main-content' onSubmit={submitter}>
           <p>
               Bem vindo ao recrutamento da comunidade, tudo será feito a partir desse site porque estamos modernizando a comunidade. Não coletaremos nenhum dado pessoa de sua pessoa. Desejamos toda sorte possivel.
           </p>
           <div>
               <h2>Regras do questionario</h2>
               <ul>
                   <li>Uma tentativa por recrutamento.</li>
                   <li>Tentativas consecutivas seram desclassificadas.</li>
                   <li>Respostas aleatorias seram ignoradas.</li>
               </ul>
           </div>

           <div className="form-floating w-100">
               <input
                   name='user'
                   type="text"
                   className="form-control"
                   id="user"
                   placeholder="Password"/>
               <label htmlFor="user">
                   Seu apelido na comunidade
               </label>
           </div>

           <div className="form-floating w-100">
               <select
                   name='job'
                   className="form-select"
                   id="job"
                   aria-label="Floating label select example">
                   <option value="Zeta">Curador Zeta</option>
                   <option value="Omega">Curador Omêga</option>
               </select>
               <label htmlFor="job">
                   Selecione o seu cargo
               </label>
           </div>

           <div className="form-floating w-100">
               <select
                   name='roleplayExperience'
                   className="form-select"
                   id="roleplayExperience"
                   aria-label="Floating label select example">
                   <option value="Bastante">Sim, eu tenho.</option>
                   <option value="Pouca">Sim, mas não muita.</option>
                   <option value="Nenhuma">Não, não tenho.</option>
               </select>
               <label htmlFor="roleplayExperience">
                   Têm experiencia em RPG?
               </label>
           </div>


           <div className="form-floating w-100">
               <select
                   name='staffExperience'
                   className="form-select"
                   id="staffExperience"
                   aria-label="Floating label select example">
                   <option value="Sim">Sim, já fui curador.</option>
                   <option value="Não">Não, nunca fui curador.</option>
               </select>
               <label htmlFor="staffExperience">
                   Têm experiencia em RPG?
               </label>
           </div>


           <div className="form-floating w-100">
               <select
                   name='directrizes'
                   className="form-select"
                   id="directrizes"
                   aria-label="Floating label select example">
                   <option value="Todas">Sim, conheço.</option>
                   <option value="Pouco">Pouco, mas posso aprender.</option>
                   <option value="Nada">Não, eu não conheço.</option>
               </select>
               <label htmlFor="directrizes">
                   Conhece ás diretrizes do amino e comunidade?
               </label>
           </div>


           <h2>Selecione suas habilidades</h2>

           <div className="form-check w-100">
               <input
                   name='lutador'
                   className="form-check-input"
                   type="checkbox"
                   id="lutador"/>
               <label
                   className="form-check-label"
                   htmlFor="lutador">
                   Sou um bom lutador.
               </label>
           </div>

           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="editor"
                   id="editor"/>
               <label
                   className="form-check-label"
                   htmlFor="editor">
                   Sou um bom editor.
               </label>
           </div>

           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="blogueiro"
                   id="blogueiro"/>
               <label
                   className="form-check-label"
                   htmlFor="blogueiro">
                   Sou bom com blogs.
               </label>
           </div>

           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="atencioso"
                   id="flexCheckDefault"/>
               <label
                   className="form-check-label"
                   htmlFor="flexCheckDefault">
                   Sou bom com pessoas.
               </label>
           </div>

           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="eventista"
                   id="eventista"/>
               <label
                   className="form-check-label"
                   htmlFor="eventista">
                   Sou bom com eventos.
               </label>
           </div>


           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="divulgador"
                   id="divulgador"/>
               <label
                   className="form-check-label"
                   htmlFor="divulgador">
                   Sou bom com divulgação.
               </label>
           </div>

           <div className="form-check w-100">
               <input
                   className="form-check-input"
                   type="checkbox"
                   name="aprendiz"
                   id="aprendiz"/>
               <label
                   className="form-check-label"
                   htmlFor="aprendiz">
                   Sou bom em aprender.
               </label>
           </div>

           <div className="form-check w-100">
               <input className="form-check-input"
               type="checkbox"
               name="dedicado"
               id="dedicado"/>
               <label
                   className="form-check-label"
                   htmlFor="dedicado">
                   Sou bastante dedicado.
               </label>
           </div>

           <div className="form-floating mt-2 mb-2 w-100">
               <textarea
                   name='description'
                   style={{minHeight:'100px'}}
                   className="form-control"
                   placeholder="Sobre mim"
                   id='description'/>
               <label htmlFor="description">
                   Quer falar mais de você?
               </label>
           </div>


           <button
               style={{width: '50%'}}
               type="submit"
               className="btn btn-primary mt-4 mb-4 pt-3 pb-3">
                   Enviar formulario
           </button>

       </form>
            ):(
                <main className='main-content'>
                    <h2>Algo não parece certo...</h2>
                    <p>
                        Ficamos felizes que você está querendo participar do recrutamento, porém...ele não está aberto atualmente. Volte mais tarde ou comunique a staff.
                    </p>
                </main>
            )}

    </main>
  )
}
