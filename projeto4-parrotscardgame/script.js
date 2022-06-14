let ncartas, i;
let j=0;

function iniciar(){

    ncartas=prompt("Com quantas cartas você quer jogar?")

    while (ncartas % 2 !== 0 || ncartas < 4 || ncartas > 14){
        ncartas=prompt("Por favor, escolha um número par entre 4 e 14. Com quantas cartas você quer jogar?");
    }

    i=ncartas;

    while ((i-4)>0){
        document.querySelector(".esconder").classList.remove("esconder")
        document.querySelector(".esconder").classList.remove("esconder")
        i=i-2
    }

}
iniciar()

function clicar(elemento){

    if ("elemento selecionado não tem a classe certo"){
        if ("elemento selecionado não tem a classe selecionado")
            if (j==0){
                elemento.classList.add("selecionar")
                j=1
            } else {
                if("duas cartas sao iguais"){
                    target=document.querySelector("selecionar")
                    target.classList.add("certo")
                    target.classList.remove("selecionar")
                    target=document.querySelector("selecionar")
                    target.classList.add("certo")
                    target.classList.remove("selecionar")
                } else {
                    target=document.querySelector("selecionar")
                    target.classList.remove("selecionar")
                    target=document.querySelector("selecionar")
                    target.classList.remove("selecionar")
                }
                j=0
            }
        }
    } 
}