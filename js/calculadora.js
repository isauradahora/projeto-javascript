function somar() {
    const numero1 = parseFloat(document.getElementById("numero1Soma").value);
    const numero2 = parseFloat(document.getElementById("numero2Soma").value);
    // evite mexer no código acima!
    
    // Realizar a soma
    const resultado = numero1 + numero2;

    // Mostrar o resultado da operação
    document.getElementById("resultadoSoma").innerHTML = resultado;
  
    /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
    Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
    document.getElementById("resultadoSoma").innerHTML = resultado;
}

function subtrair() {
    const numero1 = parseFloat(document.getElementById("numero1Sub").value);
    const numero2 = parseFloat(document.getElementById("numero2Sub").value);
    // evite mexer no código acima!
    
    // Realizar a subtração
    const resultado = numero1 - numero2;
    
    // Mostrar o resultado da operação
    document.getElementById("resultadoSub").innerHTML = resultado;

    /* use as constantes numero 1 e numero 2 e realize a subtração entre elas.
        Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
    document.getElementById("resultadoSub").innerHTML = resultado;
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1Mult").value);
    const numero2 = parseFloat(document.getElementById("numero2Mult").value);
    // evite mexer no código acima!

    // Realizar a multiplicação
    const resultado = numero1 * numero2;
    
    // Mostrar o resultado da operação
    document.getElementById("resultadoMult").innerHTML = resultado;

    /* use as constantes numero 1 e numero 2 e realize a multiplicação entre elas.
        Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
    document.getElementById("resultadoMult").innerHTML = resultado;
}

function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1Div").value);
    const numero2 = parseFloat(document.getElementById("numero2Div").value);
    // evite mexer no código acima!

    // Verificar se o divisor (numero2) é diferente de zero para evitar divisão por zero
    if (numero2 !== 0) {
        // Realizar a divisão
        const resultado = numero1 / numero2;
        
        // Mostrar o resultado da operação
        document.getElementById("resultadoDiv").innerHTML = resultado;
    } else {
        // Se o divisor for zero, mostrar uma mensagem de erro
        document.getElementById("resultadoDiv").innerHTML = "Erro: Divisão por zero";
    }

    /* use as constantes numero 1 e numero 2 e realize a divisão entre elas.
        Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
    document.getElementById("resultadoDiv").innerHTML = resultado;
}