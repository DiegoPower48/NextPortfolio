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
    <div className="h-full w-full grid grid-rows-[auto,auto] ">
      <p className="font-bold text-Theme text-4xl">{title}:</p>
      <p className="">{about}</p>

      <p className="">
        <br />
        {about2}
      </p>
    </div>
  );
}

export default Detalle;
