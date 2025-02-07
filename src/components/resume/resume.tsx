import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

interface Props {
  data: {
    first: {
      name: string;
      work: string;
    };
    second: {
      seccion: string;
      detail: string;
    };
    third: {
      seccion: string;
      detail: string;
    };
    fourth: {
      seccion: string;
      detail: string;
    };
  };
}

function Resume(props: Props) {
  const { first, second, third, fourth } = props.data;

  return (
    <div className="h-full w-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-[3fr,4fr] items-center justify-center">
      <div className="h-full w-full grid grid-rows-[3fr,2fr,2fr] items-center justify-center p-5 ">
        <div className="h-full grid grid-rows-[3fr,1fr] gap-7 font-bold items-center">
          <p className=" text-6xl text-center ">{first.name}</p>
          <p className=" text-xl text-center  text-emerald-500">{first.work}</p>
        </div>
        <div className="grid gap-2 justify-center">
          <div className="flex space-x-3 ">
            <p className="font-bold text-textTheme">{second.seccion} </p>
            <p>{second.detail}</p>
          </div>
          <div className="flex space-x-3">
            <p className="font-bold text-textTheme">{third.seccion} </p>
            <p> {third.detail}</p>
          </div>
          <div className="flex space-x-3">
            <p className="font-bold text-textTheme"> {fourth.seccion} </p>
            <p> {fourth.detail}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center ">
          <div className="w-full grid  justify-center ">
            <a
              href="https://github.com/DiegoPower48"
              className=" hover:scale-125 transition-all group"
            >
              <IconBrandGithubFilled className="h-16 w-16  group-hover:fill-emerald-500" />
              <div className="text-center group-hover:text-emerald-500">
                Github
              </div>
            </a>
          </div>
          <div className="w-full grid  justify-center ">
            <a
              href="https://www.linkedin.com/in/diego-arturo-torres-pacherres-440423242/"
              className="hover:scale-125 transition-all group"
            >
              <IconBrandLinkedinFilled className="h-16 w-16  group-hover:fill-emerald-500" />
              <div className="text-center group-hover:text-emerald-500">
                Linkedin
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="grid items-center justify-center p-5">
        <img
          src="https://i.ibb.co/drwFYjN/me.jpg"
          className="h-96 w-h-96 rounded-full"
          alt="foto"
        />
      </div>
    </div>
  );
}

export default Resume;
