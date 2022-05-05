const escrita = document.querySelector('#escrita');

var paramsBusca = new URLSearchParams(location.search);

async function loadCapas() {
    fetch("http://localhost:7000/livro/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let capa = document.querySelectorAll('.capa');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                capa[index].src = item.capa;
                nome_livro[index] = item.nome_livro;
                let title = document.querySelector(".um").querySelectorAll("h4")
                title[0].innerHTML = item.nome_livro
                title[1].innerHTML = item.escritor
                title[2].innerHTML = item.genero
                document.getElementById("puxarTexto").innerHTML = item.escrita
            })
        })
}

function generateCapas(data) {

    localStorage.setItem('ex1', JSON.stringify);
    imgCapa = JSON.parse(localStorage.getItem('userdata'));

    livro.innerHTML = userdata;
}

function init() {
    loadCapas();
    puxarTextos();
}

(init) ();

function handleLogoutClick() {
    localStorage.clear();
    AuthActions.logout().then(() => {
    window.location.reload();
});
}