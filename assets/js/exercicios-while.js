function exercicio01() {
    // ✅Pedir 5 nomes de alunos.
    // ✅Usar uma variável indice começando em 0.
    // ✅Enquanto o indice for menor que 5:
    // ✅Pedir o nome do aluno com prompt.
    // ✅Mostrar um alert com "Aluno cadastrado: " + nome.
    // ✅Incrementar o indice.
    // ✅Ao final, mostrar um alert "Cadastro finalizado".

    let indice = 0;

    while (indice < 5) {
        let nomeAluno = prompt("Digite o nome do aluno");

        alert("Aluno cadastrado: " + nomeAluno);

        indice = indice + 1;
    }

    alert("Cadastro Finalizado");

}

function exercicio02() {
    // Pedir 4 cores favoritas.
    // Usar while com indice começando em 0.
    // Enquanto o indice for menor que 4:
    /// Pedir uma cor (ex: "Digite uma cor").
    /// Mostrar um alert com "Cor escolhida: " + cor.
    /// Incrementar o indice.
    // Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".

    let indice = 0;

    while (indice < 4) {
        let corFavorita = prompt("Digite uma cor");

        alert("Cor escolhida: " + corFavorita);

        indice = indice + 1;
    }

    alert("Obrigado por informar suas cores favoritas");

}

function exercicio03() {
    // Pedir 3 nomes de cidades que o usuário quer viajar.
    // Usar while com indice começando em 0.
    // Enquanto o indice for menor que 3:
    /// Pedir o nome da cidade.
    /// Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    /// Incrementar o indice.
    // Ao final, mostrar um alert "Planejamento de viagem concluído".

    let indice = 0;

    while (indice < 3) {
        let nomeCidade = prompt("Digite o nome da cidade")

        alert("Destino " + (indice + 1) + ": " + nomeCidade)

        indice = indice + 1;
    }

    alert("Planejamento da viagem concluído");

}

function exercicio04() {
    // Pedir 5 números inteiros.
    // Usar while com indice começando em 0.
    // Criar uma variável soma começando em 0.
    // Enquanto o indice for menor que 5:
    /// Pedir um número com prompt.
    /// Converter para inteiro (parseInt).
    /// Somar na variável soma.
    /// Incrementar o indice.
    //Ao final, mostrar um alert com "Soma total: " + soma.

    let soma = 0;
    let indice = 0;

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número inteiro"));

        soma = soma + numero;

        indice = indice + 1;
    }

    alert("Soma total: " + soma);

}

function exercicio05() {
    // Pedir 3 filmes favoritos.
    // Usar while com indice começando em 0.
    // Enquanto o indice for menor que 3:
    /// Pedir o nome do filme.
    /// Pedir o ano de lançamento.
    /// Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    /// Incrementar o indice.
    // Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".

    let indice = 0;

    while (indice < 3) {
        let nomeFilme = prompt("Digite o nome do filme");
        let anoLancamento = parseInt(prompt("Digite o ano de lançamento"));

        alert("Filme: " + nomeFilme + "\nLançamento: " + anoLancamento);

        indice = indice + 1;
    }

    alert("Lista de filmes cadastrada com sucesso")

}

function exercicio06() {
    // Solicitar 5 números utilizando enquanto
    // Apresentar a soma dos números
    // Apresentar a média dos números

    let soma = 0;
    let indice = 0;

    while (indice < 5) {
        let numero = parseFloat(prompt("Digite um número"));

        soma = soma + numero;

        indice = indice + 1;
    }

    const media = soma / 5;

    alert(
        "Soma: " + soma +
        "\nMédia: " + media
    );
}

function exercicio07() {
    // Solicitar o valor de 6 vendas
    // Apresentar o total das vendas
    // Calcular e apresenta 5% de comissão sobre total das vendas.

    let soma = 0;
    let indice = 0;

    while (indice < 6) {
        let valorVenda = parseFloat(prompt("Digite valor da venda"))

        soma = soma + valorVenda;

        indice = indice + 1;
    }

    let comissao = soma * 0.05;

    alert(
        "Valor total da venda: " + soma.toFixed(2) +
        "\nComissão: " + comissao.toFixed(2)
    );
}

function exercicio08() {
    // Solicitar 10 números
    // Apresentar se o número é par
    // Apresentar se o número é ímpar

    let indice = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número"));

        if (numero % 2 === 0) {
            alert("O número " + numero + " " + "é PAR");
        } else {
            alert("O número " + numero + " " + "é IMPAR");
        }

        indice = indice + 1;
    }
}

function exercicio09() {
    // Solicitar um número para o usuário
    // Apresentar a tabuada desse número utilizando while
    // Formato esperado:
    // 5 x 1 = 5
    // 5 x 2 = 10
    // ...
    // 5 x 10 = 50
    // O número(5) apresentado foi digitado pelo usuário, ou seja, deve apresentar a tabuada do número digitado

    let numero = parseInt(prompt("Digite um número para gerar a tabuada"));

    let indice = 1;

    while (indice <= 10) {
        alert(numero + " x " + indice + " = " + (numero * indice));

        indice = indice + 1;
    }
}

function exercicio10() {
    // Solicitar 10 números
    // Apresentar a quantidade de números pares
    // Apresentar a quantidade de números ímpares

    let pares = 0;
    let impares = 0;
    let indice = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número"));

        if (numero % 2 === 0) {
            pares = pares + 1;
        } else {
            impares = impares + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Quantidade de números pares: " + pares +
        "\nQuantidade de números ímpares: " + impares
    );
}

function exercicio11() {

}

function exercicio012() {

}

function exercicio13() {

}

function exercicio14() {

}

function exercicio15() {

}

function exercicio16() {

}

function exercicio17() {

}

function exercicio18() {

}

function exercicio19() {

}

function exercicio20() {

}

function exercicio21() {

}

function exercicio22() {

}

function exercicio23() {

}

function exercicio24() {

}

function exercicio25() {

}

function exercicio26() {

}

function exercicio27() {

}

function exercicio28() {

}

function exercicio29() {

}

function exercicio30() {

}

function exercicio31() {

}

function exercicio32() {

}

function exercicio33() {

}

function exercicio34() {

}

function exercicio35() {

}

function exercicio36() {

}

function exercicio37() {

}

function exercicio38() {

}

function exercicio39() {

}

function exercicio40() {

}

function exercicio41() {

}

function exercicio42() {

}

function exercicio43() {

}

function exercicio44() {

}

function exercicio45() {

}

function exercicio46() {

}

function exercicio47() {

}

function exercicio48() {

}

function exercicio49() {

}

function exercicio50() {

}