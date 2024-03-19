let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    if (amigo === '') {
        alert('Informar nome do amigo!');
        return;
    }
    if (amigos.includes(amigo)) {
        alert('Nome já adicionado!');
        return;
    }
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo);
    if (lista.innerText === '') {
        lista.innerText = amigo;
    } else {
        lista.innerText = lista.innerText + ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerText = '';

    for (let i = 0; i < amigos.length; i++) {
        let proximoAmigo = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += amigos[i] + ' --> ' + proximoAmigo + '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
