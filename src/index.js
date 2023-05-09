import React from 'react';
import ReactDOM from 'react-dom/client';
import  P from './components/paragraphLink/ParagraphLink';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <P href ="https://http.cat/"  color ="red">Pagina gatitos http </P> 
    <P href ="https://youtube.com"  color ="blue"> Pagina Youtube </P>
    <P href ="https://linkedin.com" color ="pink">Pagina LinkedIn </P>
    <P> CH26 </P>
  </React.StrictMode>


);


