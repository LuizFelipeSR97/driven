//Depois tirar o "escondido" do telaEntrada

let i=0, j=0, nomeUsuario, mensagem, visibilidade;
let erroEntrada="sim";
let paraQuem="Todos";


function entrarSessao(){
    
    nomeUsuario=document.querySelector(".inputNomeUsuario").value;
    const promise1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{name: nomeUsuario});
    promise1.then(sucessoEntrar);
    promise1.catch(erroEntrar);
    paraQuem="Todos";
    visibilidade="Público"
}

function sucessoEntrar(sucessoEntrar){
    document.querySelector(".telaEntrada").classList.add("escondido")
    setInterval(manterConexao,5000)
    buscarMensagens();
    setInterval(buscarMensagens,3000);
}

function erroEntrar(erroEntrar){
    document.querySelector(".mensagemErroNomeUsuario").innerHTML=`<h1>O nome '${nomeUsuario}' já está em uso.</h1><h1>Por favor, digite outro nome e tente novamente.</h1>`
    document.querySelector(".inputNomeUsuario").value=""
}

function manterConexao(){
    promiseManterConexao=axios.post("https://mock-api.driven.com.br/api/v6/uol/status",{name: nomeUsuario})
    promiseManterConexao.catch(manterConexao)
}

function buscarMensagens(){
    const promiseMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promiseMsg.then(processarRespostaMsg);
    const promiseMembros = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
    promiseMembros.then(processarRespostaMembros);
}

function processarRespostaMsg(resp){
    renderizarMensagens(resp.data);
}

function processarRespostaMembros(resp){
    renderizarMembros(resp.data);
}

function renderizarMensagens(mensagens){
    document.querySelector(".telaMensagens .conteudo").innerHTML=""
    for (i==0; i<mensagens.length; i++) {
        if (mensagens[i].type==="status"){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<span class="caixaMsg entrouSaiu">
            <span class=h1>(${mensagens[i].time})</span><span class=h2>${mensagens[i].from}</span><span class=h3>${mensagens[i].text}</span>
          </span>`
        } else if (mensagens[i].type==="message"){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<span class="caixaMsg">
            <span class=h1>(${mensagens[i].time})</span><span class=h2>${mensagens[i].from}</span><span class=h3>para</span><span class=h2>${mensagens[i].to}:</span><span class=h3>${mensagens[i].text}</span>
          </span>`
        } else if (mensagens[i].type==="private_message" && (mensagens[i].to===nomeUsuario || mensagens[i].from===nomeUsuario )){
            document.querySelector(".telaMensagens .conteudo").innerHTML+=`<div class="caixaMsg reservado">
            <h1>(${mensagens[i].time})</h1><h2>${mensagens[i].from}</h2><h3>reservadamente para</h3><h2>${mensagens[i].to}:</h2><h3>${mensagens[i].text}</h3>
          </div>`
        }
    }
    document.querySelector(".telaMensagens .conteudo").innerHTML+=`<div class="preencherEspaco"></div>`
    document.querySelector(".telaMensagens .conteudo").lastChild.scrollIntoView()
}

function renderizarMembros(membros){
    
    
    if (paraQuem=="Todos"){
        document.querySelector(".menuLateral .paraQuem").innerHTML=`<div class='pessoa' onclick='escolherDestinatario(this)'><img src="projeto5-batepapouol/img/iconMembros.svg" height="15px"/><h1>Todos</h1><img src="projeto5-batepapouol/img/check.svg" height="10px" class="check mostrarCheck"/></div>`
    } else {
        document.querySelector(".menuLateral .paraQuem").innerHTML=`<div class='pessoa' onclick='escolherDestinatario(this)'><img src="projeto5-batepapouol/img/iconMembros.svg" height="15px"/><h1>Todos</h1><img src="projeto5-batepapouol/img/check.svg" height="10px" class="check"/></div>`
    }
    for (i=0; i<membros.length; i++) {
        if (membros[i].name==paraQuem){
            document.querySelector(".menuLateral .paraQuem").innerHTML+=`<div class='pessoa' onclick='escolherDestinatario(this)'><img src="projeto5-batepapouol/img/iconMembros.svg" height="15px"/><h1>${membros[i].name}</h1><img src="projeto5-batepapouol/img/check.svg" height="10px" class="check mostrarCheck"/></div>`
        } else {
            document.querySelector(".menuLateral .paraQuem").innerHTML+=`<div class='pessoa' onclick='escolherDestinatario(this)'><img src="projeto5-batepapouol/img/iconMembros.svg" height="15px"/><h1>${membros[i].name}</h1><img src="projeto5-batepapouol/img/check.svg" height="10px" class="check"/></div>`
        }
    }
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
    if (visibilidade==="Público"){
        msgDigitada={
            from: nomeUsuario,
            to: paraQuem,
            text: mensagem,
            type: "message"
        }
    } else if (visibilidade==="Reservadamente"){
        msgDigitada={
            from: nomeUsuario,
            to: paraQuem,
            text: mensagem,
            type: "private_message"
        }
    } 
    const promiseMsgDigitada=axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",msgDigitada)
    promiseMsgDigitada.then(document.querySelector(".textoMensagem").value="")
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
        document.querySelector(".mostrarCheck2").classList.remove("mostrarCheck2");
        opcao.lastElementChild.classList.add("mostrarCheck2");
        visibilidade="Reservadamente";
    }
}