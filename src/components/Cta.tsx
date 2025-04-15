import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-colores-boton2 dark:bg-colores-cardDark px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl justify-center items-center text-center">
          ¿Querés conocer más sobre nosotros?
          </h2>
          <p className="justify-center items-center text-center mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            No dudes en contactarnos
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/pages/contacts"
            // target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-colores-titulo bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Contacto
          </a>
        </div>
      </div>
    </Container>
  );
};
