import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Acerca_de from './Acerca_de';
import Ultimas_noticias from './Ultimas_noticias';

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
                        <li className="navbar-item"><Link to="/acerca_de">Acerca_de</Link></li>
                        <li className="navbar-item"><Link to="/ultimas_noticias">Ultimas Noticias</Link></li>
                    </ul>
                </nav>

                <Switch>
                    {/* Redireccionar desde la raíz */}
                    <Route exact path="/" component={RedirectToHome} />
                    <Route path="/acerca_de" component={Acerca_de} />
                    <Route path="/ultimas_noticias" component={Ultimas_noticias} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;