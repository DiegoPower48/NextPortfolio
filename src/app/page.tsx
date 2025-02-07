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
      className={`max-w-full grid lg:grid-cols-[1fr,4fr] grid-cols-1 bg-gradient-to-l from-background via-background via-90% to-emerald-900 ${
        process.env.NEXT_PUBLIC_DEV_STATE ? "debug-screens" : ""
      }`}
    >
      <div className="w-full z-50 h-0 lg:h-screen sticky top-0 grid items-center justify-center ">
        <Header data={content.Header} />
      </div>

      <div className="w-full grid grid-cols-1 grid-rows-auto lg:gap-20 gap-32 mb-14 ">
        {isMobile ? <div id="Home"></div> : ""}
        <div className="h-full ">
          {isMobile ? "" : <div id="Home"></div>}
          <div className="bg-theme border-2 border-emerald-500 p-10 rounded-3xl m-10 shadow-[0_0_20px_1px_#10b981]">
            <Resume data={content.Resume} />
          </div>
          {isMobile ? <div id="Detail"></div> : ""}
        </div>

        <div className="h-full ">
          {isMobile ? "" : <div id="Detail"></div>}
          <div className="h-96 bg-theme border-2 border-emerald-500 p-10 rounded-3xl m-10 shadow-[0_0_20px_1px_#10b981]">
            <Detalle data={content.Detail} />
          </div>
          {isMobile ? <div id="Proyectos"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Proyectos"></div>}
          <div className=" bg-theme border-2 border-emerald-500 p-10 rounded-3xl m-10 shadow-[0_0_20px_1px_#10b981]">
            <Proyectos data={content.Proyects} />
          </div>
          {isMobile ? <div id="Tecnologias"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Tecnologias"></div>}
          <div className="bg-theme border-2 border-emerald-500 p-10 rounded-3xl m-10 shadow-[0_0_20px_1px_#10b981]">
            <Tecnologias data={content.Technologies} />
          </div>
          {isMobile ? <div id="Contactos"></div> : ""}
        </div>
        <div className="h-full ">
          {isMobile ? "" : <div id="Contactos"></div>}
          <div className=" bg-theme border-2 border-emerald-500 p-10 rounded-3xl m-10 shadow-[0_0_20px_1px_#10b981]">
            <Comentarios data={content.Comments} />
          </div>
        </div>
      </div>
    </div>
  );
}
