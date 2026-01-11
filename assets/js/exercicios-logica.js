function exercicio03() {
    // ✅Solicitar o nome do filme
    // ✅Solicitar o ano de lançamento (número)
    // ✅Solicitar a duração em minutos (número)
    // ✅Solicitar o gênero do filme (ex: Ação, Comédia, Drama)
    // ✅Solicitar se o filme já foi assistido (boolean - confirm)
    // ✅Apresentar os dados do filme
    const nomeFilme = prompt("Digite o nome do filme");
    const anoLancamento = parseInt(prompt("Digite o ano de lançamento"));
    const tempoDuracao = parseInt(prompt("Digite o tempo de duração (minutos)"));
    const generoFilme = prompt("Digite o gênero do filme (ex.: Ação, Comédia, Drama etc.)");
    const filmeAssistido = confirm("Filme foi assistido?");


    alert(
        "Nome do filme: " + nomeFilme + "\n" +
        "Ano de lançamento: " + anoLancamento + "\n" +
        "Tempo de duração: " + tempoDuracao + "\n" +
        "Gênero do filme: " + generoFilme + "\n" +
        "Filme foi assistido?: " + (filmeAssistido ? "Sim" : "Não")
    );
}

function exercicio04() {
    // ✅Solicitar o nome do produto
    // ✅Solicitar o preço unitário (número com casa decimal)
    // ✅Solicitar a quantidade comprada (número inteiro)
    // ✅Calcular o valor total (preço unitário * quantidade)
    // ✅Solicitar se o cliente é assinante Premium (boolean - confirm)
    // ✅Se for assinante Premium, aplicar 10% de desconto no valor total
    // ✅Apresentar todos os dados e o valor final da compra

    const nomeProduto = prompt("Digite o nome do produto");
    let precoUnitario = parseFloat(prompt("Digite o valor unitário"));
    let quantidadeComprada = parseInt(prompt("Digite a quantidade"));

    let valorTotal = precoUnitario * quantidadeComprada;

    let clientePremium = confirm("É Cliente Premium? (10% de desconto)");

    let valorFinal = "";
    if (clientePremium === true) {
        valorFinal = valorTotal - (valorTotal * 0.10);
    } else if (clientePremium === false) {
        valorFinal = valorTotal;
    }

    alert(
        "Produto :" + nomeProduto +
        "\nValor unitário: R$" + precoUnitario +
        "\nQuantiade: " + quantidadeComprada +
        "\nValor total: R$" + valorTotal +
        "\nCliente Premium? (10% de desconto): " + clientePremium +
        "\nValor final: R$" + valorFinal
    );

}

function exercicio05() {
    // ✅Solicitar o nome do aluno
    // ✅Solicitar a primeira nota (número)
    // ✅Solicitar a segunda nota (número)
    // ✅Solicitar a terceira nota (número)
    // ✅Calcular a média das 3 notas
    // ✅Se a média for maior ou igual a 7, considerar "Aprovado"
    // ✅Se a média estiver entre 5 e 6.99, considerar "Recuperação"
    // ✅Se a média for menor que 5, considerar "Reprovado"
    // ✅Apresentar as notas, a média e a situação do aluno

    const nomeAluno = prompt("Digite o nome do aluno");
    let nota1 = parseFloat(prompt("Digite a primeira nota"));
    let nota2 = parseFloat(prompt("Digite a segunda nota"));
    let nota3 = parseFloat(prompt("Digite a terceira nota"));

    let mediaAluno = (nota1 + nota2 + nota3) / 3;
    alert("Média Aluno: " + mediaAluno);

    let situacaoAluno = "";
    if (mediaAluno < 5) {
        situacaoAluno = "Reprovado";
    } else if (mediaAluno >= 7) {
        situacaoAluno = "Aprovado"
    } else if (mediaAluno >= 5) {
        situacaoAluno = "Recuperação"
    };

    alert(
        "Nome do aluno: " + nomeAluno +
        "\nPrimeira nota: " + nota1 +
        "\nSegunda nota: " + nota2 +
        "\nTerceira nota: " + nota3 +
        "\nMédia: " + mediaAluno +
        "\nSituação do aluno: " + situacaoAluno
    );
}

function exercicio06() {
    // ✅Solicitar o modelo do carro
    // ✅Solicitar o ano do carro (número)
    // ✅Solicitar o valor do carro (número)
    // ✅Solicitar a quantidade de parcelas (número inteiro)
    // ✅Calcular o valor da parcela (valor do carro / quantidade de parcelas)
    // ✅Solicitar se o cliente quer incluir seguro (boolean - confirm)
    // ✅Se incluir seguro, adicionar R$ 150,00 ao valor da parcela
    // ✅Apresentar todos os dados e o valor final da parcela

    let modeloCarro = prompt("Digite o modelo do carro");
    let anoCarro = parseInt(prompt("Digite o ano do carro"));
    let valorCarro = parseFloat(prompt("Digite o valor do carro"));
    let quantidadeParcelas = parseInt(prompt("Digite o número de parcelas"));

    let varlorParcela = parseFloat(valorCarro / quantidadeParcelas);

    let seguroCarro = confirm("Deseja incluir seguro? (R$ 150,00)");
    let valorSeguro = 150.00;

    let valorFinalParcela = "";
    if (seguroCarro === true) {
        valorFinalParcela = varlorParcela + valorSeguro;
    } else if (seguroCarro === false) {
        valorFinalParcela = varlorParcela;
    }

    alert(
        "Modelo do carro: " + modeloCarro +
        "\nAno do carro: " + anoCarro +
        "\nValor do carro: R$" + valorCarro +
        "\nQuantidade de parcelas: " + quantidadeParcelas +
        "\nValor da parcela: R$" + varlorParcela +
        "\nDeseja seguro?: " + seguroCarro +
        "\nValor do seguro: R$" + valorSeguro + " " + "em cada parcela" +
        "\nValor final da parcela: R$" + valorFinalParcela
    );
}

