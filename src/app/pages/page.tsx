"use client";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";
import { sobreEsteSitio } from "@/components/data";
import LongCards from "@/components/LongCards";
import BottomButton from "@/components/BottomButton";


export default function ParticularService() {
  const servicioHeaderData: any = sobreEsteSitio.content?.header;
  const botonData: any = sobreEsteSitio.content?.bottomLink;
  
  return (
    <Container>
      <div id="particularSerivices" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={servicioHeaderData} />
          <div className="flex flex-wrap flex-row -mx-4 justify-between">
            {sobreEsteSitio.content?.data.map((card: any, index: number) => (
              <div key={index}>
                <br />
                <h2 className="text-center my-10 text-3xl font-bold leading-snug tracking-tight text-colores-tituloPrincipal lg:leading-tight dark:text-white">
                  {card.sectionTitle}
                </h2>
                <div className="flex flex-wrap flex-row mx-3">
                  {card.data.map((card2: any, index2: number) => (
                    <LongCards key={index2} data={card2} />
                  ))}
                </div>{" "}
              </div>
            ))}
          </div>{" "}
          {<BottomButton data={botonData}/>}
        </div>
      </div>{" "}
      <Cta />
    </Container>
  );
}
