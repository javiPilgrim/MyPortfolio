import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mi Portafolio</h1>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
