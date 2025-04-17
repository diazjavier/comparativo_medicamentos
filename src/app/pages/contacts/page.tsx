"use client"

import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaCheck, FaTimes } from "react-icons/fa";
import { sendEmail } from "@/lib/brevo";
import { Toaster, toast } from "sonner";
import { Container } from "@/components/Container";
import { contactanos } from "@/components/data";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";



export default function Contacts() {

async function onSubmitForm(event: any) {

  event.preventDefault();
  const nombre:string = event.target.nombre.value;
  const mail:string = event.target.email.value;
  const message:string = event.target.message.value;

  if (!nombre || !mail || !message) { 
       return toast.error("Ups!", {
        description: "Para enviarnos un mensaje por favor complete todos los campos.",
        icon: <FaTimes color="red"/>
      });
    };
    
    try{      
      await sendEmail(
        {nombre: nombre,
          mail: mail,
          htmlContent:message}
        );
        
        event.target.nombre.value='';
        event.target.email.value='';
        event.target.message.value='';
        
        return toast.success("Enviado!", {
          description: "El mensaje se ha enviado correctamente", 
          icon: <FaCheck color="green" />
        });
      } catch {
        console.error(process.env.BREVO_API_KEY)
        return toast.error("Ups!", {
          description: "Se produjo un error",
          icon: <FaTimes color="red"/>
        });
      }
        
};

  return (
    <Container>
      <div id="team" className="section relative">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={contactanos} />
          <div className="flex flex-wrap flex-row -mx-4 justify-center">

              <div className="m-10 w-full sm:w-1/4">
                <h2 className="text-2xl font-semibold dark:text-white">
                  Canales de contacto
                </h2>
                <div className="mt-5">
                  <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                    <EnvelopeIcon className="w-4 h-4" />
                    <a href={`mailto:consultas@preciomedicamentos.com.ar`}>
                      consultas@preciomedicamentos.com.ar
                    </a>
                  </div>
                </div>
              </div>
              <div className="m-10 w-full sm:w-1/4">
                {/* <form action={onSubmit} method="POST"> */}
                <form className="flex flex-col" onSubmit={onSubmitForm}>
                <h2 className="text-2xl mb-6 font-semibold dark:text-white text-center">
                  Envianos tu consulta
                </h2>


                  <div className="mb-5">
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      autoComplete="false"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4 "
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email_address" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email_address"
                      type="email"
                      placeholder="email"
                      name="email"
                      autoComplete="false"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      placeholder="Tu consulta"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4"
                    />
                  </div>

                  <button type="submit"
                    className="w-full py-4 font-semibold transition-colors rounded-md text-white bg-colores-boton2 dark:bg-colores-boton2Dark hover:bg-colores-boton2Hover px-7"
                  >
                    Enviar
                  </button>
                </form>
              </div>

          </div>{" "}
        </div>
      </div>{" "}

      <Toaster position="top-right" closeButton richColors/>

    </Container>
  );
}
