import {
  NewspaperIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  // FaceSmileIcon,
  // ChartBarSquareIcon,
  // CursorArrowRaysIcon,
  // DevicePhoneMobileIcon,
  // AdjustmentsHorizontalIcon,
  // SunIcon,
} from "@heroicons/react/24/solid";

import grupo_1 from "../../public/img/grupo_1.jpg";

const comparadorDePrecios = {
  reference: "precios",
  preTitle: "Información actualizada y fidedigna",
  title: "Precio de los medicamentos de Argentina",
  desc: `En esta sección puede consultar los precios de los medicamentos tanto por nombre de la droga como por nombre del producto comercial y comparar los precios de medicamentos equivalentes.`,
//  destination: "/about",
//  destinationText: "Conocenos",  
};

const sobreEsteSitio = {
      img: "/img/consultoria1.jpg",
      title: "Sobre este sitio",
      text: "Analizamos cómo mejorar el acceso a la información de sanitaria útil para los pacientes para colaborar con una Salud más justa.",
      destination: "/pages",
      content: {
        header: {
          //reference: undefined,
          preTitle: "El acceso a información fidedigna y transparente es un derecho de todo ciudadano",
          title: "Precio de los medicamentos de Argentina",
          // desc: `Analizamos cómo mejorar el acceso a la información de sanitaria útil para los pacientes para colaborar con una Salud más justa.`,
          //destination: undefined,
          //destinationText: undefined,
          //children: undefined,
        },
        bottomLink: {
          destination: "/pages/comparativotab2",
          destinationText: "Consulte el precio vigente de los medicamentos",
        },
        data: [
          {
            data: [
              {
                title: "Quienes somos",
                text: "Nuestro equipo está formado por profesionales de primer nivel en áreas como epidemiología, salud pública y tecnología comprometidos con la transparencia de la información sanitaria y el acceso universal y equitativo a los servicios de Salud.",
              },
              {
                title: "Descargo",
                text: "Este sitio fue desarrollado en forma independiente y sus desarrolladores no mantienen ninguna relación con las compañías farmacéuticas ni con empresas o instituciones relacionadas.",
              },
              {
                title: "Objetivo",
                text: "El objetivo de la presente página es ofrecer a la población una herramienta objetiva y clara para evaluar los precios de los medicamentos disponibles en el territorio argentino.",
              }
            ],
          }
        ],
      }
};

const quienesSomos = {
  reference: "about",
  preTitle: "Sobre nosotros",
  title: "Quiénes somos",
  desc: "Nuestro equipo está formado por profesionales de primer nivel en áreas como epidemiología, salud pública, economía de la salud y tecnología. Nuestra misión es asegurar que los estudios que realizamos contribuyan al bienestar de la población, sin influencias externas. Trabajamos con un compromiso firme por la transparencia, la equidad y la accesibilidad.",
  destination: "/about",
  destinationText: "Conocenos",
};

