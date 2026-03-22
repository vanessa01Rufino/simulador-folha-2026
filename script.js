function calcular() {
    let salario = parseFloat(document.getElementById("salario").value);

    let inss = 0;

    // INSS progressivo
    if (salario <= 1621) {
        inss = salario * 0.075;
    } 
    else if (salario <= 2902.84) {
        inss = (1621 * 0.075) +
               ((salario - 1621) * 0.09);
    } 
    else if (salario <= 4354.27) {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((salario - 2902.84) * 0.12);
    } 
    else {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((4354.27 - 2902.84) * 0.12) +
               ((salario - 4354.27) * 0.14);

        if (inss > 988.09) {
            inss = 988.09;
        }
    }

    let base = salario - inss;
    let irrf = 0;
    let mensagem = "";

    // IRRF
    if (base > 5000) {
        irrf = (base - 5000) * 0.275;
    } else {
        mensagem = "Você está isento de Imposto de Renda em 2026!";
    }

    let liquido = salario - inss - irrf;

    // Exibir
    document.getElementById("inss").value = inss.toFixed(2);
    document.getElementById("irrf").value = irrf.toFixed(2);
    document.getElementById("liquido").innerText = liquido.toFixed(2);
    document.getElementById("mensagem").innerText = mensagem;
}

function limpar() {
    document.getElementById("salario").value = "";
    document.getElementById("inss").value = "";
    document.getElementById("irrf").value = "";
    document.getElementById("liquido").innerText = "0.00";
    document.getElementById("mensagem").innerText = "";
}