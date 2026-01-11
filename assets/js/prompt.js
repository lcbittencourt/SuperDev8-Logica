function solicitarString(){
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");

    let nomeSobrenome = nome + " " + sobrenome;

    alert("Nome completo: " + nomeSobrenome)
}

function solicitarInt(){
    let numeroCartao = parseInt(prompt("Digite o número do cartão"));
    let codigoSeguranca = parseInt(prompt("Digite o código de segurança"));

    alert("Número: " + numeroCartao + "\nCVV:" + codigoSeguranca)

}

function solicitarFloat(){

    let saldoBancario = parseFloat(prompt("Digite saldo Bancário"));
    const saque = parseFloat(prompt("Digite valor do saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado: " + saque + "\nSaldo atual: " + saldoBancario)
}

function solicitarBoolean(){
    let vencido = confirm("Produto vencido?");

    alert("Produto vencido: " + vencido)
}

function paciente(){
    let nome = prompt("Digite seu nome");
    const idade = parseInt(prompt("Digite a sua idade"));
    const peso = parseFloat(prompt("Digite seu peso"));
    const possuiPlanoSaude = confirm("Possui plano de saude?");
    const cpf = prompt("Digite seu CPF");

    let planoSaude = ""
    //se possuiPlanoSaude for igual a verdadeiro
    if (possuiPlanoSaude === true){
        planoSaude = prompt("Digite o tipo de plano de sade");
    }

    const tipoSanguineo = prompt("Digite o tipo sanguineo");
    const altura = parseFloat(prompt("Digite a altura"));
    const possuiAlergia = confirm("Possui alergia?");

    const urgencia = prompt("Escolha o nível de urgência [Migue, Atestado, Dorzinha, Gripe, Dengue, Dor Extrema]");

    let tempoEspera = 0;
    if(urgencia === "Migué"){
        tempoEspera = 180;
    } else if (urgencia === "Atestado"){
        tempoEspera = 150;
    } else if(urgencia === "Dorzinha"){
        tempoEspera = 120;
    } else if(urgencia === "Dengue"){
        tempoEspera = 60;
    } else if(urgencia === "Dor Extrema"){
        tempoEspera = 30;
    } else{
        alert("Nível de urgencia inexistente");
        return;
    }

    alert(
        "Dados do Paciente\n\n" + 
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "anos\n" + 
        "Peso: " + peso + "kg\n" + 
        "CPF: " + cpf + "\n" +
        "Possui plano de saúde: " + (possuiPlanoSaude ? "Sim" : "Não") + "\n" + 
        "Tipo sanguíneo: " + tipoSanguineo + "\n" + 
        "Altura :" + altura + "m\n" +
        "Nível de urgência: " + urgencia + "\n" +
        "Tempo de espera: " + tempoEspera + " minutos"
    );
}

function exercicio01(){
    let nome = prompt("Digite o nome do personagem");
    const idade = parseInt(prompt("Digite a idade"));
    const cidade = prompt("Digite a cidade");
    const possuiPoderes = confirm("Possui poderes?");

    let poderes = ""
    if (possuiPoderes === true){
        poderes = prompt("Digite qual o(s) poder(es)");
    }

    const atuacoesMensais = prompt("Quantidade de atuações mensais");

    alert(
        "Dados do Personsagem\n\n" + 
        "Nome: " + nome + "\n" +
        "Idade: " + idade + " " + "anos\n" + 
        "Cidade: " + cidade + "\n" + 
        "Possui poderes: " + (possuiPoderes ? "Sim" : "Não") + "\n" +
        (possuiPoderes ? "Poder(es): " + poderes + "\n" : "") + 
        "Atuações Mensais: " + atuacoesMensais
    );
}