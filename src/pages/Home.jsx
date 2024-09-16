import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Importación del icono de descarga
import '../styles.css'; // Asegúrate de que tu archivo de estilos esté importado

function Home() {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="intro-section"
      >
        <div className="intro-content">
          <div className="intro-text">
            <h1>Hola, soy Javier Macías</h1>
            <p>Desarrollador Full Stack con experiencia en crear aplicaciones modernas y eficientes.</p>
          </div>
          <div className="intro-image">
            <img src='Yo.jpeg' alt="Javier Macías" className="profile-image" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        className="about-section"
      >
        <h2>Sobre mí</h2>
        <p>Después de media vida trabajando en el sector privado socio-sanitario, liderando proyectos y gestionando recursos humanos, en 2021 decidí dar un cambio a mi carrera profesional y comencé a estudiar programación, algo que siempre me apasionó.</p>
        <p>Me especialicé en backend, haciendo cursos de Java, SQL, Scala, y Python. En 2022, me uní al equipo del BAU en Banco Santander, donde profundicé en Big Data y tecnologías relacionadas.</p>
        <p>En 2024 completé el curso Full Stack de la Universidad de Helsinki, donde adquirí experiencia en React, Vite, Node, JavaScript, y bases de datos no relacionales.</p>
        <p>Actualmente, busco oportunidades en las que pueda aplicar y desarrollar mis habilidades en un entorno profesional motivante.</p>
      </motion.div>

      {/* Enlace de descarga del currículum con icono */}
      <div className="download-cv">
        <a href="/Curriculum_Javier_Macias.pdf" download>
          <FaDownload style={{ marginRight: '8px' }} /> Descarga mi Curriculum
        </a>
      </div>
    </div>
  );
}

export default Home;