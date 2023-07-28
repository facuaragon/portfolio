import styles from "./about.module.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="/pic.png" />
        </div>
        <div className={styles.description}>
          <p>
            Full Stack Developer con formación como Diseñador Web. Experiencia
            trabajando en React, Redux, NodeJs, Express, SQL entre otras
            tecnologías el sector. Actualmente me encuentro en aprendizaje
            continuo, desarrollando proyectos particulares que me permitan
            afianzar lo aprendido e incrementar mis conocimientos. Soy una
            persona sociable y proactiva que trabaja en equipo, acepto desafíos
            y me caracterizo en resolver problemas. Estas habilidades las
            adquirí durante mi experiencia laboral previa donde trabajé en el
            sector de la construcción desarrollando mis tareas físicamente en la
            obra. Como Jefe de Obra ejecuté las obras en el tiempo pactado y
            dentro del presupuesto previsto, lideré equipos de arquitectos y
            administrativos como así también el plantel de obra y
            subcontratistas para la ejecución de todas las tareas.
          </p>
        </div>
      </div>
    </>
  );
}
