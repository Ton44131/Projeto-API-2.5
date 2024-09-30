// JSON dos jogos
var json1 = `{
    "nome": "The Witcher 3: Wild Hunt",
    "genero": "Gênero <br> RPG de ação com elementos de fantasia e mundo aberto.",
    "sinopse": "Sinopse <br> Geralt de Rivia, um caçador de monstros, busca sua filha adotiva em um vasto mundo dominado por uma ameaça sobrenatural.",
    "plataformas": "Preço <br> R$40,00",
    "imagem": "<img src='https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador, com elementos de mundo aberto para exploração individual.",
    "estudio": "Estúdio <br> CD Projekt Red"
}`;

var json2 = `{
    "nome": "The Legend of Zelda: Breath of the Wild",
    "genero": "Gênero <br> Ação e aventura com elementos de mundo aberto e exploração.",
    "sinopse": "Sinopse <br> Link acorda de um sono profundo para enfrentar uma calamidade antiga e salvar o reino de Hyrule.",
    "plataformas": "Plataformas <br> Nintendo Switch, Wii U",
    "imagem": "<img src='https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador, com vastas áreas para explorar.",
    "estudio": "Estúdio <br> Nintendo"
}`;

var json3 = `{
    "nome": "Bayonetta",
    "genero": "Gênero <br> Hack and slash com combate rápido e estilizado.",
    "sinopse": "Sinopse <br> Bayonetta, uma bruxa com habilidades sobrenaturais, luta contra anjos e demônios para descobrir seu passado.",
    "plataformas": "Plataformas <br> PC, PlayStation 3, Xbox 360, Nintendo Switch",
    "imagem": "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmABQDGeiHDs74y8ACie_T4LPS30C0A6pUGQ&s' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador.",
    "estudio": "Estúdio <br> PlatinumGames"
}`;

var json4 = `{
    "nome": "Devil May Cry 5",
    "genero": "Gênero <br> Hack and slash com combate dinâmico e estilizado.",
    "sinopse": "Sinopse <br> Dante e Nero enfrentam uma invasão demoníaca enquanto buscam por vingança e redenção.",
    "plataformas": "Plataformas <br> PC, PlayStation 4, Xbox One",
    "imagem": "<img src='https://image.api.playstation.com/vulcan/ap/rnd/202009/1710/UUnpHLJqLAIJX5HioswiPuAm.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador.",
    "estudio": "Estúdio <br> Capcom"
}`;

var json5 = `{
    "nome": "God of War Ragnarok",
    "genero": "Gênero <br> Ação e aventura com elementos de mitologia nórdica.",
    "sinopse": "Sinopse <br> Kratos e seu filho Atreus enfrentam novas ameaças enquanto exploram o mundo da mitologia nórdica.",
    "plataformas": "Plataformas <br> PlayStation 4, PlayStation 5",
    "imagem": "<img src='https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador.",
    "estudio": "Estúdio <br> Santa Monica Studio"
}`;

var json6 = `{
    "nome": "The Last of Us",
    "genero": "Gêneros <br> Ação e aventura com elementos de sobrevivência e narrativa profunda.",
    "sinopse": "Sinopse <br> Joel e Ellie lutam para sobreviver em um mundo pós-apocalíptico infestado por criaturas infectadas.",
    "plataformas": "Plataformas <br> PlayStation 3, PlayStation 4, PC",
    "imagem": "<img src='https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador.",
    "estudio": "Estúdio <br> Naughty Dog"
}`;

var json7 = `{
    "nome": "Splatoon 2",
    "genero": "Gêneros <br> Tiro em terceira pessoa com foco em batalhas de tinta e estratégia.",
    "sinopse": "Sinopse <br> Equipes de Inkling competem para cobrir o máximo de área possível com tinta durante batalhas frenéticas.",
    "plataformas": "Plataformas <br> Nintendo Switch",
    "imagem": "<img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/splatoon-2/5/55/Splatoon2.jpg' width='300px'>",
    "quantosJogadores": "Jogadores <br> Multiplayer local e online.",
    "estudio": "Estúdio <br> Nintendo"
}`;

var json8 = `{
    "nome": "Minecraft",
    "genero": "Gêneros <br> Sandbox de construção e sobrevivência com mundo aberto e pixelado.",
    "sinopse": "Sinopse <br> Os jogadores exploram um mundo gerado proceduralmente, coletam recursos e criam suas próprias construções e aventuras.",
    "plataformas": "Plataformas <br> PC, PlayStation 4, Xbox One, Nintendo Switch, mobile e outras.",
    "imagem": "<img src='https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png' width='300px'>",
    "quantosJogadores": "Jogadores <br> Multiplayer local e online.",
    "estudio": "Estúdio <br> Mojang Studios"
}`;