const quienesSomos2 = {
  reference: "about",
  preTitle: "Independencia científica y compromiso social",
  title: "Nuestro equipo",
  desc: "Conocé al grupo de profesionales altamente calificados que colaboran con IDISA",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const contactanos = {
  reference: "contact",
  preTitle: "Independencia científica y compromiso social",
  title: "Ponete en contacto con nosotros",
  desc: `Completá el formulario de contacto y envianos tu consulta, envianos un email o llamanos.
          Estamos aquí para ayudarte a conocer más sobre nuestra labor y cómo colaboramos para mejorar la salud pública.`,
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const proyectosHeader = {
  //reference: "about",
  preTitle: "Investigaciones que impactan en la vida de las personas",
  title: "Nuestros proyectos",
  desc: "En IDISA, cada proyecto de investigación tiene como objetivo generar cambios reales en la salud pública. Aquí te presentamos algunos de nuestros estudios más recientes que ya están generando impacto",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const areas = {
  data: [
    {
      img: "/img/politicas.jpg",
      title: "Políticas de salud",
      text: "Apoyamos la creación de políticas basadas en evidencia científica que promuevan la accesibilidad y universalidad de la asistencia sanitaria.",
      destination: "/",
    },
    {
      img: "/img/estadistica.jpg",
      title: "Epidemiología y salud pública",
      text: "Realizamos estudios sobre la prevención de enfermedades y el acceso a tratamientos de calidad.",
      destination: "/",
    },
    {
      img: "/img/economia3.jpg",
      title: "Economía de la salud",
      text: "Analizamos cómo mejorar la eficiencia en los recursos sanitarios para reducir los desperdicios y optimizar las intervenciones.",
      destination: "/",
    },
  ],
};

const serviciosHeader = {
  //reference: "about",
  preTitle: "Proveemos servicios de calidad para mejorar las políticas de salud",
  title: "Nuestros servicios",
  desc: "Desde IDISA ofrecemos diferentes servicios con el objetivo de mejorar las políticas de salud pública en todos sus aspectos. Nuestros profesionales altamente capacitados cuentan con gran experiencia en la gestión de instituciones de salud tanto públicas como privadas lo que asegura la calidad del servicio ofrecido como el valor agregado del mismo",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const servicios = {
  data: [
    {
      img: "/img/ONG1.jpg",
      title: "Colaboraciones con ONG",
      text: "Apoyamos la creación de políticas basadas en evidencia científica que promuevan la accesibilidad y universalidad de la asistencia sanitaria.",
      destination: "/",
    },
    {
      img: "/img/app1.jpg",
      title: "Aplicaciones",
      text: "Realizamos estudios sobre la prevención de enfermedades y el acceso a tratamientos de calidad.",
      destination: "/",
    },
    {
      img: "/img/consultoria1.jpg",
      title: "Consultoría",
      text: "Analizamos cómo mejorar la eficiencia en los recursos sanitarios para reducir los desperdicios y optimizar las intervenciones.",
      destination: "./services/2",
      content: {
        header: {
          //reference: undefined,
          preTitle: "Proveemos servicios de calidad para mejorar las políticas de salud",
          title: "Servicio de Consultoría",
          desc: "Analizamos cómo mejorar la eficiencia en los recursos sanitarios para reducir los desperdicios y optimizar las intervenciones.",
          //destination: undefined,
          //destinationText: undefined,
          //children: undefined,
        },
        bottomLink: {
          destination: "/services",
          destinationText: "Conozca todos nuestros servicios",
        },
        data: [
          {
            sectionTitle:
              "Consultoría en epidemiología y gestión de servicios de salud",
            data: [
              {
                title: "Análisis de datos",
                text: "Análisis de datos epidemiológicos, clínicos y administrativos sanitarios",
              },
              {
                title: "Diseño de estudios",
                text: "Asesoramiento e implementación de estudios iniciados por investigadores y/o datos reales útiles para gestores de servicios de salud",
              },
              {
                title: "Evaluación de intervenciones",
                text: "Evaluación de indicadores de proceso y resultado, con foco en rediseño de servicios de salud basados en valor",
              },
              {
                title: "Modelización",
                text: "Impacto de modificaciones e intervenciones en políticas sanitarias y/o modelos de provisión de servicios",
              },
              {
                title: "Asesoramiento en políticas",
                text: "Basándonos en evidencia de la vida real, revisión de mejores prácticas locales-globales y revisiones sistemáticas de la literatura, y análisis de las organizaciones en contextos reales, elaboramos recomendaciones para implementación de políticas públicas o para organizaciones de salud en pos de la calidad y eficiencia",
              },
            ],
          },
          {
            sectionTitle: "Consultoría para el área Economía de la Salud",
            data: [
              {
                title: "Análisis de costo-efectividad",
                text: "Evaluación de la relación entre los costos y los efectos ajustados a datos primarios y secundarios",
              },
              {
                title: "Modelado económico",
                text: "Desarrollo de modelos para simular el impacto financiero de intervenciones y/o políticas sectoriales o públicas de salud , aportando insumos claves para toma de decisión en inversiones",
              },
              {
                title: "Evaluación de tecnologías sanitarias",
                text: "Análisis de tecnologías sanitarias nuevas o preexistentes que orienten la toma de decisiones incorporando la perspectiva de valor",
              },
              {
                title: "Análisis de costos",
                text: "Estimación de los costos directos e indirectos asociados con enfermedades, tratamientos y prevención, identificando oportunidades de eficiencia",
              },
              {
                title: "Análisis de mercado",
                text: "Análisis de precios, evolución de sectores involucrados en la provisión de servicios e insumos críticos para las organizaciones de salud",
              },
            ],
          },
          {
            sectionTitle: "Consultorías de procesos y sistemas de información",
            data: [
              {
                title: "Asesoramiento",
                text: "Asesoramiento en proyectos de análisis funcional planificación e implementación de sistemas de información en salud, en consonancia con el plan estratégico de la organización",
              },
            ],
          },
        ],
      },
    },
    {
      img: "/img/educacion1.jpg",
      title: "Educación",
      text: "Analizamos cómo mejorar la eficiencia en los recursos sanitarios para reducir los desperdicios y optimizar las intervenciones.",
      destination: "/",
    },
  ],
};

const actividades = {
  title: "Nuestras actividades",
  desc: "En IDISA, creemos en la ciencia independiente como herramienta para mejorar la vida de las personas. Nuestras investigaciones no solo buscan resultados, sino también un impacto positivo y tangible en la salud pública.",
  image: grupo_1,
  bullets: [
    {
      title: "Servicios / Áreas de Investigación",
      desc: "Promovemos investigaciones imparciales para políticas de salud más justas.",
      icon: <GlobeAltIcon />,
      destination: "/services",
    },
    {
      title: "Proyectos / Investigaciones",
      desc: "Investigaciones que impactan en la vida de las personas.",
      icon: <BriefcaseIcon />,
      destination: "/projects",
    },
    {
      title: "Blog / Noticias",
      desc: "Últimas Novedades en Salud Pública y Ciencia Independiente.",
      icon: <NewspaperIcon />,
      destination: "/news",
    },
  ],
};

const about = {
  data: [
    {
      imagen: "/img/macchia.jpg",
      nombre: "Alejandro Macchia",
      rol: "Presidente",
      twitter: "https://twitter.com/elonmusk",
      facebook: "https://www.facebook.com/groups/elonmusk1/",
      instagram: "https://www.instagram.com/elonmusk__official__/reels/?hl=en",
      linkedin:
        "https://www.linkedin.com/company/dablim-solu%C3%A7%C3%B5es-gr%C3%A1ficas/",
      miniBio: `Subsecretaría de Planificación Sanitaria. Ministerio de Salud de la Ciudad de Buenos Aires,Argentina.
      Investigador en Fundación GESICA.
      Doctor en Medicina`,
    },
    {
      imagen: "/img/baum.jpg",
      nombre: "Analia Baum",
      rol: "Secretaria",
      twitter: "https://x.com/anitabaum?lang=en",
      facebook: "https://es-la.facebook.com/public/Anal%C3%ADa-Baum",
      instagram: "https://www.instagram.com/analiabaum/",
      linkedin: "https://www.linkedin.com/in/analiabaum/?originalSubdomain=ar",
      miniBio: `Especialista en Transformación Digital en Salud. 
      Médica egresada de la Universidad de Buenos Aires. 
      Especialista en Informática en Salud y Magister en Educación para Profesionales de la Salud. 
      Profesora univeritaria en Salud Digital. Más de 20 años de experiencia asesorando proyectos de Transformación Digital en ámbitos públicos y privados.`,
    },
    {
      imagen: "/img/casullo.jpg",
      nombre: "Carolina Casullo",
      rol: "Vocal",
      twitter: "https://x.com/DaniFerrante15",
      facebook: "https://es-la.facebook.com/public/Daniel-Ferrante",
      instagram: "https://www.instagram.com/ferrantehdaniel/",
      linkedin:
        "https://www.linkedin.com/in/carolinacasullo/?originalSubdomain=ar",
      miniBio: `Especialista en Diseño, Planificación, Gestión y Evaluación de Proyectos de Salud.
      Organismos Multilaterales de Crédito. Gestión del Cambio. Género y Liderazgo`,
    },
    {
      imagen: "/img/mautalen.jpg",
      nombre: "Satiago Mautalén",
      rol: "Tesorero",
      twitter: "https://x.com/realdonaldtrump?lang=en",
      facebook: "https://www.facebook.com/DonaldTrump/",
      instagram: "https://www.instagram.com/realdonaldtrump/?hl=en",
      linkedin: "https://www.linkedin.com/in/donald-trump-jr-4454b862/",
      miniBio: `CEO Mautalen Salud & Investigación 
      30 años de experiencia en desarrollo y administración financiera en diversas empresas locales e internacionales. 
      MBA HEC Paris 
      Posgrado negocios internacionales UC Berkeley - UCLA 
      Lic. Administración de empresas UBA`,
    },
    // {
    //   imagen: "/img/ferrante.jpg",
    //   nombre: "Daniel Ferrante",
    //   rol: "Prosecretario",
    //   twitter: "https://x.com/DaniFerrante15",
    //   facebook: "https://es-la.facebook.com/public/Daniel-Ferrante",
    //   instagram: "https://www.instagram.com/ferrantehdaniel/",
    //   linkedin:
    //     "https://www.linkedin.com/in/daniel-ferrante-1b24858a/?originalSubdomain=ar",
    // },
  ],
};

const areasHeader = {
  //reference: "about",
  preTitle:
    "Promovemos investigaciones imparciales para políticas de salud más justas",
  title: "Nuestras áreas de investigación",
  desc: "En IDISA nos enfocamos en proyectos de investigación que impacten directamente en la mejora de las políticas de salud pública. Algunas de nuestras áreas de investigación incluyen:",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const proyectos = {
  data: [
    {
      //img: "/img/politicas.jpg",
      title: "Plataforma de Transparencia de Precios de Medicamentos",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Desarrollar una plataforma en línea que recopile y publique información sobre los precios de medicamentos en diferentes regiones y farmacias.",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Objetivos: Aumentar la transparencia en la fijación de precios y empoderar a los pacientes para que tomen decisiones informadas sobre sus tratamientos.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Recolección de datos de precios, desarrollo de la plataforma, campañas de sensibilización para promover su uso.",
        },
      ],
      destination: "/",
    },
    {
      //img: "/img/politicas.jpg",
      title: "Análisis de Costo-Efectividad de Intervenciones de Salud Pública",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Realizar un estudio que evalúe el costo-efectividad de diferentes intervenciones de salud pública en un contexto específico (por ejemplo, vacunación, programas de prevención.",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Proporcionar evidencia para optimizar el uso de recursos en el sistema de salud y mejorar la asignación de presupuesto.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Recolección de datos sobre costos y resultados de salud, modelado económico y presentación de hallazgos a tomadores de decisiones.",
        },
      ],
      destination: "/",
    },
    {
      //img: "/img/politicas.jpg",
      title: "Evaluación del Impacto del Cambio Climático en la Salud Pública",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Desarrollar un estudio para evaluar cómo el cambio climático afecta la salud de la población, enfocándose en enfermedades relacionadas con el clima (como enfermedades respiratorias y vectoriales).",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Identificar riesgos y proponer estrategias de adaptación para proteger la salud pública ante los efectos del cambio climático.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Análisis de datos climatológicos y de salud, encuestas a comunidades afectadas y elaboración de un informe con recomendaciones para políticas de salud pública.",
        },
      ],
      destination: "/",
    },
  ],
};

