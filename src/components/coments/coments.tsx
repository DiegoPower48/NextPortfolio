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
  const { register, handleSubmit, reset } = useForm();

  // const informacionFormulario = watch();

  const Datos = () => {
    toast
      .promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/correo`), {
        loading: "⏳⏳  ENVIANDO COMENTARIO......",
        success: "GRACIAS POR EL COMENTARIO!!!!🚀",
        error: <b>NO SE PUDO GUARDAR</b>,
      })
      .then((response) => {
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="h-full w-full grid grid-cols-1 grid-rows-[auto,auto,auto,auto,auto] gap-y-10"
      onSubmit={handleSubmit(Datos)}
    >
      <div className="h-16 w-full flex items-center">
        <p className="font-bold text-textTheme text-4xl">{title}</p>
      </div>
      <div className="h-16 w-full flex items-center">
        <input
          id="nombre"
          type="text"
          className={`w-4/6 px-4 h-12 absolute bg-transparent rounded-xl outline-none z-50 formulario border-emerald-800 border-2`}
          {...register("nombre", { required: true })}
          required
        />
        <div className={` font-bold absolute commentsLabel`}>{name}</div>
      </div>

      <div className="h-16 w-full flex items-center">
        <input
          id="correo"
          type="text"
          className={`w-4/6 px-4 h-12 absolute bg-transparent rounded-xl outline-none z-50 formulario border-emerald-800 border-2`}
          {...register("correo", {
            required: { value: true, message: "ingresa correo" },
          })}
          required
        />
        <div className={` font-bold absolute commentsLabel`}>{email}</div>
      </div>

      <div className="h-48 w-full">
        <textarea
          autoCorrect="false"
          id="comentarios"
          className={`w-4/6 h-40 absolute  rounded-xl p-4 resize-none outline-none bg-transparent textarea focus:border-emerald-500 z-50  border-emerald-800 border-2`}
          required
          {...register("comentario", { required: true })}
        ></textarea>
        <div className={` font-bold absolute commentsLabel`}>{text}</div>
      </div>

      <button
        type="submit"
        className="h-12 grid items-center font-bold text-xl justify-center bg-emerald-500 hover:bg-emerald-700 rounded-xl"
      >
        Send
      </button>
      <div className="w-full overflow-hidden relative"></div>
      <Toaster />
    </form>
  );
}

export default Comentarios;
