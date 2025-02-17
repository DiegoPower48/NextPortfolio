interface Props {
  data: {
    title: string;
    about: string;
    about2: string;
  };
}

function Detalle(props: Props) {
  const { title, about, about2 } = props.data;

  return (
    <div className="h-full w-full grid grid-rows-[1fr,2fr,2fr] items-center md:gap-4 ">
      <p className="font-bold text-Theme text-4xl">{title}:</p>
      <p className="">{about}</p>
      <p className="">{about2}</p>
    </div>
  );
}

export default Detalle;