const noticiasHeader = {
  //reference: "about",
  preTitle: "Últimas Novedades en Salud Pública y Ciencia Independiente",
  title: "Noticias relevantes para el ámbito de la salud",
  desc: "Explorá los temas más recientes en investigación de salud pública, políticas de salud y ciencia independiente. En este espacio compartimos nuestras reflexiones, avances y estudios.",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const noticias = {
  data: [
    {
      icon: <NewspaperIcon />,
      date: "Viernes 01/09/2024 12:32hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination:
        "https://www.lanacion.com.ar/deportes/futbol/despues-del-desplante-marcelo-fue-despedido-de-fluminense-escribio-un-mensaje-y-ya-hay-sospechas-de-nid04112024/",
    },
    {
      icon: <NewspaperIcon />,
      date: "Lunes 28/10/2024 17:50hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination: "/",
    },
    {
      icon: <NewspaperIcon />,
      date: "Martes 22/10/2024 09:34hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination: "/",
    },
  ],
};

export {
  comparadorDePrecios,
  sobreEsteSitio,
  quienesSomos,
  quienesSomos2,
  actividades,
  about,
  serviciosHeader,
  servicios,
  areasHeader,
  areas,
  proyectosHeader,
  proyectos,
  noticiasHeader,
  noticias,
  contactanos,
};