function exercicio07() {
    // ✅Solicitar o nome do jogo
    // ✅Solicitar a quantidade de horas jogadas por dia (número)
    // ✅Solicitar a quantidade de dias jogados na semana (número)
    // ✅Calcular o total de horas jogadas na semana (horas por dia * dias)
    // ✅Solicitar se o jogo é online (boolean - confirm)
    // ✅Apresentar os dados do jogo e o total de horas semanais

    const nomeJogo = prompt("Digite o nome do jogo");
    let horasJogadasDia = parseInt(prompt("Digite a quantidade de horas jogadas por dia"));
    let diasJogadosSemana = parseInt(prompt("Digite a quantidade de dias jogados na semana"));

    let horasJogadasSemana = horasJogadasDia * diasJogadosSemana;

    let jogoOnline = confirm("Jogo é online?")

    alert(
        "Nome do jogo: " + nomeJogo +
        "\nQuantidade de horas por dia: " + horasJogadasDia +
        "\nQuantidade de dias na semana: " + diasJogadosSemana +
        "\nJogo online?: " + (jogoOnline ? "Sim" : "Não") +
        "\nQuantidade de horas jogadas na semana: " + horasJogadasSemana
    );
}

function exercicio08() {
    // ✅Solicitar o nome do restaurante
    // ✅Solicitar o valor da conta (número com casas decimais)
    // ✅Solicitar a quantidade de pessoas na mesa (número inteiro)
    // ✅Calcular quanto cada pessoa deve pagar (valor da conta / quantidade de pessoas)
    // ✅Solicitar se será incluída taxa de serviço (boolean - confirm)
    // ✅Se for incluir taxa de serviço, adicionar 10% ao valor da conta antes de dividir
    // ✅Apresentar o valor final da conta e o valor por pessoa

    const nomeRestaurante = prompt("Digite o nome do restaurante");
    let valorConta = parseFloat(prompt("Digite o valor da conta"));
    let quantidadePessoasMesa = parseInt(prompt("Digite a quantidade de pessoas na mesa"));

    let taxaServico = confirm("Incluir taxa de serviço? (10%)");

    let valorFinal = "";
    if (taxaServico === true) {
        valorFinal = valorConta + (valorConta * 0.10);
    } else if (taxaServico === false) {
        valorFinal = valorConta;
    }

    let valorPessoa = valorFinal / quantidadePessoasMesa;

    alert(
        "Nome do Restaurante: " + nomeRestaurante +
        "\nValor da conta: R$" + valorConta +
        "\nQuantidade de pessoas na mesa: " + quantidadePessoasMesa +
        "\nTaxa de serviço?: " + (taxaServico ? "Sim (10%)" : "Não") +
        "\nValor final: R$" + valorFinal +
        "\nValor por pessoa: R$" + valorPessoa
    );

}

function exercicio09() {
    // ✅Solicitar o nome do funcionário
    // ✅Solicitar o salário base (número)
    // ✅Solicitar o valor das horas extras no mês (número)
    // ✅Solicitar o valor dos descontos (número)
    // ✅Calcular o salário final (salário base + horas extras - descontos)
    // ✅Verificar se o salário final é maior que 3000
    // ✅Se maior que 3000, informar que o funcionário paga imposto alto
    // ✅Se menor ou igual a 3000, informar que o funcionário paga imposto padrão
    // ✅Apresentar todos os dados e o salário final

    const nomeFuncionario = prompt("Digite o nome do funcionário");

    let salarioBase = parseFloat(prompt("Digite o salário base"));
    let horasExtras = parseFloat(prompt("Digite o valor das horas extras no mês"));
    let descontos = parseFloat(prompt("Digite o valor dos descontos"));

    let salarioFinal = salarioBase + horasExtras - descontos;

    let tipoImposto = "";
    if (salarioFinal > 3000) {
        tipoImposto = "Imposto alto";
    } else {
        tipoImposto = "Imposto padrão";
    }

    alert(
        "Funcionário: " + nomeFuncionario +
        "\nSalário base: R$ " + salarioBase.toFixed(2) +
        "\nHoras extras: R$ " + horasExtras.toFixed(2) +
        "\nDescontos: R$ " + descontos.toFixed(2) +
        "\nSalário final: R$ " + salarioFinal.toFixed(2) +
        "\nTipo de imposto: " + tipoImposto
    );
}

function exercicio10() {
    // ✅Solicitar o nome do cliente
    // ✅Solicitar o saldo atual da conta (número)
    // ✅Solicitar o valor de um depósito (número)
    // ✅Atualizar o saldo com o depósito
    // ✅Solicitar o valor de um saque (número)
    // ✅Verificar se o saque é menor ou igual ao saldo
    // ✅Se for possível, atualizar o saldo subtraindo o saque
    // ✅Se não for possível, não alterar o saldo e avisar que saldo é insuficiente
    // ✅Apresentar o nome do cliente e o saldo final da conta

    const nomeCliente = prompt("Digite o nome do cliente");

    let saldo = parseFloat(prompt("Digite o saldo atual da conta"));

    let deposito = parseFloat(prompt("Digite o valor do depósito"));
    saldo = saldo + deposito;

    let saque = parseFloat(prompt("Digite o valor do saque"));

    if (saque <= saldo) {
        saldo = saldo - saque;
    } else {
        alert("Saldo insuficiente para realizar o saque");
    }

    alert(
        "Cliente: " + nomeCliente +
        "\nSaldo final da conta: R$ " + saldo.toFixed(2)
    );
}