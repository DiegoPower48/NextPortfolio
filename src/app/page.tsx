"use client";

import Comentarios from "@/components/coments/coments";
import Detalle from "@/components/detalle/detalle";
import Header from "@/components/header/header";
import Proyectos from "@/components/proyects/proyects";
import Resume from "@/components/resume/resume";
import Tecnologias from "@/components/tecnologies/tecnologies";
import content from "@/content/content.json";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`max-w-screen grid lg:grid-cols-[1fr,4fr] grid-cols-1 lg:bg-gradient-to-l lg:from-background lg:via-background lg:via-90% lg:to-emerald-900  ${
        process.env.NEXT_PUBLIC_DEV_STATE ? "debug-screens" : ""
      }`}
    >
      <Header data={content.Header} />

      <div className="w-full grid grid-cols-1 grid-rows-auto lg:gap-20 gap-32   justify-items-stretch">
        {isMobile ? <div id="Home"></div> : ""}
        <div className="h-full ">
          {isMobile ? "" : <div id="Home"></div>}
          <div className="h-full bg-theme border-2 border-emerald-500 p-10 rounded-3xl lg:m-10 shadow-[0_0_20px_1px_#10b981]">
            <Resume data={content.Resume} />
          </div>
          {isMobile ? <div id="Detail"></div> : ""}
        </div>

        <div className="h-full ">
          {isMobile ? "" : <div id="Detail"></div>}
          <div className="h-full bg-theme border-2 border-emerald-500 p-10  rounded-3xl lg:m-10 shadow-[0_0_20px_1px_#10b981]">
            <Detalle data={content.Detail} />
          </div>
          {isMobile ? <div id="Proyectos"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Proyectos"></div>}
          <div className="h-full bg-theme border-2 border-emerald-500 p-10 rounded-3xl lg:m-10 shadow-[0_0_20px_1px_#10b981]">
            <Proyectos data={content.Proyects} />
          </div>
          {isMobile ? <div id="Tecnologias"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Tecnologias"></div>}
          <div className="h-full bg-theme border-2 border-emerald-500 p-10 rounded-3xl lg:m-10 shadow-[0_0_20px_1px_#10b981]">
            <Tecnologias data={content.Technologies} />
          </div>
          {isMobile ? <div id="Contactos"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Contactos"></div>}
          <div className="h-full bg-theme border-2 border-emerald-500 p-10 rounded-3xl lg:m-10 shadow-[0_0_20px_1px_#10b981]">
            <Comentarios data={content.Comments} />
          </div>
        </div>
      </div>
    </div>
  );
}
