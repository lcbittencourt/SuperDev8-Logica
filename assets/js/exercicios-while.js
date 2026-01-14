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
    // Solicitar a temperatura de 7 dias
    // Descobrir a maior temperatura utilizando while
    // Descobrir a menor temperatura utilizando while
    // Apresentar a maior e a menor temperatura informadas

    let maiorTemperatura = -999999;
    let menorTemperatura = 999999;
    let indice = 0;

    while (indice < 7) {
        let temperatura = parseFloat(prompt("Digite a temperatura do dia " + (indice + 1)));

        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura;
        }

        if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura;
        }

        indice = indice + 1;
    }

    alert(
        "Maior temperatura: " + maiorTemperatura.toFixed(2) + "°C" +
        "\nMenor temperatura: " + menorTemperatura.toFixed(2) + "°C"
    );
}

function exercicio22() {
    // Solicitar o nome e o preço de 5 produtos
    // Descobrir qual produto tem o menor preço utilizando while
    // Apresentar o nome do produto e o preço dele

    let menorPreco = 999999;
    let nomeMenorPreco = "";
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome do produto");
        let preco = parseFloat(prompt("Digite o preço do produto"));

        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenorPreco = nome;
        }

        indice = indice + 1;
    }

    alert(
        "Produto com menor preço:" +
        "\nNome: " + nomeMenorPreco +
        "\nPreço: R$" + menorPreco.toFixed(2)
    );
}
function exercicio23() {
    // Solicitar a idade de 8 pessoas
    // - Contar quantas são crianças (idade < 12)
    // - Contar quantas são adolescentes (12 a 17)
    // - Contar quantas são adultos (18 a 59)
    // - Contar quantas são idosos (60 ou mais)
    // - Apresentar a quantidade em cada categoria

    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;
    let idosos = 0;
    let indice = 0;

    while (indice < 8) {
        let idade = parseInt(prompt("Digite a idade da pessoa"));

        if (idade < 12) {
            criancas = criancas + 1;
        } else if (idade >= 12 && idade <= 17) {
            adolescentes = adolescentes + 1;
        } else if (idade >= 18 && idade <= 59) {
            adultos = adultos + 1;
        } else {
            idosos = idosos + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Crianças: " + criancas +
        "\nAdolescentes: " + adolescentes +
        "\nAdultos: " + adultos +
        "\nIdosos: " + idosos
    );
}

function exercicio24() {
    // Solicitar a nota de 10 alunos
    // - Contar quantos alunos estão Reprovados (nota < 5)
    // - Contar quantos alunos estão em Recuperação (nota >= 5 e < 7)
    // - Contar quantos alunos estão Aprovados (nota >= 7)
    // - Apresentar a quantidade de Reprovados, Recuperação e Aprovados

    let reprovados = 0;
    let recuperacao = 0;
    let aprovados = 0;
    let indice = 0;

    while (indice < 10) {
        let nota = parseFloat(prompt("Digite a nota do aluno"));

        if (nota < 5) {
            reprovados = reprovados + 1;
        } else if (nota >= 5 && nota < 7) {
            recuperacao = recuperacao + 1;
        } else {
            aprovados = aprovados + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Reprovados: " + reprovados +
        "\nRecuperação: " + recuperacao +
        "\nAprovados: " + aprovados
    );
}

function exercicio25() {
    // Solicitar o salário de 7 colaboradores
    // - Contar quantos ganham até 2000
    // - Contar quantos ganham entre 2001 e 5000
    // - Contar quantos ganham acima de 5000
    // - Apresentar a quantidade de colaboradores em cada faixa salarial

    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let indice = 0;

    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salário do colaborador"));

        if (salario <= 2000) {
            faixa1 = faixa1 + 1;
        } else if (salario >= 2001 && salario <= 5000) {
            faixa2 = faixa2 + 1;
        } else {
            faixa3 = faixa3 + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Colaboradores que ganham até R$2000: " + faixa1 +
        "\nColaboradores que ganham entre R$2001 e R$5000: " + faixa2 +
        "\nColaboradores que ganham acima de R$5000: " + faixa3
    );
}

function exercicio26() {
    // Solicitar a temperatura de 6 dias
    // - Contar quantos dias foram Frios (temperatura < 15)
    // - Contar quantos dias foram Agradáveis (temperatura entre 15 e 25)
    // - Contar quantos dias foram Quentes (temperatura > 25)
    // - Apresentar a quantidade de dias Frios, Agradáveis e Quentes

    let frios = 0;
    let agradaveis = 0;
    let quentes = 0;
    let indice = 0;

    while (indice < 6) {
        let temperatura = parseFloat(prompt("Digite a temperatura do dia"));

        if (temperatura < 15) {
            frios = frios + 1;
        } else if (temperatura >= 15 && temperatura <= 25) {
            agradaveis = agradaveis + 1;
        } else {
            quentes = quentes + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Dias Frios: " + frios +
        "\nDias Agradáveis: " + agradaveis +
        "\nDias Quentes: " + quentes
    );
}

function exercicio27() {
    // Solicitar a avaliação de 10 clientes (1 a 5)
    // - Contar quantas avaliações foram Ruim (1 ou 2)
    // - Contar quantas avaliações foram Regular (3)
    // - Contar quantas avaliações foram Bom (4 ou 5)
    // - Apresentar a quantidade de respostas Ruim, Regular e Bom

    let ruim = 0;
    let regular = 0;
    let bom = 0;
    let indice = 0;

    while (indice < 10) {
        let avaliacao = parseInt(prompt("Digite a avaliação do cliente (1 a 5)"));

        if (avaliacao === 1 || avaliacao === 2) {
            ruim = ruim + 1;
        } else if (avaliacao === 3) {
            regular = regular + 1;
        } else if (avaliacao === 4 || avaliacao === 5) {
            bom = bom + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Avaliações Ruim: " + ruim +
        "\nAvaliações Regular: " + regular +
        "\nAvaliações Bom: " + bom
    );
}

function exercicio28() {
    // Solicitar 8 números inteiros
    // - Contar quantos números são negativos
    // - Contar quantos números são iguais a zero
    // - Contar quantos números são positivos
    // - Apresentar a quantidade de números negativos, iguais a zero e positivos

    let negativos = 0;
    let zeros = 0;
    let positivos = 0;
    let indice = 0;

    while (indice < 8) {
        let numero = parseInt(prompt("Digite um número inteiro"));

        if (numero < 0) {
            negativos = negativos + 1;
        } else if (numero === 0) {
            zeros = zeros + 1;
        } else {
            positivos = positivos + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Números Negativos: " + negativos +
        "\nNúmeros Iguais a Zero: " + zeros +
        "\nNúmeros Positivos: " + positivos
    );
}

function exercicio29() {
    // Solicitar o peso de 5 encomendas
    // - Contar quantas são Leves (peso < 2 kg)
    // - Contar quantas são Médias (peso entre 2 e 10 kg)
    // - Contar quantas são Pesadas (peso > 10 kg)
    // - Apresentar a quantidade de encomendas Leves, Médias e Pesadas

    let leves = 0;
    let medias = 0;
    let pesadas = 0;
    let indice = 0;

    while (indice < 5) {
        let peso = parseFloat(prompt("Digite o peso da encomenda em kg"));

        if (peso < 2) {
            leves = leves + 1;
        } else if (peso >= 2 && peso <= 10) {
            medias = medias + 1;
        } else {
            pesadas = pesadas + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Encomendas Leves: " + leves +
        "\nEncomendas Médias: " + medias +
        "\nEncomendas Pesadas: " + pesadas
    );
}

function exercicio30() {
    // Solicitar a quantidade de pelúcias da Disney que deseja cadastrar
    // Para cada pelúcia, solicitar o personagem [MICKEY/MINNIE/DONALD]
    // Contar quantas pelúcias são do Mickey
    // Contar quantas pelúcias são da Minnie
    // Contar quantas pelúcias são do Donald
    // Apresentar o resumo das pelúcias cadastradas por personagem

    let quantidadePelucias = parseInt(prompt("Digite a quantidade de pelúcias que deseja cadastrar"));
    let mickey = 0;
    let minnie = 0;
    let donald = 0;
    let indice = 0;

    while (indice < quantidadePelucias) {
        let personagem = prompt("Digite o personagem da pelúcia (MICKEY/MINNIE/DONALD)");

        if (personagem === "MICKEY") {
            mickey = mickey + 1;
        } else if (personagem === "MINNIE") {
            minnie = minnie + 1;
        } else if (personagem === "DONALD") {
            donald = donald + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Resumo das pelúcias cadastradas:" +
        "\nMickey: " + mickey +
        "\nMinnie: " + minnie +
        "\nDonald: " + donald
    );
}

function exercicio31() {
    // Solicitar a quantidade de clientes que irão responder a pesquisa
    // Para cada cliente, solicitar a forma de pagamento utilizada [CRÉDITO/DÉBITO/DINHEIRO]
    // Contar quantos pagaram no crédito
    // Contar quantos pagaram no débito
    // Contar quantos pagaram em dinheiro
    // Apresentar o total de clientes em cada forma de pagamento

    let quantidadeClientes = parseInt(prompt("Digite a quantidade de clientes que irão responder a pesquisa"));
    let credito = 0;
    let debito = 0;
    let dinheiro = 0;
    let indice = 0;

    while (indice < quantidadeClientes) {
        let formaPagamento = prompt("Digite a forma de pagamento utilizada (CRÉDITO/DÉBITO/DINHEIRO)");

        if (formaPagamento === "CRÉDITO") {
            credito = credito + 1;
        } else if (formaPagamento === "DÉBITO") {
            debito = debito + 1;
        } else if (formaPagamento === "DINHEIRO") {
            dinheiro = dinheiro + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Total de clientes em cada forma de pagamento:" +
        "\nCrédito: " + credito +
        "\nDébito: " + debito +
        "\nDinheiro: " + dinheiro
    );
}

function exercicio32() {
    // Solicitar a quantidade de ingressos vendidos
    // Para cada ingresso, solicitar o tipo [INTEIRA/MEIA/CORTESIA]
    // Contar quantos ingressos são INTEIRA
    // Contar quantos ingressos são MEIA
    // Contar quantos ingressos são CORTESIA
    // Apresentar o total de ingressos por tipo

    let quantidadeIngressos = parseInt(prompt("Digite a quantidade de ingressos vendidos"));
    let inteira = 0;
    let meia = 0;
    let cortesia = 0;
    let indice = 0;

    while (indice < quantidadeIngressos) {
        let tipoIngresso = prompt("Digite o tipo de ingresso (INTEIRA/MEIA/CORTESIA)");

        if (tipoIngresso === "INTEIRA") {
            inteira = inteira + 1;
        } else if (tipoIngresso === "MEIA") {
            meia = meia + 1;
        } else if (tipoIngresso === "CORTESIA") {
            cortesia = cortesia + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Total de ingressos por tipo:" +
        "\nInteira: " + inteira +
        "\nMeia: " + meia +
        "\nCortesia: " + cortesia
    );
}

function exercicio33() {
    // Solicitar a quantidade de lanches vendidos em um dia
    // Para cada lanche, solicitar o tipo [HAMBURGUER/PIZZA/HOTDOG]
    // Contar quantos pedidos foram de hambúrguer
    // Contar quantos pedidos foram de pizza
    // Contar quantos pedidos foram de hotdog
    // Apresentar a quantidade de pedidos por tipo de lanche

    let quantidadeLanches = parseInt(prompt("Digite a quantidade de lanches vendidos em um dia"));
    let hamburguer = 0;
    let pizza = 0;
    let hotdog = 0;
    let indice = 0;

    while (indice < quantidadeLanches) {
        let tipoLanche = prompt("Digite o tipo de lanche (HAMBURGUER/PIZZA/HOTDOG)");

        if (tipoLanche === "HAMBURGUER") {
            hamburguer = hamburguer + 1;
        } else if (tipoLanche === "PIZZA") {
            pizza = pizza + 1;
        } else if (tipoLanche === "HOTDOG") {
            hotdog = hotdog + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Quantidade de pedidos por tipo de lanche:" +
        "\nHambúrguer: " + hamburguer +
        "\nPizza: " + pizza +
        "\nHotdog: " + hotdog
    );
}

function exercicio34() {
    // Solicitar a quantidade de livros que deseja cadastrar
    // Para cada livro, solicitar a categoria [FICÇÃO/ESTUDO/INFANTIL]
    // Contar quantos livros são de Ficção
    // Contar quantos livros são de Estudo
    // Contar quantos livros são Infantis
    // Apresentar a quantidade de livros em cada categoria

    let quantidadeLivros = parseInt(prompt("Digite a quantidade de livros que deseja cadastrar"));
    let ficcao = 0;
    let estudo = 0;
    let infantil = 0;
    let indice = 0;

    while (indice < quantidadeLivros) {
        let categoriaLivro = prompt("Digite a categoria do livro (FICÇÃO/ESTUDO/INFANTIL)");

        if (categoriaLivro === "FICÇÃO") {
            ficcao = ficcao + 1;
        } else if (categoriaLivro === "ESTUDO") {
            estudo = estudo + 1;
        } else if (categoriaLivro === "INFANTIL") {
            infantil = infantil + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Quantidade de livros em cada categoria:" +
        "\nFicção: " + ficcao +
        "\nEstudo: " + estudo +
        "\nInfantil: " + infantil
    );
}

function exercicio35() {
    // Solicitar o nome de personagens de anime até o usuário digitar sair
    // Cada vez que um nome for digitado, exibir uma mensagem com o personagem cadastrado
    // Ao digitar sair, encerrar o cadastro
    // Apresentar a quantidade total de personagens cadastrados

    let nomePersonagem = prompt("Digite o nome do personagem de anime (ou 'sair' para encerrar)");
    let quantidadePersonagens = 0;

    while (nomePersonagem !== "sair") {
        alert("Personagem cadastrado: " + nomePersonagem);
        quantidadePersonagens = quantidadePersonagens + 1;
        nomePersonagem = prompt("Digite o nome do personagem de anime (ou 'sair' para encerrar)");
    }

    alert("Quantidade total de personagens cadastrados: " + quantidadePersonagens);
}

function exercicio36() {
    // Solicitar o nome de jogos favoritos até o usuário digitar sair
    // Contar quantos jogos foram cadastrados
    // Contar quantos jogos são do gênero RPG (quando o usuário digitar "RPG" em uma pergunta de gênero)
    // Ao final, apresentar a quantidade total de jogos e quantos são RPG

    let nomeJogo = prompt("Digite o nome do jogo favorito (ou 'sair' para encerrar)");
    let quantidadeJogos = 0;
    let jogosRPG = 0;

    while (nomeJogo !== "sair") {
        quantidadeJogos = quantidadeJogos + 1;

        let generoJogo = prompt("Digite o gênero do jogo (RPG/OUTRO)");

        if (generoJogo === "RPG") {
            jogosRPG = jogosRPG + 1;
        }

        nomeJogo = prompt("Digite o nome do jogo favorito (ou 'sair' para encerrar)");
    }

    alert(
        "Quantidade total de jogos cadastrados: " + quantidadeJogos +
        "\nQuantidade de jogos do gênero RPG: " + jogosRPG
    );
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