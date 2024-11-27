function pan(){

    let div = document.createElement('div');
    div.className = "div-pan"
    


    let divSombra = document.createElement('div');  
    divSombra.className = "sombra-pan";
    
    div.appendChild(divSombra); 
    return (div)
}

export { pan }