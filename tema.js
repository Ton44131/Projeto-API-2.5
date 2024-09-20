function buscar(){
    //Função que carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/Ton44131/API-jogos/refs/heads/main/dados3.json').then(resposta => resposta.json()).then(corpo => {

        var indentificador = document.getElementById("valor").value

        var encontrado = false;

        corpo.forEach(pessoa => {
            if(indentificador == pessoa.nome){
                //JQUERY
                var linkSite = `<a href="${pessoa.link}">Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('genero').innerHTML = pessoa.genero;
                document.getElementById('sinopse').innerHTML = pessoa.sinopse;
                document.getElementById('plataformas').innerHTML = pessoa.plataformas;
                document.getElementById('quantosJogadores').innerHTML = pessoa.quantosJogadores;
                document.getElementById('estudio').innerHTML = pessoa.estudio;
                document.getElementById('erro').innerHTML = "";
                encontrado = true;
            } 
        })
        if(!encontrado){
            document.getElementById('erro').innerHTML = "Registro Invalido";
        }
        console.log(corpo)
    })
}