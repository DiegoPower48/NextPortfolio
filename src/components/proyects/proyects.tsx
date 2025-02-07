import Products from "./product";
// import "@justinribeiro/lite-youtube";

interface Props {
  data: {
    web: {
      title: string;
      proyects: Array<{
        nombre: string;
        imagen: string;
        direccion: string;
        descripcion: string;
        tecnologias: Array<string>;
      }>;
    };
  };
}

function Proyectos(props: Props) {
  const { web } = props.data;

  return (
    <div className="h-full w-full grid grid-cols-1 grid-rows-[1fr,auto] gap-4  items-center justify-center content-center ">
      <div className="h-full w-full flex items-center justify-center text-4xl text-textTheme p-7">
        {web.title}
      </div>
      <div className="h-full w-full grid md:grid-cols-2 grid-rows-auto gap-y-12">
        {web.proyects.map((element, index: number) => (
          <Products
            nombre={element.nombre}
            imagen={element.imagen}
            direccion={element.direccion}
            descripcion={element.descripcion}
            tecnologias={element.tecnologias}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
