// var => Variável global, ou seja, existe em todos os arquivos (inseguro)
// let => Variável que possui escopo, ou seja, existe dentro do if, while, function...
// const => Variável que não permite alteração, ou seja, uma vez que foi definido o valor não é possível alterar. Tem a nesna característica do let em relação ao escopo, existe dentro do if, while, function, fora deixa de existir (ela morre)

function exemplo01() {
    //let nome1 = "Maçã"
    //let nome2 = "Pera"
    //let nome3 = "Tomate"

    let frutas = []
    frutas.push("Maçã");
    frutas.push("Pera");
    frutas.push("Totamte");
    frutas.push("Rúcula");

    console.log("Tamanho do vetor: " + frutas.length);

    // Alterando valor no vetor
    frutas[2] = "Tomate";

    // Remover 'Rúcula' da lista de frutas, porque não é fruta
    frutas.splice(3, 1); // 3 é a posição da Rúcula


    // Acessando uma posição específica do vetor, ou seja, acessando o valor armazenado naquela
    console.log("Fruta 1: " + frutas[0]);
    console.log("Fruta 2: " + frutas[1]);
    console.log("Fruta 3: " + frutas[2]);
}

// Exercício 01:
// Criar função exercicio01Jogos
// Criar uma lista de nome de jogos
// Adicionar o jogo 'Tíbia'
// Apresentar tamanho da lista

// Adicionar o jogo 'Battlefield 4'
// Apresentar os elementos da lista (todos os jogos)

// Adicionar o jogo 'Medal of Honor'
// Adicionar o jogo 'League of Legends'
// Adicionar o jogo 'GTA VI''
// Remover o jogo 'League of Legends'
// Apresentar tamanho da lista

// Alterar o nome 'GTA 6' para 'GTA VI'
// Apresentar o tamanho da lista
// Apresentar os elementos da lista
function exercicio01Jogos() {
    let jogos = [];
    jogos.push("Tíbia");

    console.log("Tamanho da lista: ", jogos.length);

    jogos.push("Battlefield 4");

    console.log("Jogo 1: " + jogos[0]);
    console.log("Jogo 2: " + jogos[1]);

    jogos.push("Medal of Honor");
    jogos.push("League of Legends");
    jogos.push("GTA 6");

    console.log("Tamanho da lista: " + jogos.length);

    console.log("Jogo 1: " + jogos[0]);
    console.log("Jogo 2: " + jogos[1]);
    console.log("Jogo 3: " + jogos[2]);
    console.log("Jogo 4: " + jogos[3]);
    console.log("Jogo 5: " + jogos[4]);


    jogos.splice(3, 1);

    jogos[3] = "GTA VI";

    console.log("Tamanho da lista: " + jogos.length);

    console.log("Jogo 1: " + jogos[0]);
    console.log("Jogo 2: " + jogos[1]);
    console.log("Jogo 3: " + jogos[2]);
    console.log("Jogo 4: " + jogos[3]);

}


//Exercicio 02:
// Criar função exercicio02Pratos
// Criar lista de pratos

// Adicionar os pratos 'Strogonoff', 'Panqueca' e 'Salada'
// Apresentar os elementos da lista

// Remover prato 'Salada'
// Apresentar o tamanho da lista

// Adicionar o prato 'Risoto'
// Adicionar o prato 'Sopa'
// Apresentar os elementos da lista

// Alterar o nome 'Panquenca' para 'Panqueca de Carne'
// Apresentar o tamanho da lista
// Apresentar os elementos da lista
function exercicio02Pratos() {
    let pratos = [];
    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");

    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);

    pratos.splice(2, 1);

    console.log("Tamanho da lista: " + pratos.length);

    pratos.push("Risoto");
    pratos.push("Sopa");

    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);
    console.log("Prato 4: " + pratos[3]);

    pratos[1] = "Panqueca de Carne";

    console.log("Tamanho da lista: " + pratos.length);

    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);
    console.log("Prato 4: " + pratos[3]);

}