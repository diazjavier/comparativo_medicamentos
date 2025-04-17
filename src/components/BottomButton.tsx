
interface BottomButtonProps {
  data: {
    destination?: string | undefined;
    destinationText?: string | undefined;
  };
}

export default function BottomButton(props: Readonly<BottomButtonProps>) {
  return (
      <div className="flex flex-wrap justify-center text-center items-center w-full max-w-4xl h-24 gap-5 mx-auto text-white bg-colores-boton2 dark:bg-colores-boton2Dark hover:bg-colores-boton2Hover lg:flex-nowrap rounded-xl">

          {props.data.destination && (
            <a
              href={props.data.destination}
              // target="_blank"
              rel="noopener"
              className="w-full h-full pt-4 mt-2 text-md font-medium justify-center items-center text-center text-white bg-colores-boton2 dark:bg-colores-boton2Dark hover:bg-colores-boton2Hover rounded-xl md:text-2xl md:pt-8"
            >
              {props.data.destinationText}
            </a>
          )}

      </div>
  );
}
