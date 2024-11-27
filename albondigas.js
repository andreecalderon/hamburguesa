function albondigas(){
    let div = document.createElement('div');
    div.className = "div-contenedor";

    let div1 = document.createElement('div');
    div1.className = "div-albondiga";
    div.appendChild(div1);
    
    let div2 = document.createElement('div');
    div2.className = "div-albondiga2";
    div.appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = "div-albondiga3"
    div.appendChild(div3);

    return (div)

}

export { albondigas }