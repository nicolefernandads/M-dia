function media(){

    var dado1 = parseInt(valor1.value)
    var dado2 = parseInt(valor2.value)
    var dado3 = parseInt(valor3.value)
    var dado4 = parseInt(valor4.value)

    var mediatotal =(dado1 + dado2 + dado3 + dado4) /4
    alert('o resultado é' + mediatotal)
}


function limpar(){
    document.getElementById('valor1').value=("");
    document.getElementById('valor2').value=("");
    document.getElementById('valor3').value=("");
    document.getElementById('valor4').value=("");

} 
