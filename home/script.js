//add card de comentario
function add(json) {
    let corpo = document.querySelector(".corpo")
    document.querySelector(".corpo").querySelectorAll(".btns").forEach(e => {
        e.remove()
    })

    json.forEach(e => {
        console.log(e.usuario.nome)
        let card = document.createElement("div")
        let btns = document.createElement("div")
        btns.setAttribute("id", "btns")
        card.className = "btns"
        btns.float = "left"
        card.innerHTML = e.comentario

        let excluir = document.createElement("img")
        excluir.className = "excluir"
        excluir.textalign = "left"
        excluir.src = "../assets/trash.png"
        excluir.style.width = "20px"
        excluir.style.height = "20px"
        excluir.addEventListener("click", () => {
            card.remove();
        });
        card.appendChild(excluir)
        corpo.appendChild(card)
    })

    // document.querySelectorAll(".btns").forEach((item, index) => {
    //     item.innerHTML = json[index].usuario.nome;
    //     item.innerHTML = json[index].comentario;

    // })
}

function chamarComentario() {
    console.log("oi")
    async function get() {
        let item = await fetch("http://localhost:7000/comentario");
        let resp = await item.json();
        return resp;
    }
    get().then(resp => {
        add(resp)
    })
}

fetch("rs")
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        data.forEach(x => {
            generateLivro(x);
        })
    })
    .catch(err => {
        console.warn(err);
    });

function generateLivro(obj) {
    let teste = document.querySelector(".model_tabela").cloneNode(true);
    teste.classList.remove("model");

    teste.querySelectorAll("td")[0].innerHTML = obj.nome_livro;
    teste.querySelectorAll("td")[1].innerHTML = obj.genero;
    teste.querySelectorAll("td")[2].innerHTML = obj.escritor;

    document.querySelector("#tabela>thead").appendChild(teste);
}

document.querySelectorAll(".model_tabela").forEach(x => {
    x.style.display = "none";
});

function filtrarUsuario() {
    let input = document.getElementById("pesquisar").value.toLowerCase();

    document.querySelectorAll(".model_user").forEach(x => {
        coluna = x.querySelectorAll("td")[0].innerHTML.toLowerCase();

        if (coluna.includes(input)) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    if (input == "") {
        document.querySelectorAll(".model_tabela").forEach(x => {
            x.style.display = "none";
        });
    }
}

function filtrar() {
    let input = document.getElementById("txtColuna1").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[0].innerHTML.toLowerCase();

        if (coluna.includes(input)) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    if (input == "") {
        document.querySelectorAll(".model_tabela").forEach(x => {
            x.style.display = "none";
        });
    }
}

function filtrarGenero() {
    let input = document.getElementById("txtColuna2").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[1].innerHTML.toLowerCase();

        if (coluna.includes(input)) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    if (input == "") {
        document.querySelectorAll(".model_tabela").forEach(x => {
            x.style.display = "none";
        });
    }
}

function filtrarEscritor() {
    let input = document.getElementById("txtColuna3").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[2].innerHTML.toLowerCase();

        if (coluna.includes(input)) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    if (input == "") {
        document.querySelectorAll(".model_tabela").forEach(x => {
            x.style.display = "none";
        });
    }
}

document.getElementById("add").addEventListener("click", () => {
    fazerComentario();
})

async function fazerComentario() {
    let data = {
        comentario: document.getElementById("compromisso").value,
        id_usuario: JSON.parse(localStorage.getItem("userdata")).id
    }
    fetch("http://localhost:7000/comentario", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
    chamarComentario()
}

function handleLogoutClick() {
    AuthActions.logout().then(() => {
        window.location.reload();
    });
}

chamarComentario()

async function loadCapas() {
    fetch("http://localhost:7000/livro/")
    .then(resp => { return resp.json()})
    .then(data => {
        data.forEach((item, index) => {
            capa[index].src = item.capa;
            capa[index].parentNode.addEventListener("click", () => {
                // console.log("../dadoslivro/index.html?id="+item.id)
                window.location.href = "../home/index.html?id="+item.id
            })
        })
    })
}

function generateCapas(data) {
    localStorage.setItem('ex1', JSON.stringify);
    imgCapa = JSON.parse(localStorage.getItem('userdata'));
    
    albumdetails.innerHTML = userData;
}

function init() {
    loadCapas();
    livros_carrossel();
}

(init) ();

function livros_carrossel(){
    async function loadLivros(){
        let get = await fetch("http://localhost:7000/livro/")
        let resp = await get.json();
        return resp
    }
    loadLivros().then(resp=>{
        for(let a=0; a< (resp.length > 4 ? 5 : resp.length); a++){
            let data=resp[(Math.floor((Math.random() * resp.length) + 0)).toFixed(0)]
            let model = document.querySelector(".item").cloneNode(true);
            model.querySelector("#imagem").src = data.capa
            model.addEventListener("click", () => {
                window.location.href = `../dadoslivro/index.html?id=${data.id}`
            })
            model.classList.remove("model")
            document.getElementById("carousel").appendChild(model)
        }
    })
}

function handleLogoutClick() {
        localStorage.clear();
        AuthActions.logout().then(() => {
        window.location.reload();
    });
}