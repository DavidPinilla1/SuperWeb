hide=()=>{
    document.getElementById('Home').className = 'hide';
    document.getElementById('Portfolio').className = 'hide';  
    document.getElementById('Contact').className = 'hide';
}
showPortfolio=()=> {
    hide();
    document.getElementById('Portfolio').className = '';
}
 showHome=()=>{
    hide();
    document.getElementById('Home').className = '';
}
showContact=()=>{
    hide();
    document.getElementById('Contact').className = '';
}