var json9 = `{
    "nome": "Hollow Knight",
    "genero": "Gêneros <br> Metroidvania com combate desafiador e exploração.",
    "sinopse": "Sinopse <br> O Cavaleiro explora um vasto e misterioso reino subterrâneo enquanto enfrenta inimigos e descobre segredos.",
    "plataformas": "Plataformas <br> PC, PlayStation 4, Xbox One, Nintendo Switch",
    "imagem": "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsDQDH184s94zjVLP7jO6K7dhpA5FcslDxg&s' width='300px'>",
    "quantosJogadores": "Jogadores <br> Principalmente um jogador.",
    "estudio": "Estúdio <br> Team Cherry"
}`;

// Conversão dos dados
var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);
var data7 = JSON.parse(json7);
var data8 = JSON.parse(json8);
var data9 = JSON.parse(json9);

// Funções para exibir informações dos jogos
function apertar1() {
    document.getElementById('imagem').innerHTML = data1.imagem;
    document.getElementById('nome').innerHTML = data1.nome;
    document.getElementById('genero').innerHTML = data1.genero;
    document.getElementById('sinopse').innerHTML = data1.sinopse;
    document.getElementById('plataformas').innerHTML = data1.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data1.quantosJogadores;
    document.getElementById('estudio').innerHTML = data1.estudio;
}

function apertar2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('nome').innerHTML = data2.nome;
    document.getElementById('genero').innerHTML = data2.genero;
    document.getElementById('sinopse').innerHTML = data2.sinopse;
    document.getElementById('plataformas').innerHTML = data2.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data2.quantosJogadores;
    document.getElementById('estudio').innerHTML = data2.estudio;
}

function apertar3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('nome').innerHTML = data3.nome;
    document.getElementById('genero').innerHTML = data3.genero;
    document.getElementById('sinopse').innerHTML = data3.sinopse;
    document.getElementById('plataformas').innerHTML = data3.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data3.quantosJogadores;
    document.getElementById('estudio').innerHTML = data3.estudio;
}

function apertar4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('nome').innerHTML = data4.nome;
    document.getElementById('genero').innerHTML = data4.genero;
    document.getElementById('sinopse').innerHTML = data4.sinopse;
    document.getElementById('plataformas').innerHTML = data4.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data4.quantosJogadores;
    document.getElementById('estudio').innerHTML = data4.estudio;
}

function apertar5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('nome').innerHTML = data5.nome;
    document.getElementById('genero').innerHTML = data5.genero;
    document.getElementById('sinopse').innerHTML = data5.sinopse;
    document.getElementById('plataformas').innerHTML = data5.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data5.quantosJogadores;
    document.getElementById('estudio').innerHTML = data5.estudio;
}

function apertar6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('nome').innerHTML = data6.nome;
    document.getElementById('genero').innerHTML = data6.genero;
    document.getElementById('sinopse').innerHTML = data6.sinopse;
    document.getElementById('plataformas').innerHTML = data6.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data6.quantosJogadores;
    document.getElementById('estudio').innerHTML = data6.estudio;
}

function apertar7() {
    document.getElementById('imagem').innerHTML = data7.imagem;
    document.getElementById('nome').innerHTML = data7.nome;
    document.getElementById('genero').innerHTML = data7.genero;
    document.getElementById('sinopse').innerHTML = data7.sinopse;
    document.getElementById('plataformas').innerHTML = data7.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data7.quantosJogadores;
    document.getElementById('estudio').innerHTML = data7.estudio;
}

function apertar8() {
    document.getElementById('imagem').innerHTML = data8.imagem;
    document.getElementById('nome').innerHTML = data8.nome;
    document.getElementById('genero').innerHTML = data8.genero;
    document.getElementById('sinopse').innerHTML = data8.sinopse;
    document.getElementById('plataformas').innerHTML = data8.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data8.quantosJogadores;
    document.getElementById('estudio').innerHTML = data8.estudio;
}

function apertar9() {
    document.getElementById('imagem').innerHTML = data9.imagem;
    document.getElementById('nome').innerHTML = data9.nome;
    document.getElementById('genero').innerHTML = data9.genero;
    document.getElementById('sinopse').innerHTML = data9.sinopse;
    document.getElementById('plataformas').innerHTML = data9.plataformas;
    document.getElementById('quantosJogadores').innerHTML = data9.quantosJogadores;
    document.getElementById('estudio').innerHTML = data9.estudio;
}
