// Importar hojas de estilo 

import './styles/paragraphLink/paragraph-link.css'
import PropTypes from 'prop-types';





// Los props : comunican los componenetes padres con los compnetes hijos . 

const ParagraphLink = ( {href, color, children} )=>{ //{ clave;valor, href: ""}
    //console.log (props); 
    
    
    
    
    const myParagraph = 
    <>
        <a 
            className = "color-anchor"
            style= { {color: color}} 
            href= { href}
            target = "_blank"   
        >

        <p className= "content"> {children }</p>
        </a>
        </>

        return myParagraph;

}; 

ParagraphLink.propTypes = {
    href : PropTypes.string.isRequired
}


export default ParagraphLink; // exportacion 

/*
Desestructuracion 
const[ varA, varB]= [ 23, 45];

cosnt {varC, varD } = { varC, varF, varD}

*/