hide=()=>{
    document.getElementById('HomeEN').className = 'hide';
    document.getElementById('Portfolio').className = 'hide';  
    document.getElementById('Contact').className = 'hide';
    document.getElementById('Indice').className = 'hide';
    document.getElementById('PortfolioES').className = 'hide';  
    document.getElementById('Contacto').className = 'hide';
    document.getElementById('englishnav').className = 'hide';
    document.getElementById('spanishnav').className = 'hide';
}
showHome=()=>{
    hide();    
    document.getElementById('englishnav').className = 'mostrarnav';
    document.getElementById('HomeEN').className = 'show';
}
showPortfolio=()=> {
    hide();
    document.getElementById('englishnav').className = 'mostrarnav';
    document.getElementById('Portfolio').className = 'show';
}

showContact=()=>{
    hide();    
    document.getElementById('englishnav').className = 'mostrarnav';
    document.getElementById('Contact').className = 'show';
}

mostrarIndice=()=>{
    hide();    
    document.getElementById('spanishnav').className = 'mostrarnav';
    document.getElementById('Indice').className = 'show';
}
mostrarPortfolio=()=>{
    hide();    
    document.getElementById('spanishnav').className = 'mostrarnav';
    document.getElementById('PortfolioES').className = 'show';
}
mostrarContacto=()=>{
    hide();    
    document.getElementById('spanishnav').className = 'mostrarnav';
    document.getElementById('Contacto').className = 'show';
}
spanish=()=>{
    const displayed=document.querySelector(".show");
    hide();
    document.getElementById('spanishnav').className = 'mostrarnav';
    if(displayed.id==="HomeEN")document.getElementById('Indice').className = 'show';
    else if(displayed.id==="Portfolio")document.getElementById('PortfolioES').className = 'show';
    else if(displayed.id==="Contact")document.getElementById('Contacto').className = 'show';
}
english=()=>{
    const displayed=document.querySelector(".show");
    hide();
    document.getElementById('englishnav').className = 'mostrarnav';
    if(displayed.id==="Indice")document.getElementById('HomeEN').className = 'show';
    else if(displayed.id==="PortfolioES")document.getElementById('Portfolio').className = 'show';
    else if(displayed.id==="Contacto")document.getElementById('Contact').className = 'show';
}