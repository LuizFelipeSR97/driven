//Depois tirar o "escondido" do telaEntrada

let i=0, nomeUsuario, mensagem;
let erroEntrada="sim";
let paraQuem="Todos";
let visibilidade="Público";


function entrarSessao(){
    
    nomeUsuario=document.querySelector(".inputNomeUsuario").value
    const promise1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{name: nomeUsuario})
    promise1.then(sucessoEntrar)
    promise1.catch(erroEntrar)

}

function sucessoEntrar(sucessoEntrar){
    document.querySelector(".telaEntrada").classList.add("escondido")
}

function erroEntrar(erroEntrar){
    document.querySelector(".mensagemErroNomeUsuario").innerHTML=`<h1>O nome '${nomeUsuario}' já está em uso.</h1><h1>Por favor, digite outro nome e tente novamente.</h1>`
    document.querySelector(".inputNomeUsuario").value=""
}

function buscarMensagens(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessa.then(processarResposta)
}

//buscarMensagens();

function processarResposta(resp){
    renderizarMensagens(resp.data);
    setTimeout(buscarMensagens,3000);
}

function renderizarMensagens(mensagens){
    for (i==0; i<mensagens.length; i++) {
        if (mensagens[i].type==="status"){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<div class="caixaMsg entrouSaiu">
            <h1>(${mensagens[i].time})</h1><h2>${mensagens[i].from}</h2><h3>${mensagens[i].text}</h3>
          </div>`
        } else if (mensagens[i].type==="message"){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<div class="caixaMsg">
            <h1>(${mensagens[i].time})</h1><h2>${mensagens[i].from}</h2><h3>para</h3><h2>${mensagens[i].to}:</h2><h3>${mensagens[i].text}</h3>
          </div>`
        } else if (mensagens[i].type==="private_message"){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<div class="caixaMsg reservado">
            <h1>(${mensagens[i].time})</h1><h2>${mensagens[i].from}</h2><h3>reservadamente para</h3><h2>${mensagens[i].to}:</h2><h3>${mensagens[i].text}</h3>
          </div>`
        }
    }
    console.log(mensagens)
}

function abrirFecharMenuLateral(){
    validacao=document.querySelector(".telaLateral")

    if (validacao.classList.contains("escondido")){
        validacao.classList.remove("escondido")
    } else {
        validacao.classList.add("escondido")
    }
}

function enviarMsgReservada(){
    if (visibilidade==="Reservadamente"){
        document.querySelector(".msgReservada").innerHTML=`Enviando para ${paraQuem} (reservadamente)`
    } else {
        document.querySelector(".msgReservada").innerHTML=""
    }
}

function enviarMsg(){
    mensagem=document.querySelector(".textoMensagem").value
    alert(`Vai aparecer na tela a mensagem '${mensagem}'`)
    //axios.post("")
    //ultima etapa: apagar o texto que tava
    document.querySelector(".textoMensagem").value=""

}

function escolherDestinatario(opcao){
    document.querySelector(".mostrarCheck").classList.remove("mostrarCheck")
    opcao.lastElementChild.classList.add("mostrarCheck")
    paraQuem=(opcao.lastElementChild.previousElementSibling.innerHTML)
    if (paraQuem=="Todos" && visibilidade==="Reservadamente"){
        document.querySelector(".reservadamente").classList.remove("mostrarCheck2");
        document.querySelector(".publico").classList.add("mostrarCheck2");
        visibilidade="Público";
    }
}

function escolherVisibilidade(opcao){
    if (paraQuem!=="Todos"){
        document.querySelector(".mostrarCheck2").classList.remove("mostrarCheck2")
        opcao.lastElementChild.classList.add("mostrarCheck2")
        visibilidade=(opcao.lastElementChild.previousElementSibling.innerHTML)
    }
}

//Funcoes para executarem ao iniciar

//buscarMensagens();