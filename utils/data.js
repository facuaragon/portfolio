import ConsumedicLogo from "@/components/icons/projectLogos/ConsumedicLogo";
import DogsLogo from "@/components/icons/projectLogos/DogsLogo";
import DevterLogo from "@/components/icons/projectLogos/DevterLogo";
import PortfolioLogo from "@/components/icons/projectLogos/PortfolioLogo";

export const navbarMenu = {
  options: {
    about: {
      es: "acerca de mi",
      en: "about",
    },
    projects: {
      es: "proyectos",
      en: "projects",
    },
    contact: {
      es: "contáctame",
      en: "contact me",
    },
  },
};

export const welcome = {
  salute: {
    es: "hola, mi nombre es",
    en: "hi, my name is",
  },
  description: {
    es: "full stack web developer radicado en argentina",
    en: "full stack web developer based in argentina",
  },
};

export const about = {
  tag: {
    es: "acerca de mi",
    en: "about",
  },
  first: {
    es: "con experiencia trabajando con React, Redux, NodeJs, Express, SQL entre otras tecnologías.",
    en: "with experience working with React, Redux, NodeJs, Express, SQL, among other technologies.",
  },
  second: {
    es: "Actualmente me encuentro en aprendizaje continuo, desarrollando proyectos particulares que me permitan afianzar lo aprendido y ampliar mis conocimientos.",
    en: "I am currently in continuous learning, developing personal projects that allow me to reinforce what I've learned and expand my knowledge.",
  },
  third: {
    es: "Soy una persona sociable y proactiva que trabaja en equipo. Acepto desafíos y me caracterizo en resolver problemas. Estas habilidades las adquirí durante mi experiencia laboral previa, donde trabajé en el sector de la construcción como Jefe de Obra. Ejecuté las obras en tiempo y forma, lideré equipos de arquitectos y administrativos como así también el plantel de obra y subcontratistas para la ejecución de todas las tareas.",
    en: "I am a sociable and proactive person who works well in teams. I embrace challenges and excel at problem-solving. I acquired these skills during my previous work experience, where I worked in the construction sector as a Construction Manager. I completed projects on time, led teams of architects and administrators, as well as the construction team and subcontractors for the execution of all tasks.",
  },
};

export const skills = [
  { name: "JavaScript", knowledge: 90 },
  { name: "HTML / CSS", knowledge: 90 },
  { name: "React", knowledge: 90 },
  { name: "PostgreSQL", knowledge: 80 },
  { name: "Node.js", knowledge: 80 },
  { name: "Express.js", knowledge: 80 },
  { name: "Next.js", knowledge: 70 },
  { name: "MongoDB", knowledge: 50 },
  { name: "TypeScript", knowledge: 20 },
];

export const form = {
  title: {
    es: "Contáctame",
    en: "Contact Me",
  },
  name: {
    es: "Nombre Completo",
    en: "Full Name",
  },
  email: {
    es: "Correo Electrónico",
    en: "E-mail",
  },
  phone: {
    es: "Teléfono",
    en: "Phone",
  },
  message: {
    es: "Mensaje",
    en: "Message",
  },
  button: {
    es: "Enviar",
    en: "Submit",
  },
};

export const formErrors = {
  name: {
    es: "Requerido",
    en: "Required",
  },
  email: {
    required: {
      es: "Requerido",
      en: "Required",
    },
    format: {
      es: "Correo invalido",
      en: "E-mail not valid",
    },
  },
  phone: {
    required: {
      es: "Requerido",
      en: "Required",
    },
    format: {
      es: "Solo números",
      en: "Numbers only",
    },
  },
  message: {
    es: "Requerido",
    en: "Required",
  },
};

