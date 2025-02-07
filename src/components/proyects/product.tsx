import Link from "next/link";

interface Props {
  nombre: string;
  imagen: string;
  direccion: string;
  descripcion: string;
  tecnologias: string[];
}

export default function Products(props: Props) {
  const { nombre, imagen, direccion, descripcion, tecnologias } = props;

  return (
    <Link
      className={`cajaProyectos h-64 w-full grid items-center justify-center `}
      href={direccion}
    >
      <div className={`cards h-full w-40 sm:w-52 md:w-72 lg:w-96`}>
        <div
          className={`page1 h-64 w-full grid grid-cols-1 grid-rows-[1fr,5fr] p-2 `}
        >
          <p className="h-full text-md sm:text-2xl flex justify-center text-center">
            {nombre}
          </p>

          <div className="w-full grid items-center justify-center">
            <img
              src={imagen}
              className="sm:h-48 w-48 grid items-center justify-center"
              alt="github-icon"
            />
          </div>
        </div>
        <div
          className={`page2  h-64 w-full grid grid-rows-[auto,auto] p-2 lg:p-7`}
        >
          <p className="text-sm">{descripcion}</p>
          <div className="w-full flex flex-wrap lg:justify-center justify-start">
            {tecnologias.map((element, index) => (
              <span
                className="text-emerald-500 lg:shadow-[0_0_10px_5px_#10b981] border-emerald-500 border-2 text-xs h-6 lg:h-7 lg:m-2 p-1 rounded-lg hover:bg-emerald-500 hover:text-white"
                key={index}
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
