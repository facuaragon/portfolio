import styles from "./about.module.css";
import Skills from "./skills";

export default function About() {
  let skills = [
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
  return (
    <div className={styles.container}>
      <div className={styles.tag}>about me</div>
      <div className={styles.firstContainer}>
        <div className={styles.secondContainer}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.geometry}>
          <div className={styles.topLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.rightLine}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.description}>
            <span>Full Stack Web Developer</span> con experiencia trabajando con
            React, Redux, NodeJs, Express, SQL entre otras tecnologías. <br />
            <br />
            Actualmente me encuentro en aprendizaje continuo, desarrollando
            proyectos particulares que me permitan afianzar lo aprendido y
            ampliar mis conocimientos. <br />
            <br />
            Soy una persona sociable y proactiva que trabaja en equipo. Acepto
            desafíos y me caracterizo en resolver problemas. Estas habilidades
            las adquirí durante mi experiencia laboral previa, donde trabajé en
            el sector de la construcción como Jefe de Obra. Ejecuté las obras en
            tiempo y forma, lideré equipos de arquitectos y administrativos como
            así también el plantel de obra y subcontratistas para la ejecución
            de todas las tareas.
          </div>
          <div className={styles.skills}>
            {skills.map((skill) => {
              return (
                <div key={skill.name} className={styles.skill}>
                  <div className={styles.circles}>
                    <Skills knowledge={skill.knowledge} />
                  </div>
                  <div className={styles.technology}>{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
