let ncartas, i;

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