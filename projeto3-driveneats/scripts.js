let prato;
let preco_prato;
let bebida;
let preco_bebida;
let sobremesa;
let preco_sobremesa;
let botao_pedido = document.querySelector(".menu-base .botao-pedir")

function EscolherPrato(escolha){

    const botaoclicado = document.querySelector(".prato .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        prato = document.querySelector(".prato .escolhido .escolha1").innerHTML
    } else {
        prato = ""
    }

    if (prato == "Miojo gourmet"){
        preco_prato=18.90
    } else if (prato=="Contra-file"){
        preco_prato=32.90
    } else if (prato=="Frango divino"){
        preco_prato=22.90
    } else {
        preco_prato=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }
}

function EscolherBebida(escolha){

    const botaoclicado = document.querySelector(".bebida .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        bebida = document.querySelector(".bebida .escolhido .escolha2").innerHTML
    } else {
        bebida = ""
    }

    if (bebida == "Refrigerante"){
        preco_bebida=3.90
    } else if (bebida=="Suco natural"){
        preco_bebida=6.90
    } else if (bebida=="Cerveja"){
        preco_bebida=4.90
    } else {
        preco_bebida=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }
}

function EscolherSobremesa(escolha){

    const botaoclicado = document.querySelector(".sobremesa .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        sobremesa = document.querySelector(".sobremesa .escolhido .escolha3").innerHTML
    } else {
        sobremesa = ""
    }

    if (sobremesa == "Salada de frutas"){
        preco_sobremesa=4.50
    } else if (sobremesa=="Brigadeiro"){
        preco_sobremesa=2.50
    } else if (sobremesa=="Pudim"){
        preco_sobremesa=5.90
    } else {
        preco_sobremesa=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }
}

function prosseguir(){
    if (botao_pedido.innerHTML == "Fazer o pedido"){
        document.querySelector(".escolhas-confirmacao .prato").innerHTML=prato
        document.querySelector(".escolhas-confirmacao .preco_prato").innerHTML=preco_prato.toFixed(2).replace(".",",")
        document.querySelector(".escolhas-confirmacao .bebida").innerHTML=bebida
        document.querySelector(".escolhas-confirmacao .preco_bebida").innerHTML=preco_bebida.toFixed(2).replace(".",",")
        document.querySelector(".escolhas-confirmacao .sobremesa").innerHTML=sobremesa
        document.querySelector(".escolhas-confirmacao .preco_sobremesa").innerHTML=preco_sobremesa.toFixed(2).replace(".",",")
        preco_total=preco_prato+preco_bebida+preco_sobremesa
        document.querySelector(".escolhas-confirmacao .preco_total").innerHTML="R$ "+preco_total.toFixed(2).replace(".",",")
        document.querySelector(".tela-final").classList.remove("ocultar")
    }
}

function cancelar(){
    document.querySelector(".tela-final").classList.add("ocultar")
}

function pedir(){
    const nome=prompt("Para finalizar o pedido precisamos de 2 informações. Qual é o seu nome?");
    const endereco=prompt("Qual é o endereço de entrega?");

    let msg=`Olá, gostaria de fazer o pedido: \n - Prato: ${prato}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesa}\n Total: R\$ ${preco_total.toFixed(2)}\n \n Nome: ${nome}\n Endereço: ${endereco}`;
    msg=window.encodeURIComponent(msg);

    //Colocar aqui o numero do celular do restaurante
    celular = 5521999999999

    let site=`https://wa.me/${celular}?text=${msg}`;

    alert("Obrigado pelo pedido, em até 6 minutos estaremos entregando na sua porta. Bom apetite! :)")

    window.open(site);
    
}