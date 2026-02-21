function converterParaMaiusculo() {
    let texto = "Abacate";
    let textoMaiusculo = texto.toUpperCase();

    alert(`Texto original: ${texto}\nTexto maiúsculo: ${textoMaiusculo}`);
}

function converterParaMinusculo() {
    let texto = "Abacate";
    let textoMinusculo = texto.toLowerCase();

    alert(`Texto original: ${texto}\nTexto minúsculo: ${textoMinusculo}`);
}

function removerEspacosComeco() {
    let texto = " Uma frase bem legal ";
    let textoSemEspacosComeco = texto.trimStart();

    alert(`Texto original: '${texto}'\nTexto sem espaços no começo: '${textoSemEspacosComeco}'`);
}

function removerEspacosFinal() {
    let texto = " Uma frase bem legal ";
    let textoSemEspacosFinal = texto.trimEnd();

    alert(`Texto original: '${texto}'\nTexto sem expaços no final: '${textoSemEspacosFinal}'`);
}

function removerEspacosComecoFinal() {
    let texto = " Uma frase bem legal ";
    let textoSemEspacosComecoFinal = texto.trimStart().trimEnd();

    alert(`Texto original: '${texto}'\nTexto sem espaços no começo e final: '${textoSemEspacosComecoFinal}'`);
}

function substituir() {
    let texto = " Lorezzo faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo");

    alert(`Texto original: '${texto}'\nTexto subustituído: '${novoTexto}'`);
}

function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";

    let valorStringNovo = valorString.replace("R$", "").replaceAll(".", "").replace(",", ".");

    let valor = parseFloat(valorStringNovo);

    alert("Valor convertido: " + valor + "\nValor dobrado: " + valor * 2);
}

function substring() {
    // 31/01/2026
    // dia
    // mes
    // ano
    //          0123456789
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    // apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}

function substringHorario() {
    let horarioAmericano = prompt("Digite o horário no formato americano");

    let hora = parseInt(horarioAmericano.substring(0, 2));
    let minuto = parseInt(horarioAmericano.substring(3, 5));
    let periodo = parseInt(horarioAmericano.substring(6, 8));

    let horaBrasil = 0;

    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        horaBrasil = hora + 12;
    }

    let horarioBrasil = `${horaBrasil}:${minuto}`
    alert(`Horário USA: ${horarioAmericano}\nHorário Brasil: ${horarioBrasil}`);
}

function exemploLength() {
    let texto = "Olá, mundo!"
    let quantidadeCaracteres = texto.length;

    alert(`Texto: ${texto}\nQuantidade de caracteres: ${quantidadeCaracteres}`);
}

function comecaCom() {
    let nomeEmpresa = prompt("Digite o nome da empresa");

    let empresaBlumenau = false;
    if(nomeEmpresa.toLowerCase().startsWith("blu") === true){
        empresaBlumenau = true;
    }

    alert(`Empresa de Blumenau: ${empresaBlumenau}\nNome da empresa: ${nomeEmpresa}`);
}

function terminaCom() {
    let nomeCompleto = prompt("Digite o nome completo");

    if(nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SANTOS") || nomeCompleto.toUpperCase().endsWith("FERREIRA") || nomeCompleto.toUpperCase().endsWith("PEREIRA")){
        alert("Sobrenome Comum");
    }else {
        alert("Não é sobrenome comum");
    }
}

function contem() {
    let refeicao = "Purê de feijão com frango";

    if(refeicao.toLowerCase().includes("feijão")) {
        alert("Tipicamente do Brasil");
    } else {
        alert("Outra comida");
    }
}

function indiceDoCaracter() {
    let hora = "23:49";
    // Retornar o indice do caractere encontrado, caso não encontrar retorna -1
    let indiceDoisPontos = hora.indexOf("49");
    alert(`Hora: ${hora}\nIndice do ':' ${indiceDoisPontos}`);
}

function quebraString() {
    let data = "31/01/2026";
    let partes = data.split("/"); // => ["31", "01", "2026"]
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    // Apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}

function quebraString() {
    let dataHora = "31/01/2026 23:49:10";
    let parteDataHora = dataHora.split(" "); // => ["31/01/2026", "23:49:10"]
    let partesData = parteDataHora.split("/") // "31/01/2026" => ["31", "01", "2026"]
    let partesHora = parteDataHora.split(":") // "23:49:10" => ["23", "49", "10"]
    let dia = partesData[0]; // 31
    let mes = partesData[1]; // 01
    let ano = partesData[2]; // 2026

    let hora = partesHora[0]; // 23
    let minuto = partesHora[1]; // 49
    let segundo = partesHora[2]; // 10
    // Apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}\nHora: ${hora} Minuto ${minuto} Segundo ${segundo}`);
}

function padStart() {
    // Apresentar sempre 15 caracteres
    let numeroCartao = "5230 9713 6338 5801";
    let ultimosNumeros = numeroCartao.substring(15, 19);
    alert(ultimosNumeros.padStart(16, "*"));
}

function padEnd() {
    // CSV Separando por caracteres
    // Matheus;25;5930.24
    // CSV Separando por largura fixa
    // Nome 30 caracteres Idade 3 Salario 10
    // Matheus                       25 5930.24
    // Ana da Silva Souza            74 25419.37
    let nome = "Matheus";
    let idade = 25;
    let salario = 5930.24;

    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");
    alert(`Linha do CSV: '${linha}'`);
}