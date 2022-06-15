let ncartas, i, k, e1, e2;
let j=0;
let array=[];
let intervalo=[];

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

    i=0

    while (i<ncartas/2){
        array.push(`c${i}`);
        array.push(`c${i}`);
        i=i+1
    }

    i=ncartas

    while (i>0){
        k=Math.floor(Math.random()*i);
        intervalo.push(array[k]);
        array.splice(k,1);
        i=i-1;
    }

    i=0

    while (i<ncartas){
        carta=document.querySelector(".c")
        carta.classList.add(intervalo[i])
        carta.classList.remove("c")
        i=i+1
    }
}

iniciar()

function clicar(elemento){

    if (elemento.classList.contains("certo")==false && elemento.classList.contains("selecionar")==false){
        
        if (j==0){

            if (elemento.classList.contains("c0")){
                c1=0
            } else if (elemento.classList.contains("c1")){
                c1=1
            } else if (elemento.classList.contains("c2")){
                c1=2
            } else if (elemento.classList.contains("c3")){
                c1=3
            } else if (elemento.classList.contains("c4")){
                c1=4
            } else if (elemento.classList.contains("c5")){
                c1=5
            } else {
                c1=6
            }

            carta1=elemento
            carta1.classList.add("selecionar")
            j=1

        } else {

            if (elemento.classList.contains("c0")){
                c2=0
            } else if (elemento.classList.contains("c1")){
                c2=1
            } else if (elemento.classList.contains("c2")){
                c2=2
            } else if (elemento.classList.contains("c3")){
                c2=3
            } else if (elemento.classList.contains("c4")){
                c2=4
            } else if (elemento.classList.contains("c5")){
                c2=5
            } else {
                c2=6
            }
            
            //Se tiver acertado

            if (c1==c2){

                if (c1==0){
                    carta1=document.querySelector(".c0")
                    carta1.classList.add("cc0")
                    carta1.classList.remove("c0")
                    carta2=document.querySelector(".c0")
                    carta2.classList.add("cc0")
                    carta2.classList.remove("c0")
                } else if (c1==1){
                    carta1=document.querySelector(".c1")
                    carta1.classList.add("cc1")
                    carta1.classList.remove("c1")
                    carta2=document.querySelector(".c1")
                    carta2.classList.add("cc1")
                    carta2.classList.remove("c1")
                } else if (c1==2){
                    carta1=document.querySelector(".c2")
                    carta1.classList.add("cc2")
                    carta1.classList.remove("c2")
                    carta2=document.querySelector(".c2")
                    carta2.classList.add("cc2")
                    carta2.classList.remove("c2")
                } else if (c1==3){
                    carta1=document.querySelector(".c3")
                    carta1.classList.add("cc3")
                    carta1.classList.remove("c3")
                    carta2=document.querySelector(".c3")
                    carta2.classList.add("cc3")
                    carta2.classList.remove("c3")
                } else if (c1==4){
                    carta1=document.querySelector(".c4")
                    carta1.classList.add("cc4")
                    carta1.classList.remove("c4")
                    carta2=document.querySelector(".c4")
                    carta2.classList.add("cc4")
                    carta2.classList.remove("c4")
                } else if (c1==5){
                    carta1=document.querySelector(".c5")
                    carta1.classList.add("cc5")
                    carta1.classList.remove("c5")
                    carta2=document.querySelector(".c5")
                    carta2.classList.add("cc5")
                    carta2.classList.remove("c5")
                } else{
                    carta1=document.querySelector(".c6")
                    carta1.classList.add("cc6")
                    carta1.classList.remove("c6")
                    carta2=document.querySelector(".c6")
                    carta2.classList.add("cc6")
                    carta2.classList.remove("c6")
                }
                carta1.classList.add("certo")
                carta2.classList.add("certo")
            }

            carta1.classList.remove("selecionar")

            j=0

            //Por que nos numeros pares de acertos uma das cartas segue com a classe 'selecionar'?
        }
    }
}