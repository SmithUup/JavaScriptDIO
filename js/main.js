// var nome = "SmithUup";
// var idade = 30;
// var idade2 = 10;
// var frase = "As minas lacram";
// alert(nome + " tem " + idade + " Anos");
// alert(idade + idade2);
// console.log(idade);
// console.log(idade2);
// console.log(frase);
//Replace troca uma palavra da string por outra, se a palavra não for encontrada ele mantem a strig orginal.
// console.log(frase.replace("lacram", "Fecham"));
// alert(frase.replace('lacram','Pirão'));

//Convertendo as letras para maiusculo.
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

//array
var lista = ["pera", "uva", "banana"];
console.log(lista);
console.log(lista[1]);
//Adicionando algo na lista
lista.push("Maçã");
console.log(lista);
//Retirando o último elemento da lista.
lista.pop()
console.log(lista);
//Tamanho da array
console.log(lista.length);
//Invertendo a lista
console.log(lista.reverse());
//Convertendo um array para string
console.log(lista.toString());
//Join, transforma em string e escolhe o separador. 
console.log(lista.join(" - "));

//Dicionário, tipo JSON.
// var nomes = {nome:"Smith", idade:30};
// console.log(nomes);
// console.log(nomes.nome);

//Arrays de dicionários
// var cadastro = [{nome:"Smith", idade:30}, {nome:"Beto", idade:33}];
// console.log(cadastro[1].nome,idade)

//Condicional
// var idade = prompt("Qual a sua idade?")
// if (idade >= 18)
// {
//     alert("Maior de Idade!");
// }
// else
// {
//     alert("Menor de Idade!");
// }


//Usando While
var count = 0;
while (count <= 5)
{
    console.log(count);
    count++;
}

//Usando FOR
for(count < 0; count <= 15; count++)
{
    console.log(count);
}

//Utilizando datas
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);

//Criando uma função.
// function soma(n1, n2)
// {
//     return n1 + n2;
// }
// alert(soma(5, 10));


// function Troca(frase, nome, nome_nome)
// {
//     return frase.replace(nome, nome_nome)
// }
// alert(Troca("Vai Japão", "Japão", "Brasil"));


// function ValidaIdade(idade)
// {
//     var validar;
//     if (idade >= 18)
//     {
//         validar = true;
//     }
//     else
//     {
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Digite Sua Idade.");
// console.log(ValidaIdade(idade));


//Alerta ao clicar no botão.
function botao()
{
    document.getElementById("tks").innerHTML = "<b>Obrigado por clicar.</b>";
    // console.log(document.getElementById("tks"));
    // alert("Obrigado por clicar!");
}

//Redicionando pra um outra página, opne outra aba, location mesma aba.
function redireionar()
{
    window.open("https://www.tismith.com.br/");
    window.location.href = "https://www.tismith.com.br/";
}

//Trocando um texto por outro.
function OnMouse(elemento)
{
    // document.getElementById("mo").innerHTML = "Vlw queridão!";
    elemento.innerHTML = "Vlw queridão.";
    // alert("Trocar Texto! ");
}

function back(elemento)
{
    // document.getElementById("mo").innerHTML = "Vlw queridão!";
    elemento.innerHTML = "Passe o mouse aqui.";
    // alert("Trocar Texto! ");
}

function load()
{
    alert("Carregando...");
}

//Alterando o texto abaixo da opção escolhida, podemos adicionar outros elementos, até mesmo um formulários para casa opção.
function mudar(elemento)
{
console.log(elemento.value);
if (elemento.value == "1")
{
    document.getElementById("caracas").innerHTML = "<b>Tu escolheu a opção 1</b>";
}
else if (elemento.value == "2")
{
    document.getElementById("caracas").innerHTML = "<b>Tu escolheu a opção 2</b>";
}
else if (elemento.value == "3")
{
    document.getElementById("caracas").innerHTML = "<b>Tu escolheu a opção 3</b>";
}
    
}


