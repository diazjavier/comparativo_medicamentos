import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";

import { sobreEsteSitio } from "@/components/data";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";

export default function Home() {
  return (
    <Container>
      <SimpleSectionCenter data={sobreEsteSitio}/>
      
      <Cta/>
    </Container>
  );
}
