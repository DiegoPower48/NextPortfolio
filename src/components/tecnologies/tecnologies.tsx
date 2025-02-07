"use client";
import { useState } from "react";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

import Item from "./item";

interface Props {
  data: {
    title: string;
    frontend: {
      title: string;
      technologies: data[];
    };
    backend: {
      title: string;
      technologies: data[];
    };
    database: {
      title: string;
      technologies: data[];
    };
    tools: {
      title: string;
      technologies: data[];
    };
  };
}

interface data {
  url: string;
  alt: string;
  style: string;
}

function Tecnologias(props: Props) {
  const { title, frontend, backend, database, tools } = props.data;

  const [mode, setMode] = useState(false);

  const allTechnologies = [
    ...frontend.technologies,
    ...backend.technologies,
    ...database.technologies,
    ...tools.technologies,
  ];

  const duplicatedTechnologies = [...allTechnologies, ...allTechnologies];

  const changeModal = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4">
      <p className="font-bold text-textTheme text-4xl">{title}:</p>

      <div className={`grid grid-rows-1 w-full overflow-hidden`}>
        <div
          className={`${
            mode
              ? "grid grid-rows-[auto,auto,auto,auto] gap-y-10"
              : "w-full grid"
          }`}
          style={
            !mode
              ? {
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
                }
              : {}
          }
        >
          {mode ? (
            <>
              <div
                className={`w-full grid grid-rows-auto border-2 border-emerald-500 rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
              >
                <div className="text-textTheme flex justify-center text-3xl font-bold">
                  {frontend.title}
                </div>

                <div
                  className={`w-full grid grid-rows-auto grid-cols-5 justify-center items-center p-4 gap-3`}
                >
                  {frontend.technologies.map((element, i) => (
                    <Item data={element} key={i} />
                  ))}
                </div>
              </div>
              <div
                className={`w-full grid grid-rows-auto border-2 border-emerald-500 rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
              >
                <div className="text-textTheme flex justify-center text-3xl font-bold">
                  {backend.title}
                </div>

                <div
                  className={`w-full grid grid-rows-auto grid-cols-5 justify-center items-center p-4 gap-3`}
                >
                  {backend.technologies.map((element, i: number) => (
                    <Item data={element} key={i} />
                  ))}
                </div>
              </div>
              <div
                className={`w-full grid grid-rows-auto border-2 border-emerald-500 rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
              >
                <div className="text-textTheme flex justify-center text-3xl font-bold">
                  {database.title}
                </div>

                <div
                  className={`w-full grid grid-rows-auto grid-cols-5 justify-center items-center p-4 gap-3`}
                >
                  {database.technologies.map((element, i: number) => (
                    <Item data={element} key={i} />
                  ))}
                </div>
              </div>
              <div
                className={`w-full grid grid-rows-auto border-2 border-emerald-500 rounded-xl shadow-[0px 0px 10px 0px #10B981] p-5`}
              >
                <div className="text-textTheme flex justify-center text-3xl font-bold">
                  {tools.title}
                </div>

                <div
                  className={`w-full grid grid-rows-auto grid-cols-5 justify-center items-center p-4 gap-3`}
                >
                  {tools.technologies.map((element, i: number) => (
                    <Item data={element} key={i} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid overflow-hidden w-full gap-x-5">
              <motion.div
                className="flex gap-x-5"
                style={{ width: `${duplicatedTechnologies.length * 100}px` }}
                initial={{ transform: "translateX(0%)" }}
                animate={{ transform: "translateX(-50%)" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <Item key={index} data={tech} />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {mode ? (
        <div
          className="h-10 grid items-center justify-center bg-emerald-500 hover:bg-emerald-700 rounded-xl"
          onClick={changeModal}
        >
          <IconCaretDown fill="white" strokeWidth={2} size={30} />
        </div>
      ) : (
        <div
          className="h-10 grid items-center justify-center bg-emerald-500 hover:bg-emerald-700 rounded-xl"
          onClick={changeModal}
        >
          <IconCaretUp fill="white" strokeWidth={2} size={30} />
        </div>
      )}
    </div>
  );
}

export default Tecnologias;
