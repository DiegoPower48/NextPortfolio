"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
// import { motion } from "framer-motion";

interface Props {
  data: {
    title: string;
    name: string;
    email: string;
    text: string;
  };
}

function Comentarios(props: Props) {
  const { title, name, email, text } = props.data;
  const { register, handleSubmit, reset,watch } = useForm();

  const informacionFormulario = watch();

  const Datos = () => {
    toast
      .promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`,informacionFormulario), {
        loading: "⏳⏳  ENVIANDO COMENTARIO......",
        success: "GRACIAS POR EL COMENTARIO!!!!🚀",
        error: <b>NO SE PUDO GUARDAR</b>,
      })
      .then(() => {
        reset();
        console.log(informacionFormulario);  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="h-full w-full grid grid-cols-1 grid-rows-[auto,auto,auto,auto,auto] gap-y-10 justify-center"
      onSubmit={handleSubmit(Datos)}
    >
      <div className="h-16 w-full flex  ">
        <p className="font-bold text-Theme text-4xl">{title}:</p>
      </div>
      <div className="h-16 w-full flex   ">
        <input
          id="nombre"
          type="text"
          className="w-full px-4 h-12 bg-transparent rounded-xl outline-none z-50 formulario border-Hover border-2"
          {...register("nombre", { required: true })}
          required
        />
        <div className={` font-bold absolute pl-4 pt-3 commentsLabel`}>
          {name}
        </div>
      </div>

      <div className="h-16 w-full flex ">
        <input
          id="correo"
          type="text"
          className="w-full px-4 h-12 bg-transparent rounded-xl outline-none z-50 formulario border-Hover border-2"
          {...register("correo", {
            required: { value: true, message: "ingresa correo" },
          })}
          required
        />
        <div className={` font-bold absolute pl-4 pt-3 commentsLabel`}>
          {email}
        </div>
      </div>

      <div className="h-48 w-full flex ">
        <textarea
          autoCorrect="false"
          id="comentarios"
          className={`w-full h-40  rounded-xl p-4 resize-none outline-none bg-transparent textarea focus:border-Theme z-50  border-Hover border-2`}
          required
          {...register("comentario", { required: true })}
        ></textarea>
        <div className={` font-bold absolute pl-4 pt-3 commentsLabel`}>
          {text}
        </div>
      </div>

      <button
        type="submit"
        className="h-12 w-full grid items-center font-bold text-xl justify-center bg-Theme hover:bg-Hover rounded-xl"
      >
        Enviar
      </button>
      <div className="w-full overflow-hidden relative"></div>
      <Toaster />
    </form>
  );
}

export default Comentarios;
