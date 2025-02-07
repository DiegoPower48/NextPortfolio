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
    <div className="w-full z-50 lg:w-auto h-auto lg:h-screen sticky top-0 flex items-center justify-center ">
      <div className="w-full lg:w-auto bg-theme border-textTheme border-b-2 lg:border-0 lg:bg-transparent lg:mb-0 grid lg:grid-cols-1 lg:grid-rows-auto grid-cols-5 grid-rows-1 lg:gap-4 items-center content-center">
        <div className="grid items-center justify-center ">
          <a
            className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_#10b981] hover:lg:border-emerald-500 ${
              selected === "inicio" ? "text-emerald-500" : ""
            }`}
            href="#Home"
            onClick={() => {
              setSelected("inicio");
            }}
          >
            <IconUser className="h-14 w-14 flex justify-center items-center  group-hover:stroke-emerald-500" />
            <span
              className={`flex justify-center font-bold transition-all duration-300 ${
                selected === "inicio"
                  ? "text-emerald-500"
                  : "text-transparent group-hover:text-emerald-500"
              }`}
            >
              {me}
            </span>
          </a>
        </div>
        <div className="grid items-center justify-center">
          <a
            className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_#10b981] hover:lg:border-emerald-500 ${
              selected === "About" ? "border-emerald-500 text-emerald-500" : ""
            }`}
            href="#Detail"
            onClick={() => setSelected("About")}
          >
            <IconAddressBook className="h-14 w-full flex justify-center items-center  group-hover:stroke-emerald-500" />
            <span
              className={`flex justify-center font-bold transition-all duration-300 ${
                selected === "About"
                  ? "text-emerald-500"
                  : "text-transparent group-hover:text-emerald-500"
              }`}
            >
              {about}
            </span>
          </a>
        </div>
        <div className="grid items-center justify-center">
          <a
            className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_#10b981] hover:lg:border-emerald-500 ${
              selected === "proyectos" ? "text-emerald-500" : ""
            }`}
            href="#Proyectos"
            onClick={() => setSelected("proyectos")}
          >
            <IconCode
              fill="white"
              className={`h-14 w-full flex justify-center items-center  group-hover:fill-emerald-500 group-hover:stroke-emerald-500 ${
                selected === "proyectos"
                  ? "fill-emerald-500 stroke-emerald-500"
                  : ""
              }`}
            />
            <span
              className={`flex justify-center font-bold transition-all duration-300 ${
                selected === "proyectos"
                  ? "text-emerald-500"
                  : "text-transparent group-hover:text-emerald-500"
              }`}
            >
              {proyects}
            </span>
          </a>
        </div>
        <div className="grid items-center justify-center">
          <a
            className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_#10b981] hover:lg:border-emerald-500 ${
              selected === "tecnologias" ? "text-emerald-500" : ""
            }`}
            href="#Tecnologias"
            onClick={() => setSelected("tecnologias")}
          >
            <IconTools className="h-14 w-full flex justify-center content-center  group-hover:stroke-emerald-500" />
            <span
              className={`flex justify-center font-bold transition-all duration-300 ${
                selected === "tecnologias"
                  ? "text-emerald-500"
                  : "text-transparent group-hover:text-emerald-500"
              }`}
            >
              {technologies}
            </span>
          </a>
        </div>
        <div className="grid items-center justify-center">
          <a
            className={`group grid grid-rows-2 items-center justify-center h-32 w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105 hover:lg:shadow-[0_0_20px_1px_#10b981] hover:lg:border-emerald-500 ${
              selected === "contactos" ? "text-emerald-500" : ""
            }`}
            href="#Contactos"
            onClick={() => setSelected("contactos")}
          >
            <IconMailFast className="h-14 w-full flex justify-center content-center  group-hover:stroke-emerald-500" />
            <span
              className={`flex justify-center font-bold transition-all duration-300 ${
                selected === "contactos"
                  ? "text-emerald-500"
                  : "text-transparent group-hover:text-emerald-500"
              }`}
            >
              {contact}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
