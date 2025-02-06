interface Props {
  data: {
    title: string;
    about: string;
  };
}

function Detalle(props: Props) {
  const { title, about } = props.data;

  return (
    <div className="h-full w-full grid grid-rows-[1fr,2fr] ">
      <p className="font-bold text-textTheme text-4xl">{title}:</p>
      <p className="">{about}</p>
    </div>
  );
}

export default Detalle;
