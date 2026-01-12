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
    // Solicitar 4 notas de um aluno utilizando enquanto
    // Calcular a média das notas
    // Apresentar a média
    // Se a média for maior ou igual a 7 apresentar Aprovado
    // Senão apresentar Reprovado

    let situacaoAluno = 0;
    let soma = 0;
    let media = 0;
    let indice = 0;

    while (indice < 4) {
        let nota = parseFloat(prompt("Digite a nota do aluno"));

        soma = soma + nota;

        media = soma / 4;

        if (media >= 7) {
            situacaoAluno = "Aprovado"
        } else {
            situacaoAluno = "Reprovado"
        }

        indice = indice + 1;
    }

    alert(
        "Média do aluno: " + media +
        "\nSituação do aluno: " + situacaoAluno
    );

}

function exercicio12() {
    // Solicitar o valor de 5 produtos utilizando enquanto
    // Calcular o total da compra
    // Se o total for maior que 200 aplicar 10% de desconto
    // Apresentar o valor total sem desconto
    // Apresentar o valor final com desconto (se houver)

    let desconto = 0;
    let totalCompra = 0;
    let indice = 0;

    while (indice < 5) {
        let valorProduto = parseFloat(prompt("Digite o valor do produto"));

        totalCompra = totalCompra + valorProduto;

        indice = indice + 1;
    }

    let valorFinal = totalCompra;

    if (totalCompra > 200) {
        desconto = totalCompra * 0.10;
        valorFinal = totalCompra - desconto;
    }

    alert(
        "Total da compra: R$" + totalCompra.toFixed(2) +
        "\nDesconto aplicado: R$" + desconto.toFixed(2) +
        "\nValor final: R$" + valorFinal.toFixed(2)
    );
}

function exercicio13() {
    // Solicitar 6 idades utilizando enquanto
    // Calcular a média das idades
    // Apresentar a média das idades
    // Se a média for maior ou igual a 18 apresentar Maior de idade
    // Senão apresentar Menor de idade

    let situacao = "";
    let somaIdades = 0;
    let indice = 0;

    while (indice < 6) {
        let idade = parseInt(prompt("Digite a idade"));

        somaIdades = somaIdades + idade;

        indice = indice + 1;
    }

    let mediaIdades = somaIdades / 6;

    if (mediaIdades >= 18) {
        situacao = "Maior de idade";
    } else {
        situacao = "Menor de idade";
    }

    alert(
        "Média das idades: " + mediaIdades +
        "\nSituação: " + situacao
    );
}

function exercicio14() {
    // Solicitar 5 salários utilizando enquanto
    // Calcular o maior salário informado
    // Calcular o menor salário informado
    // Calcular a média dos salários
    // Se a média for maior que 3000 apresentar mensagem Salários acima da média
    // Senão apresentar mensagem Salários dentro da média

    let maiorSalario = 0;
    let menorSalario = 999999;
    let somaSalarios = 0;
    let indice = 0;

    while (indice < 5) {
        let salario = parseFloat(prompt("Digite o salário"));

        somaSalarios = somaSalarios + salario;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        } 
        if (salario < menorSalario) {
            menorSalario = salario;
        }

        indice = indice + 1;
    }

    let mediaSalarios = somaSalarios / 5;

    let informacao = "";
    if (mediaSalarios > 3000) {
        informacao = "Salários acima da média";
    } else {
        informacao = "Salários dentro da média";
    }

    alert(
        "Maior salário: R$" + maiorSalario.toFixed(2) +
        "\nMenor salário: R$" + menorSalario.toFixed(2) +
        "\nMédia dos salários: R$" + mediaSalarios.toFixed(2) +
        "\nSituação: " + informacao
    );

    /* está dando erro na apresentação do menor valor, não consegui resolver */
}

