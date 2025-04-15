import React from "react";
import { Container } from "@/components/Container";

interface SectionProps {
  data: {
    reference?: string;
    preTitle?: string;
    title?: string;
    desc?: string;
    destination?: string;
    destinationText?: string;
    children?: React.ReactNode;
  };
}

export default function SimpleSectionCenter(props: Readonly<SectionProps>) {
  return (
    <Container className={`flex w-full flex-col items-center justify-center text-center`}>
      {props.data.reference && (
        <div id={props.data.reference} className="mb-1"></div>
      )}

      {props.data.preTitle && (
        <div className="text-center text-sm pt-4 font-bold tracking-wider text-colores-titulo uppercase">
          {props.data.preTitle}
        </div>
      )}

      {props.data.title && (
        <h2 className="text-center mt-10 text-3xl font-bold leading-snug tracking-tight text-colores-tituloPrincipal lg:leading-tight lg:text-4xl dark:text-white">
          {props.data.title}
        </h2>
      )}

      {props.data.desc && (

          <p className="max-w-3xl py-4 text-lg lg:text-xl leading-normal text-gray-500 dark:text-gray-300 whitespace-pre-wrap" >
            {props.data.desc}
          </p>

      )}

      {props.data.destination && (
        <a
          href={props.data.destination}
          // target="_blank"
          rel="noopener"
          className="w-[180px] h-[40px] px-8 py-2 mt-2 text-lg font-medium text-center text-white bg-colores-boton2 hover:bg-colores-boton2Hover rounded-md "
        >
          {props.data.destinationText}
        </a>
      )}

      {props.data.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.data.children}
        </p>
      )}
    </Container>
  );
}
