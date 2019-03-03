import React, { Component } from 'react';
import Buscador from './components/Buscador';


class App extends Component {

  state = {
    termino: ''
  }

  consultarApi = () => {
    console.log('consultar api');
  }

  busquedaPersonajes = (termino) => {
    this.setState({
      termino
    }, ()=>{
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Busca un personaje</p>
                <Buscador
                 busquedaPersonajes={this.busquedaPersonajes} />
            </div>

      </div>
    );
  }
}

export default App;
