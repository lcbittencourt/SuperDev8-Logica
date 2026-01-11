function exemploVariaveisTexto(){
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";

    // concatenando a variavel produto1 com espaço e depois com produto2
    const produtos = produto1 + " " + produto2;
    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro(){
    const numero1 = 18;
    const numero2 = 147;

    // const soma = 18 + 147; => 165
    // + da linha abaico ele está fazendo uma soma
    const soma = numero1 + numero2;

    // + da linha abaixo ele está fazendo uma concatenação
    alert("Soma: " + soma);
}

function exemploVariaveisFloat(){
    const quantidadeHoras = 10;
    const valorHora = 2.30;

    const salarioBruto = quantidadeHoras * valorHora;
    alert("Salario bruto: " + salarioBruto);

}

function exemploVariaveisBoollean(){
    // let: permite reatribuir p valor da variável depois de criada.
    // const: não permite reatribuir o valor, apenas a leitura (o vínculo é constante)

    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis(){
    const destino = "Maceió";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuário finalizou a compra
    finalizadaCompra = true;

    alert(
        "Destino: " + destino + 
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço Diária: " + precoDiaria +
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$ " + valorTotal
    );
}

function exercicioPokemon(){
    const nome = "Zoroark";
    const numero = 571;
    const descricao = "Pokémon tipo noturno, especialista em ilusoes";
    const altura = 1.6;
    const peso = 81.1;
    const categoria = "Raposa";
    const habilidade = "Ilusao";

    const calcImc = peso / (altura * altura);

    alert(
        "Nome: " + nome +
        "\nNúmero: " + numero +
        "\nDescrição: " + descricao +
        "\nAltura: " + altura +
        "\nPeso: " + peso +
        "\nCategoria: " + categoria +
        "\nHabilidade: " + habilidade +
        "\nIMC: " + calcImc
    );
}