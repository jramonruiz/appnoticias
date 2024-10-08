import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Acerca_de from './Acerca_de';
import Ultimas_noticias from './Ultimas_noticias';
import Noticias_tecnologia from './Noticias_tecnologia';
import Noticias_entretenimiento from './Noticias_entretenimiento';
import Noticias_deportes from './Noticias_deportes';
import Noticias_ciencia from './Noticias_ciencia';
import Noticias_salud from './Noticias_salud';

import './estilo.css';

const RedirectToHome = () => {
    const history = useHistory();
  
    useEffect(() => {
      // Redirige a la página de inicio cuando se carga el componente
      history.push('/acerca_de');
    }, [history]);
  
    return null; // No renderiza nada
  };

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navbar-menu">
                        <li className="navbar-item"><Link to="/ultimas_noticias">Ultimas Noticias</Link></li>
                        <li className="navbar-item"><Link to="/noticias_tecnologia">Tecnologia</Link></li>
                        <li className="navbar-item"><Link to="/noticias_entretenimiento">Entretenimiento</Link></li>
                        <li className="navbar-item"><Link to="/noticias_deportes">Deportes</Link></li>
                        <li className="navbar-item"><Link to="/noticias_ciencia">Ciencia</Link></li>
                        <li className="navbar-item"><Link to="/noticias_salud">Salud</Link></li>
                        <li className="navbar-item"><Link to="/acerca_de">Acerca de</Link></li>
                    </ul>
                </nav>

                <Switch>
                    {/* Redireccionar desde la raíz */}
                    <Route exact path="/" component={RedirectToHome} />
                    <Route path="/ultimas_noticias" component={Ultimas_noticias} />
                    <Route path="/noticias_tecnologia" component={Noticias_tecnologia} />
                    <Route path="/noticias_entretenimiento" component={Noticias_entretenimiento} />
                    <Route path="/noticias_deportes" component={Noticias_deportes} />
                    <Route path="/noticias_ciencia" component={Noticias_ciencia} />
                    <Route path="/noticias_salud" component={Noticias_salud} />
                    <Route path="/acerca_de" component={Acerca_de} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;