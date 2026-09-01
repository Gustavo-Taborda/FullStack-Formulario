let NameInput = document.getElementById("nomeIpt");
let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado");

let camposNotas = [
    document.getElementById("nota1"),
    document.getElementById("nota2"),
    document.getElementById("nota3"),
    document.getElementById("nota4")
];

camposNotas.forEach(function(campo) {
    campo.addEventListener("input", function() {
        Calcular();
    });
});

function Media(array){
    return ((array[0] + array[1] + array[2] + array[3]) / 4);
}

function Result(media){
    if(media >= 6){
        return "Aprovado";
    }else{
        if (media >=2 && media < 6){
            return "Exame";
        }else{
            return "Reprovado";
        }
    }
}

function Calcular(){
    let nameValue = NameInput.value;
    let notas = [];
    camposNotas.forEach(function(campo) {
        notas.push(parseFloat(campo.value) || 0);
    });

    let media = Media(notas);
    
    resultado.textContent = "Média: " + media.toFixed(2) + " - Resultado: " + Result(media);
    
    localStorage.setItem("media", media.toFixed(2));
    localStorage.setItem("resultado", Result(media));
    localStorage.setItem("nomeLocal", nameValue);
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o navegador de recarregar/navegar sozinho
    Calcular();
    window.location.href = "result.html"; // redireciona para a página Resultado.html
});