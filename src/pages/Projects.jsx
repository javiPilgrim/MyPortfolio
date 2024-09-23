import { motion } from 'framer-motion';
import { GrProjects } from 'react-icons/gr'; // Importa el icono de react-icons
import '../styles.css'; // Asegúrate de que esté conectado a tus estilos


const projects = [
  {
    title: 'Tiempoy+',
    description: (
      <span>
        Esta aplicación ofrece datos sobre todos los países y el tiempo en sus capitales. Puedes consultar más información en el{' '}
        <a href="https://javiweather.vercel.app" target="_blank" rel="noopener noreferrer">
          sitio del proyecto
        </a>.
        Permite obtener información sobre población, capital, idioma, bandera de cualquier país, así como obtener el tiempo actual en su capital. La aplicación recoge esta información de APIs externas.
      </span>
    ),
    image: 'Tiempo.jpg',
  },
  {
    title: 'VideoBackendApp',
    description: (
      <span>
        Aplicación para gestionar, organizar y validar películas de un usuario. Puedes ver más detalles en el{' '}
        <a href="https://videobackendapp.onrender.com/" target="_blank" rel="noopener noreferrer">
          sitio web del proyecto
        </a>.
        Permite registro de usuarios, almacenar películas en una base de datos, marcarlas como vistas/no vistas, y realizar búsquedas en bases de datos externas para añadir nuevos títulos y sus detalles a la colección personal. Para entrar en la aplicacion utiliza usuario: visitante / password: visitante
      </span>
    ),
    image: 'MiVideoteca.jpg',
  },
  {
    title: 'Los Mejores Blogs',
    description: (
      <span>
        Esta aplicación funciona a modo de red social en la que los usuarios publican y valoran los blogs que deseen. Puedes consultar más información en el{' '}
        <a href="https://blogslist.onrender.com" target="_blank" rel="noopener noreferrer">
          sitio del proyecto
        </a>.
        Permite que los usuarios compartan un listado de Blogs de interes. Para entrar en la aplicacion utiliza usuario: visitante / password: visitante
      </span>
    ),
    image: 'Blogs.jpg',
  },
  {
    title: 'Lingo',
    description: (
      <span>
        Pequeño juego en el que uno o dos jugadores deben adivinar una palabra oculta. Puedes consultar más información en el{' '}
        <a href="https://lingo-black.vercel.app/" target="_blank" rel="noopener noreferrer">
          sitio del proyecto
        </a>.
        Ingresa directamente en la pagina del juego y pulsa en el boton "Ver Instrucciones" para poder jugar.
      </span>
    ),
    image: 'Lingo.jpg',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>
        {/* Icono de proyecto con animación */}
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ display: 'inline-block', marginRight: '10px' }}
        >
          <GrProjects size={40} color="#4caf50" />
        </motion.div>
        Mis Proyectos
      </h1>

      {/* Animación para la introducción general */}
      <motion.div
        className="projects-introduction"
        initial={{ opacity: 0, y: 50 }} // Comienza opaca y desplazada hacia abajo
        animate={{ opacity: 1, y: 0 }}  // Desliza hacia arriba y se hace visible
        transition={{ duration: 1.2, ease: "easeOut" }} // Control de la velocidad y suavidad
      >
        <p>
          A continuación, te muestro algunos de los proyectos en los que he trabajado. Todos ellos comparten un enfoque en la creación de soluciones modernas y eficientes, 
          utilizando herramientas como <strong>React</strong> para el frontend, <strong>Node.js</strong> y <strong>Express</strong> para el backend, y 
          bases de datos como <strong>MongoDB</strong> y <strong>SQL</strong>. Cada proyecto está diseñado para proporcionar una experiencia de usuario intuitiva y funcional, 
          aprovechando APIs externas y aplicando principios de desarrollo ágil.
        </p>
      </motion.div>

      {/* Lista de proyectos */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <div>{project.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;