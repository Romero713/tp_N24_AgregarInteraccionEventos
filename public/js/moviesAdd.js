window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseleave', (e) => {
        titulo.style.color = 'red'

    })

    titulo.addEventListener('mouseleave', (e) => {
        titulo.style.color = 'black'
    })

    let $ = (e) => document.querySelector(e)

    let inputTitulo = $('#titulo')
    console.log('Movies Add');

    let palabra = []
    inputTitulo.addEventListener('keypress', (e) => {
        /* console.log(e.key) */
        let letras = e.key

        palabra.push(letras)

        
        if (palabras[6] === 'o' || palabra[6] === 'O') {
            palabra = []
            alert('SECRETO MÁGICOO!')
        } else if (palabras[5] === 't' || palabra[5] === 'T') {
            console.log(palabra);
        } else if (palabras[4] === 'e' || palabra[4] === 'E') {
            console.log(palabra);
        } else if (palabras[3] === 'r' || palabra[3] === 'R') {
            console.log(palabra);
        } else if (palabras[2] === 'c' || palabra[2] === 'C') {
            console.log(palabra);
        } else if (palabras[1] === 'e' || palabra[1] === 'E') {
            console.log(palabra);
        } else if (palabras[0] === 's' || palabra[0] === 'S') {
            console.log(palabra);
        } else {
            palabra = []
        }
        console.log(palabra);

    })

}