export const projects = [
  {
    icon: <ConsumedicLogo width={40} height={40} fill={"#000"} />,
    title: "consumedic",
    type: {
      en: "Final Group Project from Henry's Full Stack Developer Bootcamp",
      es: "Proyecto Final Grupal del Bootcamp de Henry Full Stack Developer",
    },
    shortDescription: {
      en: "Complete development of a web application that allows patients to connect with doctors through online appointment scheduling",
      es: "Desarrollo completo de una aplicacion web que permita conectar pacientes con médicos mediante reserva de turnos online",
    },
    description: {
      en: "The project includes third-party authentication, payment gateway, combined filters, Cloudinary, Local Storage, Reviews, Admin dashboard, Doctor's Profile Dashboard, Patient's Profile Dashboard, Mailing, and logical deletion.\nIn particular, I was responsible for designing the database models, establishing relationships between them, defining server request routes, and providing corresponding responses based on FrontEnd requirements. Later, I integrated Cloudinary into the project to upload, manipulate, and display files in image format. I also developed the code for the doctors' appointment scheduling system, both in the backend and frontend. Finally, I was in charge of the Doctor's Profile panel, where the doctor can access necessary patient information, upload files, and respond to patients.",
      es: "El proyecto cuenta con identificacion de terceros, pasarela de pagos, filtros combinados, Cloudinary, Local Storage, Reviews, dashboard de Admin, Dashboard para el perfil de Médico, Dashboard para el perfil de Paciente, Mailing y borrado lógico.\nEn particular me encargué de la confección de los modelos de la base de datos, la relaciones entre ellos, definir las rutas de peticion del servidor y las correspondientes respuesta según las necesidades del FrontEnd. Posteriormente realicé la incorporacion de Cloudinary al proyecto para poder subir, manipular y mostrar los archivos en formato de imagen. También dearrollé el código correspondiente a la agenda de los médicos tanto en el backend como en el frontend. Finalmente estuve a cargo del panel del Perfil Médico donde el Médico pueda visibilizar la informacion necesaria de sus pacientes, subir archivos y dar respuesta los pacientes.",
    },
    repository: "https://github.com/iHoerth/PF-soyhenry",
    deploy: "https://new-front-silk.vercel.app/",
    techs: [
      "JavaScript",
      "React",
      "Context",
      "Material-UI",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Cloudinary",
      "Nodemailer",
      "Mercado Pago",
      "HTML",
      "CSS",
    ],
    video: "consumedic.mp4",
    image: "consumedic.jpeg",
  },
  {
    icon: <DogsLogo width={40} height={40} fill={"#000"} />,
    title: "dogs",
    type: {
      en: "Individual Project from Henry's Full Stack Developer Bootcamp",
      es: "Proyecto Individual del Bootcamp de Henry Full Stack Developer",
    },
    shortDescription: {
      en: "Complete development of a web application that allows displaying different dog breeds",
      es: "Desarrollo completo de una aplicacion web que permita mostrar las distintas razas de perros obtenidas de una API",
    },
    description: {
      en: "The project includes combined filters, pagination, and the ability to create dog breeds through a controlled form. Temperament data and new breeds are stored in a database.",
      es: "El proyecto cuenta con filtros combinados, paginación y permite crear razas de perro mediante un formulario controlado.\nLos datos de temperamentos y nuevas razas se almacenan en una base de datos",
    },
    repository: "https://github.com/facuaragon/Dogs-Front",
    deploy: "dogs-front-facuaragon.vercel.app/",
    techs: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
    video: "dogs.mp4",
    image: "dogs.jpeg",
  },
  {
    icon: <DevterLogo width={40} height={40} fill={"#000"} />,
    title: "devter",
    type: {
      en: "Personal Project",
      es: "Proyecto Personal",
    },
    shortDescription: {
      en: "Web application consisting of a Twitter clone for developers",
      es: "Aplicación que consiste en un clon de twitter para desarrolladores",
    },
    description: {
      en: "Development of a web application using Firebase Auth, Realtime Database, Firestore Database, and Storage, with GitHub login. It allows users to create 'devits' (tweets) and upload images.",
      es: "Desarrollo de una aplicación web con Firebase Auth, Realtime Database, Firestore Database, Storage, con login de GitHub. Permite crear devits (tweets) y subir imágenes",
    },
    repository: "https://github.com/facuaragon/devter",
    deploy: "devter-iota.vercel.app",
    techs: [
      "JavaScript",
      "Next.js",
      "React",
      "Firebase Auth",
      "Realtime Database",
      "Firestore Database",
      "Storage",
      "HTML",
      "CSS",
    ],
    video: "devter.mp4",
    image: "devter.jpeg",
  },
  {
    icon: <PortfolioLogo width={40} height={40} fill={"#000"} />,
    title: "portfolio",
    type: {
      en: "Personal Portfolio",
      es: "Portfolio Personal",
    },
    shortDescription: {
      en: "A website showcasing my profile, completed projects, contact form, social media links, and curriculum vitae",
      es: "Pagina web que muestra mi perfil, proyectos realizados, formulario de contacto y links de redes sociales y curriculum vitae",
    },
    description: {
      en: "A website showcasing my profile, completed projects, contact form, social media links, and curriculum vitae",
      es: "Pagina web que muestra mi perfil, proyectos realizados, formulario de contacto y links de redes sociales y curriculum vitae",
    },
    repository: "https://github.com/facuaragon/portfolio",
    deploy: "https://facundo-aragon.vercel.app/",
    techs: ["JavaScript", "Next.js", "React", "HTML", "CSS", "Nodemailer"],
    video: "portfolio.mp4",
    image: "portfolio.jpeg",
  },
];
