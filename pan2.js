function pan2() {
    let div = document.createElement('div');
    div.className = "div-pan2"

    let div2 = document.createElement('div');
    div2.className = "sombra-panito"
    div.appendChild(div2)

    return (div)
}

export { pan2 }