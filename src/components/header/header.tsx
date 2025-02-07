"use client";

import { useState } from "react";
import {
  IconUser,
  IconAddressBook,
  IconCode,
  IconTools,
  IconMailFast,
} from "@tabler/icons-react";

interface Props {
  data: {
    me: string;
    about: string;
    proyects: string;
    technologies: string;
    contact: string;
  };
}

function Header(props: Props) {
  const { me, about, proyects, technologies, contact } = props.data;

  const [selected, setSelected] = useState("inicio");

  return (
    <div className="w-full  lg:w-auto border-textTheme border-b-2 lg:border-0 lg:bg-transparent lg:mb-0 grid lg:grid-cols-1 lg:grid-rows-auto grid-cols-5 grid-rows-1 lg:gap-4 items-center content-center">
      <div className="grid items-center justify-center ">
        <a
          className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_var(--theme)] hover:lg:border-Theme ${
            selected === "inicio" ? "text-Theme" : ""
          }`}
          href="#Home"
          onClick={() => {
            setSelected("inicio");
          }}
        >
          {" "}
          <div className="flex justify-center">
            <IconUser className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={`flex justify-center font-bold transition-all duration-300 ${
              selected === "inicio"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {me}
          </span>
        </a>
      </div>
      <div className="grid items-center justify-center">
        <a
          className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_var(--theme)] hover:lg:border-Theme ${
            selected === "About" ? "border-Theme text-Theme" : ""
          }`}
          href="#Detail"
          onClick={() => setSelected("About")}
        >
          <div className="flex justify-center">
            <IconAddressBook className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={`flex justify-center font-bold transition-all duration-300 ${
              selected === "About"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {about}
          </span>
        </a>
      </div>
      <div className="grid items-center justify-center">
        <a
          className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_var(--theme)] hover:lg:border-Theme ${
            selected === "proyectos" ? "text-Theme" : ""
          }`}
          href="#Proyectos"
          onClick={() => setSelected("proyectos")}
        >
          {" "}
          <div className="flex justify-center">
            <IconCode
              fill="white"
              className={`h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:fill-Theme group-hover:stroke-Theme ${
                selected === "proyectos" ? "fill-Theme stroke-Theme" : ""
              }`}
            />
          </div>
          <span
            className={`flex justify-center font-bold transition-all duration-300 ${
              selected === "proyectos"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {proyects}
          </span>
        </a>
      </div>
      <div className="grid items-center justify-center">
        <a
          className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_var(--theme)] hover:lg:border-Theme ${
            selected === "tecnologias" ? "text-Theme" : ""
          }`}
          href="#Tecnologias"
          onClick={() => setSelected("tecnologias")}
        >
          {" "}
          <div className="flex justify-center">
            <IconTools className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={`flex justify-center font-bold transition-all duration-300 ${
              selected === "tecnologias"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {technologies}
          </span>
        </a>
      </div>
      <div className="grid items-center justify-center">
        <a
          className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_var(--theme)] hover:lg:border-Theme ${
            selected === "contactos" ? "text-Theme" : ""
          }`}
          href="#Contactos"
          onClick={() => setSelected("contactos")}
        >
          {" "}
          <div className="flex justify-center">
            <IconMailFast className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center item-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={`flex justify-center font-bold transition-all duration-300  ${
              selected === "contactos"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {contact}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
