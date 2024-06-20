window.addEventListener('load' , comecar);

var comida ;
var globalComida = []
var id= 1;
var inp = document.querySelector("#comida").id

function comecar(){
    comida = document.querySelector("#comida");
    submit();
    input();
}

function submit(){
    var form = document.querySelector("form");
    form.addEventListener("submit", cadastro);

    function cadastro(evento){
        evento.preventDefault();
    }
}

function input(){
    comida.focus();
    comida.addEventListener("keyup", escreveu);

    function escreveu(evento){
         console.log(evento)
        if(evento.key == "Enter" && comida.value!=' '){
            insertName(evento.target.value);
        }
    }

    function insertName(newName) {
        globalComida.push(newName);
        //alert(globalComida)
        adicionar(newName);
    }

    function adicionar(novo){

          
        var dia = document.querySelector("#Dia").value
        var tabela =  null
        var linha = "<li id='id"+id+"'> <img src='exc.png' onclick='apagar("+id+")' class='apagar'> "+novo+"<img src='edit.png' onclick='editar("+id+")' class='editar'></li>"
        id++;
            //alert(dia)
        switch (dia){
            case "segunda":
                tabela = document.getElementById("segunda")
                tabela.innerHTML += linha
            break;
            case "terca":
                tabela = document.getElementById("terca")
                tabela.innerHTML += linha
            break;
            case "quarta":
                tabela = document.getElementById("quarta")
                tabela.innerHTML += linha
            break;
            case "quinta":
                tabela = document.getElementById("quinta")
                tabela.innerHTML += linha
            break;
            case "sexta":
                tabela = document.getElementById("sexta")
                tabela.innerHTML += linha
            break;
            case "sabado":
                tabela = document.getElementById("sabado")
                tabela.innerHTML += linha
            break;
            case "domingo":
                tabela = document.getElementById("domingo")
                tabela.innerHTML += linha
            break;
        }

        

    }

    

}
function apagar(index){
    id = "id" + index
    console.log(id) // somente para visualizar o valor do id que está chegando aqui
    document.getElementById(id).style.display = "none"
    var indice = index - 1;
    globalComida.splice(indice, 1)
}   

function editar(index){
    var divEditar = document.querySelector("#editarDiv").style.display ="block"
    editado = document.querySelector("#editado");

    editado.addEventListener("keyup", editou);

    function editou(evento){
        if(evento.key == "Enter" && editado.value!=' '){
            updateName(evento.target.value, index);
        }
    }

    function updateName(atualizar, index){
        indexFinal = "#id" + index
        divEditar = document.querySelector("#editarDiv").style.display ="none"

        var linhaAlterar = document.querySelectorAll(indexFinal)[0]
        var linha2 = "<li id='id"+index+"'> <img src='exc.png' onclick='apagar("+index+")' class='apagar'> " + atualizar + " <img src='edit.png' onclick='editar("+index+")' class='editar'></li>"
        console.log(atualizar)
        linhaAlterar.innerHTML = linha2

    }
}

//IMC

function imc(){
    var tabela = document.querySelectorAll("#tabela")[0]
    var divImc =  document.querySelectorAll("#divImc")[0]

    tabela.style.display = "none"
    divImc.style.display = "block"

}

function fechar(){
    var tabela = document.querySelectorAll("#tabela")[0]
    var divImc =  document.querySelectorAll("#divImc")[0]

    tabela.style.display = "block"
    divImc.style.display = "none"
}

function calcular(){
    var peso =  parseFloat((document.querySelectorAll("#peso")[0]).value)
    var altura =  parseFloat((document.querySelectorAll("#altura")[0]).value)

    var imc = peso /(altura * altura);
    var mensagem = document.querySelectorAll("#resultado")[0]

    mensagem.innerHTML = "" + imc.toFixed(2)

}
