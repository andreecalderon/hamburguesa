function lechuga(){
    let div = document.createElement('div');
    div.className = "lechuga1"

    let div1 = document.createElement('div');
    div1.className = "sombra-lechuga"
    div.appendChild(div1)

    return (div)
}

export { lechuga }