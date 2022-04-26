
var  percorrida = document.getElementById("percorrida");
var  radar = document.getElementById("radar");
var resultado = document.getElementById("result")

function calcular(){
    let velocidade = parseInt(percorrida.value);

    let limite = parseInt(radar.value);

   

    if( velocidade <= limite){

    resultado.innerHTML= "Voce  passou a " + "  "+ velocidade + "KM/H," + " "+ "Dentro do limite de velocidade! "
    resultado.style.color = "white"
        

    } else{
        resultado.innerHTML= "Voce  passou a " + "  "+ velocidade + "KM/H," + " "+ "Ultrapassou o limite de velocidade, será multado!  "
    resultado.style.color = "white"
    }
}