function exercicio15() {
    // Solicitar 4 valores de contas (água, luz, internet, aluguel) utilizando enquanto
    // Calcular o total das contas
    // Solicitar a renda mensal do usuário
    // Se o total das contas for maior que 50% da renda apresentar mensagem Orçamento comprometido
    // Senão apresentar mensagem Orçamento saudável
    // Apresentar o total das contas e o percentual que representa da renda

    let totalContas = 0;
    let indice = 0;

    while (indice < 4) {
        let varlorConta = parseFloat(prompt("Digite o valor da conta(luz, água, internet, aluguel"));

        totalContas = totalContas + varlorConta;

        indice = indice + 1;
    }

    let rendaMensal = parseFloat(prompt("Digite sua renda"));

    let orcamento = (totalContas / rendaMensal) * 100;

    let situacao = "";
    if (orcamento > 50) {
        situacao = "Orçamento comprometido";
    } else {
        situacao = "Orçamento saudável";
    }

    alert(
        "Total das contas: R$" + totalContas.toFixed(2) +
        "\nRenda mensal: R$" + rendaMensal.toFixed(2) +
        "\nPercentual comprometido: " + orcamento.toFixed(2) +
        "\nSituação: " + situacao
    );

}

function exercicio16() {
    // Solicitar a altura de 5 pessoas
    // Descobrir e armazenar a maior altura utilizando while
    // Apresentar a maior altura informada

    let maiorAltura = 0;
    let indice = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Digite a altura em cm (ex.: 175)"));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior altura: " + maiorAltura.toFixed(2) + "cm");
}

function exercicio17() {
    // Solicitar o peso de 4 pessoas
    // Descobrir e armazenar o menor peso utilizando while
    // Apresentar o menor peso informado

    let menorPeso = 999999;
    let indice = 0;

    while(indice < 4){
        let peso = parseFloat(prompt("Digite o peso em kg (ex.: 60)"));

        if (peso < menorPeso){
            menorPeso = peso;
        }

        indice = indice + 1;
    }

    alert("Menor peso: " + menorPeso + "kg");
}

function exercicio18() {
// Solicitar o nome e a idade de 5 pessoas
// Descobrir quem possui a maior idade utilizando while
// Apresentar o nome da pessoa e a idade dela

let maiorIdade = 0;
let nomeMaiorIdade = "";
let indice = 0;

while(indice < 5){
    let nome = prompt("Digite o nome da pessoa");
    let idade = parseInt(prompt("Digite a idade"));

    if(idade > maiorIdade){
        maiorIdade = idade;
        nomeMaiorIdade = nome;
    }

    indice = indice + 1;
}

alert(
    "PESSOA COM MAIOR IDADE:" +
    "\nNome: " + nomeMaiorIdade +
    "\nIdade: " + maiorIdade
);
}

function exercicio19() {
// Solicitar o preço de 6 produtos
// Descobrir o maior preço utilizando while
// Descobrir o menor preço utilizando while
// Apresentar o maior e o menor preço informados

let maiorPreco = 0;
let menorPreco = 999999;
let indice = 0;

while(indice < 6){
    let preco = parseFloat(prompt("Digite o preço do produto"));
    
    if(preco > maiorPreco){
        maiorPreco = preco;
    }
    if(preco < menorPreco){
        menorPreco = preco;
    }
indice = indice + 1;
}

alert(
    "Maior preço: R$" + maiorPreco.toFixed(2) +
    "\nMenor preço: R$" + menorPreco.toFixed(2)
);
}

function exercicio20() {
// Solicitar o nome e o valor do salário de 4 colaboradores
// Descobrir qual colaborador tem o maior salário utilizando while
// Apresentar o nome do colaborador e o salário dele

let maiorSalario = 0;
let nomeMaiorSalario = "";
let indice = 0;

while(indice < 4){
    let nome = prompt("Digite o nome do colaborador");
    let salario = parseFloat(prompt("Digite o salário do colaborador"));

    if(salario > maiorSalario){
        maiorSalario = salario;
        nomeMaiorSalario = nome;
    }

indice = indice + 1;
}

alert(
    "COLABORADOR COM MAIOR SALÁRIO:" +
    "\nNome: " + nomeMaiorSalario +
    "\nSalário: R$" + maiorSalario
);
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