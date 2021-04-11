import React from 'react';
import Primeiro from './Components/Primeiro';
import Card from './Components/layout/Card';
import ComFilhos from './Components/ComFilhos';
import ComParametros from './Components/ComParametro';
import Repeticao from './Components/Repeticao';
import './App.css';

export default props => (
    <div className="App">
        
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>

        <Card titulo="Repeticao">
            <Repeticao></Repeticao>
         
        </Card>




        <Card titulo="Componentes com Filhos">
         <ComFilhos>
            <ul>
             <li>Ana</li>
             <li>Bia</li>
             <li>Carlos</li>
             <li>Daniel</li>
            </ul>
          </ComFilhos>
        </Card>

        <Card titulo ="Componentes com Paramentros">
            <ComParametros titulo="Esse é um titulo" subtitulo="Esse é o subtitulo"></ComParametros>,
            <ComParametros titulo="Oi" subtitulo="Tudo Bem ?"></ComParametros>
        </Card>
    </div>
)