import Image from "next/image";

interface LongCardsProps {
  data: {
    img?: string;
    title?: string;
    text?: string;
    destination?: string;
  };
}

export default function LongCards(props: Readonly<LongCardsProps>) {
  return (
    <div className="max-w-full gap-x-2 mb-4 max-h-full px-4 w-full xl:px-6 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50">
      <div className="group p-6 max-h-full sm:p-8">
        <a href={props.data.destination}>
          <div className="relative overflow-hidden rounded-xl">
            {props.data.img && (
              <Image
                src={props.data.img}
                alt="art cover"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            )}
          </div>
        </a>
        <div className="mt-6 relative">
          {props.data.title && (
            <h3 className="text-2xl text-center font-semibold text-gray-800 dark:text-white">
              {props.data.title}
            </h3>
          )}

          {props.data.text && (
          <p className="mt-6 mb-8 text-center text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
            {props.data.text}
          </p>)}

          {props.data.destination && (
          <a className="inline-block" href={props.data.destination}>
            <span className="text-info text-indigo-500 hover:underline hover:cursor-pointer dark:text-blue-300">
              Concoce más...
            </span>
          </a>)}

        </div>
      </div>
    </div>
  );
}
