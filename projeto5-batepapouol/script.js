let i=0, nomeUsuario, mensagem;
let erroEntrada="sim";
let paraQuem="Todos";
let visibilidade="Público";

function entrarNaSala(){
    nomeUsuario=prompt("Qual é o seu nome?")
    /*
    let promise1 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",{name: nomeUsuario});
    promise1.then(sucessoEntrar);
    promise1.catch(erroEntrar);
    */
}

function sucessoEntrar(resp){
    alert("deu tudo certo");
    erroEntrada="não";
}

function erroEntrar(erro){
    alert("deu erro");
    if (erro.status==400){
        entrarNaSala();
    }
}

function inputOn(){
    /*
    Fazer uma funcao que deixe o texto do input como 'Escreva aqui...' quando não tiver nenhuma mensagem
    E que quando clicada fique sem nada escrito, pronto pra receber uma mensagem
        Se tiver escrito alguma coisa e desselecionar, a mensagem se mantem
        Se não tiver escrito nada e desselecionar, volta a aparecer 'Escreva aqui...'
        Se tiver escrito alguma coisa e enviar, o input continua selecionado mas apaga a mensagem que foi enviada
        Se nào tiver escrito nada e enviar, o input continua selecionado mas apaga a mensagem que foi enviada
    
    let input=document.querySelector("input")
    if (input.value==="" && i==0){
        alert("Selecionado");
        i=1
    }
    */
}

function abrirFecharMenuLateral(){
    validacao=document.querySelector(".telaLateral")

    if (validacao.classList.contains("escondido")){
        validacao.classList.remove("escondido")
        document.querySelector(".conteudo").classList.add(impedirScroll)
    } else {
        validacao.classList.add("escondido")
        document.querySelector(".conteudo").classList.remove(impedirScroll)
    }
}

function entrarSessao(){
    
    nomeUsuario=document.querySelector(".inputNomeUsuario").value
    if (nomeUsuario=="Luiz"){
        //na verdade, é se der promise.then
        document.querySelector(".telaEntrada").classList.add("escondido")
    } else {
        //na verdade, é se der promise.catch
        document.querySelector(".inputNomeUsuario").value=""
        document.querySelector(".mensagemErroNomeUsuario").innerHTML=`<h1>O nome de usuário já está em uso.</h1><h1>Por favor, digite outro nome e tente novamente.</h1>`
    }
    

}

function enviarMsg(){
    mensagem=document.querySelector(".textoMensagem").value
    alert(`Vai aparecer na tela a mensagem '${mensagem}'`)
    //axios.post("")
    //ultima etapa: apagar o texto que tava
    document.querySelector(".textoMensagem").value=""

}

function enviarMsgReservada(elemento){
    if (paraQuem!="Todos"){
        visibilidade=elemento.innerHTML;
        if (visibilidade=="Reservadamente"){
            document.querySelector(".msgReservada").innerHTML=`Enviando para ${paraQuem} (reservadamente)`
        }
    }
}

function escolherRemetente(opcao){
    
    opcao.innerHTML=opcao.innerHTML+"<div class='check'><img src='projeto5-batepapouol/img/check.svg' height='10px'/></div>"
    //opcao.innerHTML=opcao.innerHTML+`<div class="check"><img src="projeto5-batepapouol/img/logoUol.svg"/></div>`
}

