/* const estudante = {
  nome: "damian",
  sobrenome: "martinez",
  numeroMatricula: 12345,
  notasSemestre: [8,10]
}

console.log(estudante.nome);

estudante.modulo = "Javascript";
console.log(estudante.modulo);

console.log(estudante.nome);
console.log(estudante.notasSemestre[1]);


// espalhamento

const novoEstudante = {
  ...estudante,
  nome: "Astrodev",
  notasSemestre: [...estudante.notasSemestre,9],
  modulo: "HTML"
}

console.log(novoEstudante);
console.log(novoEstudante.notasSemestre);


// criando array e adicionando aos objetos

// const estudantesLabenu = [estudante,novoEstudante];
const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(novoEstudante);

console.log(estudantesLabenu[0]);


 */
// exercício fixacao objetos

/* const nome = prompt("Qual o seu nome?");
const formaPagamento = prompt("Qual a forma de pagamento?");
const endereco = prompt("Qual o seu endereço?");


const carrinho = {
  nome: nome,
  formaPagamento: formaPagamento ,
  endereco: endereco
}

console.log(carrinho);

const quantidadeItens = prompt("Quantos itens quer adicionar no carrinho?");

var arrayCompras = [];

for(let i=0; i< quantidadeItens;i++){
  const nomeProduto = prompt("Qual o nome do produto?");
  const preco = prompt("Qual o preço do produto?");
  const quantidade = prompt("Quantas unidades?");

  const compras = {
    nomeProduto: nomeProduto,
    preco: preco,
    quantidade: quantidade
  }  
  arrayCompras.push(compras);
}

carrinho.compras = arrayCompras;

console.log(carrinho);

// imprimindo quantidade de compras:
console.log(carrinho.compras.length);


// copiando para caso seja compra presente.
const ePresente = prompt("é para presente?");
if(ePresente.toLowerCase = "sim" ){
  const carrinhoPresente ={
    ...carrinho,
    nome : prompt("Digite o nome da pessoa para quem quer dar o presente"),
    formaPagamento : "cartão presente"  
  }
  console.log(carrinhoPresente);
}

console.log(carrinho); */

/* 
let i = 50000;
let f = i.toLocaleString('pt-br',{style:'currency', currency:'BRL'});

console.log(f);


//
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong..."); */
//}


/* 
const arrayLength = Number(prompt("Quantas notas deseja digitar para saber a média?"));
const arrayNotas = [];
let soma=0;

for(let i=0; i<arrayLength;i++){
  arrayNotas.push(Number(prompt("Digite uma nota")));
}
console.log(arrayNotas);

for(let j=0; j<arrayLength;j++ ){
  soma += arrayNotas[j];
}
console.log(soma);

const media = soma/(arrayLength);
console.log("media",media);
const aprovou = media>=5 && media<=10;

if(aprovou){
  console.log("Aprovou");
}else if(media>=3 && media<=10){
  console.log("Recuperação");
}else if(media<3 && media>=0){
  console.log("Reprovou");
}else{
  console.log("Notas inválidas");
}
 */


// exercício fixação condicionais 2
/* 
const numero = Number(prompt("Digite um número divisível por 2 e 3 para ganhar"));

if(numero % 2 === 0 && numero % 3 === 0){
//  numero === 30 ? console.log(`UFA, ACERTEI!`): console.log(`PERDI!`);
  switch(numero){
    case 6:
      console.log(`Boa, número 6!`);
      break;
    case 12:
      console.log(`Excelente, uma dúzia!`);
      break;
    case 18:
      console.log(`Ótimo, 6 vezes 3 = 18!`);
      break;
    case 24:
      console.log(`Hmm , kkk!`);
      break;
    case 30:
      console.log(`Número perfeito!`);
      break;
    default:
      console.log(`O número é maior que 30 ou menor que 6.`);
  }
}else{
  console.log(`O número ${numero} não cumpre as condições!`);
}
 */



// Exercícios fixação laços 1

// exercício 1
/* let tipoUsuario = prompt('Digite qual o seu status de usuário:\nA - Administrador \nB - Usuário comum \nC - Usuário assinante').toUpperCase();

while(tipoUsuario !== 'A'){
  alert(`Acesso negado!`);
  tipoUsuario = prompt('Digite qual o seu status de usuário:\nA - Administrador \nB - Usuário comum \nC - Usuário assinante').toUpperCase();
}

(tipoUsuario === 'A') ? console.log("Boas-vindas admin!"): console.log("Erro na identificação do usuário! Tente novamente"); */


// exercício 2
/* const numero = Number(prompt(`Digite o número para aparecer a tabuada dele.`));

console.log(`TABUADA DO NÚMERO ${numero}`);
for(let i = 1 ; i <= 10 ; i++){
  console.log(`${numero} * ${i} = ${numero * i}`);
} */


// exercício 3

/* const arrayToUpperCase = (array) => {
  for(let i = 0; i < array.length ; i++){
    array[i] = array[i].toUpperCase();
  }
}

const arrayFrutas = [];
const numeroFrutas = Number(prompt(`Quantas frutas deseja adicionar?`));

for(let i = 0 ; i < numeroFrutas ; i++){
  arrayFrutas.push(prompt("Digite uma fruta."));
}
console.log(arrayFrutas);
arrayToUpperCase(arrayFrutas);
console.log(arrayFrutas);
 */



// exercícios extras

//-----------------------------------------------------------------------------------------------
// EXERCICIOS VARIAVEIS -------------------------------
/* exercício 1
let nome;
let idade;
console.log(typeof nome, typeof idade);

nome = prompt("Digite o seu nome");
idade = Number(prompt("Digite a sua idade"));

console.log(`Olá ${nome}, você tem ${idade} anos`); */

/*Exercício 2
let pergunta1 = "Você gosta de gatos?";
let pergunta2= "Você gosta de cachorros?";
let pergunta3 = "Você gosta de vacas?";

let resposta1=prompt(pergunta1);
let resposta2=prompt(pergunta2);
let resposta3=prompt(pergunta3);

console.log(pergunta1, resposta1);
console.log(pergunta2, resposta2);
console.log(pergunta3, resposta3);*/

/* Exercício 3
let cao = 'Mingau';
let gato = 'Bidu';
let aux = cao;
cao = gato;
gato = aux;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau */


/* Exercício 4 
const resposta = confirm('Deseja ser redirecionado para a página da Labenu?');
console.log('Valor da variável resposta', resposta); */


/* Exercício 5 

const mensagem = 'Você está dentro do site da Labenu';
alert(mensagem); */


/* Exercício 6 e 7

const nomeUsuario = 'Damián';
let ideiaDoDia = 'Something';
let dataAtual = 'Data x'; 

console.log(`Olá ${nomeUsuario}, a sua ideia para o dia ${dataAtual} é ${ideiaDoDia}`);*/

/* Desafio 

const numero1 = Number(prompt('Digite um número:'));
const numero2 = Number(prompt('Digite um número:'));

const soma = (numero1,numero2) => {
  return numero1 + numero2;
}

const multiplicacao = (numero1,numero2) => {
  return numero1 * numero2;
}

console.log(`O primeiro número somado ao segundo número resulta em ${soma(numero1,numero2)}`);
console.log(`O primeiro número multiplicado ao segundo número resulta em ${multiplicacao(numero1,numero2)}`); */

//-----------------------------------------------------------------------------------------------
// EXERCICIOS VARIAVEIS -------------------------------

/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */


/* let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */


/* Exercício 1 */
/* const idadeUsuario = Number(prompt('Digite a sua idade:'));
const idadeMelhorAmigo = Number(prompt('Digite idade do seu melhor amigo(a)'));

console.log(`Sua idade é maior que a do seu melhor amigo - ${idadeUsuario > idadeMelhorAmigo}`);
console.log(`Diferente de idade entre vc e seu amigo: ${(Math.abs(idadeUsuario-idadeMelhorAmigo))}`); */

/* Exercício 2 */
/* const numero = Number(prompt('Digite um número par:'));
(numero % 2 === 0)? console.log("Número par"): console.log("Número ímpar"); */


/* Exercício 3 */
/* const idadeUsuario = Number(prompt("Digite a sua idade em anos:"));
console.log("Idade em meses:" , idadeUsuario * 12);
console.log("Idade em meses:" , idadeUsuario * (12*30));
console.log("Idade em meses:" , idadeUsuario * (12*30*24)); */

/* Exercício 4 */
/* const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Digite outro número'));

console.log(`Número 1: ${num1} \nNúmero 2: ${num2}  `)

if(!isNaN(num1) && !isNaN(num2)){
  console.log(`O primeiro número é maior que o segundo: ${num1>num2}`);
  console.log(`O primeiro número é igual que o segundo: ${num1===num2}`);
  console.log(`O primeiro número é divisível pelo segundo: ${num1%num2 === 0}`);
  console.log(`O segundo número é divisível pelo segundo: ${num2%num1 === 0}`);
}else{
  console.log("Você não digitou números");
} */

/* Exercício Desafio 1 */
/* const farenheitToKelvin = (graus) => {
  const kelvin = (graus - 32) * (5/9) + 273.15;
  return kelvin
}

const celsiusToFarenheit = (graus) => {
  const farenheit = graus * (9/5) + 32;
  return farenheit
}

console.log(`77 graus F em K: ${farenheitToKelvin(77)}`);
console.log(`80 graus C em F: ${celsiusToFarenheit(80)}`);
const temperaturaEmCelsius = Number(prompt('Insira a temperatura em graus celsius'));
console.log(`Graus C em F e K respectivamente: \nF: ${celsiusToFarenheit(temperaturaEmCelsius)} \nK: ${farenheitToKelvin(celsiusToFarenheit(temperaturaEmCelsius))}`);*/

/* Exercício Desafio 2 */
/* const quilowattsConsumido = Number(prompt("Insira seu consumo em quilowatts-hora"));
const custoTotalEnergia = quilowattsConsumido * 0.05;
const custoComDesconto = custoTotalEnergia * 0.85;

console.log(`Para o consumo de ${quilowattsConsumido} o custo total é de ${custoTotalEnergia}. Valor com desconto de 15% é ${custoComDesconto}.`); */

/* Exercício Desafio 3 */
/* 
const convertLbToKg = (libras) => {
  return libras * 0.453592;
}

const convertOzToKg = (onças) => {
  return onças * 0.02834955374248;
}

const convertMiToMt = (milhas) => {
  return milhas * 1609.34;
}

const convertPeToMt = (pes) => {
  return pes * 0.3047992424196;
}

const convertGalToLit = (galoes) => {
  return galoes * 3.785;
}

const convertXicToLit = (xicaras) => {
  return xicaras * 0.24;
}

console.log(`Converter 20lb a kg: ${convertLbToKg(20).toFixed(2)}`);
console.log(`Converter 10.5oz a kg: ${convertOzToKg(10.5).toFixed(2)}`);
console.log(`Converter 100mi a mt: ${convertMiToMt(100).toFixed(2)}`);
console.log(`Converter 50ft a mt: ${convertPeToMt(50).toFixed(2)}`);
console.log(`Converter 103.56 gal a lt: ${convertGalToLit(103.56).toFixed(2)}`);
console.log(`Converter 450xic a lt: ${convertXicToLit(450).toFixed(2)}`);
 */


//-----------------------------------------------------------------------------------------------
// EXERCÌCIOS STRINGS  ________________________________________________

/*Exercício de interpretação 1*/
/* let string
console.log('a. ', string)

string = null
console.log('b. ', string)

string = "paralelepípedo"
console.log('c. ', string.length)

let i = 0
console.log('d. ', string[i])


const valor = string[i+6]
console.log('e. ', valor)

i = 13
console.log('f. ', string[i])

i = 14
console.log('g. ', string[i])
 */


/* exercício interpretação 2 */

/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */



/* Exercício 1 */

/* const nomeUsuario = prompt("Digite o seu nome");
const emailUsuario = prompt("Digite o seu email");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeUsuario}!`);



/* Exercício 2, 3 , 4 e 5 */
/* 
const usuario = prompt("Digite o seu usuário").toLowerCase();
const senha = prompt("Digite a sua senha");

console.log(senha.length);
console.log(usuario);

const emailValido = emailUsuario.includes("@");
(emailValido)? console.log("e-mail válido!"): console.log("e-mail inválido!");


if(emailValido){
  const posicaoDominio = emailUsuario.indexOf("@");
  const emailDominioNovo = emailUsuario.substring(0,posicaoDominio + 1) + "labenu.com";
  console.log(emailDominioNovo);
} */

//-----------------------------------------------------------------------------------------------
/* Exercícios de Array ----------------------------------------------------------- */ 
 
/* Exercício 1 */

/* const listaDeTarefas = [];

for(let i = 0; i<3;i++){
  listaDeTarefas.push(prompt("Digite uma tarefa que precisa realizar"));
}


console.log("LISTA DE TAREFAS")
for(let i = 0; i<3 ; i++){
  console.log(i + 1 , listaDeTarefas[i]);
}

const apagarTarefa = () => {
  const tarefa = Number(prompt("Qual tarefa deseja apagar?"));
  listaDeTarefas.splice(tarefa-1,1);

  console.log("LISTA DE TAREFAS")
  for(let i = 0; i<listaDeTarefas.length ; i++){
    console.log(i + 1 , listaDeTarefas[i]);
  }
}

apagarTarefa(); */



/*Exercício 2 */

// Funções
/* const imprimirArray = (array) => {
  console.log("ESSAS SÃO AS MINHAS COMIDAS FAVORITAS!");
  for (let i = 0 ; i< array.length;i++){
    console.log(i,array[i]);
  }
}

const tamanhoArray = (array) => {
  return array.length;
}

const addElementoArray = (array,elemento) => {
  if(!array.includes(elemento)){
    array.push(elemento);
    console.log("Comida adicionada à lista com sucesso!");
  }else{
    console.log("Comida já está na lista!")
  }
}

const trocarComida = (array,novoItem,itemADeletar,indexItemADeletar) => {
  if(array.includes(itemADeletar)){
    console.log("Item deletado:", array[indexItemADeletar]);
    array[indexItemADeletar] = novoItem;
  }else{
    console.log("Item não existe!");
  }
}


// Programa
const comidasFavoritas = [];

for(let i = 0 ; i<5 ; i++){
  comidasFavoritas.push(prompt("Digite uma comida favorita!").toLowerCase());
}

imprimirArray(comidasFavoritas);
tamanhoArray(comidasFavoritas);

const outraComidaFavorita = prompt("Digite outra comida favorita").toLowerCase();
addElementoArray(comidasFavoritas,outraComidaFavorita);
imprimirArray(comidasFavoritas);

const trocaDeComida = prompt("Qual comida deseja trocar?").toLowerCase();
const indexComidaADeletar = comidasFavoritas.indexOf(trocaDeComida);
const novaComida = prompt("Qual comida deseja inserir?").toLowerCase();

trocarComida(comidasFavoritas,novaComida,trocaDeComida,indexComidaADeletar);
imprimirArray(comidasFavoritas); */


/* Exercício desafio 1 */

/* const frase = prompt("Digite uma frase!");

const array = frase.split(" ");

console.log(array); */

/* Exercício desafio 2 */

/* const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const encontraFruta = prompt("Encontre uma frutaß no array?");

if(arrayFrutas.includes(encontraFruta)){
  console.log("Fruta está no array:");
  console.log("Indice: ", arrayFrutas.indexOf(encontraFruta));
  console.log("Tamanho do array:",arrayFrutas.length);
}else{
  console.log("Fruta não encontrada. Tente de novo!");
} */

//-----------------------------------------------------------------------------------------------
// EXERCÌCIOS OBJETOS _____----------------------------------------------------------

// Exercício 1 interpretação
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


// Exercício 2 interpretação
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// Exercício 3 interpretação

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

// Exercício 1
/* 
const imprimirObjeto = (objeto) => {
  console.log(objeto);
}

const pessoa ={
  nome:"",
  apelidos:[]
};

pessoa.nome = prompt("Digite o seu nome.");
for(let i = 0; i<3; i++){
  pessoa.apelidos.push(prompt("Digite um apelido"));
}

imprimirObjeto(pessoa);

/* Exercício 1.2
const pessoa2 = {
  ...pessoa,
  apelidos:[]
};

for(let i = 0; i<3; i++){
  pessoa2.apelidos.push(prompt("Digite um apelido"));
}

imprimirObjeto(pessoa2);
 */



// Exercício 2
/* 
const pessoa1 = {
  nome:"Damián",
  idade: 35,
  profissao: "Programador"
};

const pessoa2 = {
  nome:"Brenda",
  idade: 29,
  profissao: "Gerente"
};

const objetoToArray = (objeto) => {
  const array = [objeto.nome,objeto.nome.length ,objeto.idade, objeto.profissao, objeto.profissao.length];
  return array;
}

console.log(objetoToArray(pessoa1)); */

// Exercício 3

/* const carrinho = [];

const poeNoCarrinho = (fruta,carrinho) => {
  carrinho.push(fruta);
  console.log("Fruta adicionada no carrinho:" , carrinho);
};

const disponibilidadeItem = (fruta) => {
  fruta.disponibilidade ? fruta.disponibilidade = false : fruta.disponibilidade = true;
  console.log(fruta);
}

const maca = {
  nome:"maçã",
  disponibilidade: true
};

const banana = {
  nome:"banana",
  disponibilidade: true
};

const morango = {
  nome:"morango",
  disponibilidade: true
};

poeNoCarrinho(maca,carrinho);
poeNoCarrinho(banana,carrinho);
poeNoCarrinho(morango,carrinho);

disponibilidadeItem(morango) */



// Desafio Exercício 1

/* const getData = () => {
    const dadosPessoais = {
    nome: prompt("Digite seu nome."),
    idade: Number(prompt("Digite sua idade.")),
    profissao: prompt("Digite sua profissão.")
  };

  console.log(`DADOS PESSOAIS \nNome: ${dadosPessoais.nome} \nIdade: ${dadosPessoais.idade} \nProfissão: ${dadosPessoais.profissao}`)
}

getData(); */



// Desafio Exercício 2

/* const filme1 = {
  nome: "Forrest Gump",
  anoLancamento: 2000
};

const filme2 = {
  nome: "Avatar",
  anoLancamento: 2000
};

const comparaFilmes = (filme1,filme2) => {
  console.log(`O primeiro filme foi lançado antes do segundo? : ${filme1.anoLancamento < filme2.anoLancamento}`);
  console.log(`O primeiro filme foi lançado no mesmo ano segundo? : ${filme1.anoLancamento === filme2.anoLancamento}`);
}

comparaFilmes(filme1,filme2); */


// EXERCICIOS CONDICIONAIS

// Exercício 1

/* const idade = Number(prompt(`Qual a sua idade?`));

(idade>=18)? console.log("Você pode dirigir"): console.log("Você não pode dirigir");
 */



// Exercício 2
/* const turnoAluno = prompt("Qual o seu turno? Digite M, V ou N");

/* if(turnoAluno === 'M'){
  console.log("Bom dia!");
}else if(turnoAluno === 'V'){
  console.log("Boa tarde!");
}else if(turnoAluno === 'N'){
  console.log("Boa noite!");
}else{
  console.log("Turno inválido!");
}


// exercício 3
switch(turnoAluno){
  case 'M':
    console.log("Bom dia!");
    break;
  case 'V':
    console.log("Boa tarde!");
    break;
  case'N':
    console.log("Boa noite!");
    break;
  default:
    console.log("Turno inválido!");
} */


// Exercício 4 e Desafio 1
/*  const generoFilme = prompt(`Qual o gênero do filme?`).toLowerCase();
const valorIngresso = Number(prompt(`Qual o valor do ingresso?`));

if(generoFilme === 'fantasia' && valorIngresso < 15){
  const lanchinho = prompt("Qual lanchinho vai comprar?");
  console.log(`Bom filme, aproveite a/o seu/sua ${lanchinho}`);

}else{
  console.log("Escolha outro filme =(");
} */ 



 
// Desafio 2

// função para encontrar o valor do ingresso 
/*
const calculaValorIngresso = (tipoDeJogo,etapa,categoria) => {
  switch((etapa === 'sf' || etapa === 'dt' || etapa === 'fi') && (categoria >=1 && categoria <=4)){
    case etapa === 'sf' && categoria === 1:
      return valorPorTipoJogo(tipoDeJogo,1320);
      break;
    case etapa === 'sf' && categoria === 2:
      return valorPorTipoJogo(tipoDeJogo,880);
      break;
    case etapa === 'sf' && categoria === 3:
      return valorPorTipoJogo(tipoDeJogo,550);
      break;
    case etapa === 'sf' && categoria === 4:
      return valorPorTipoJogo(tipoDeJogo,220);
      break;
    case etapa === 'dt' && categoria === 1:
      return valorPorTipoJogo(tipoDeJogo,660);
      break;
    case etapa === 'dt' && categoria === 2:
      return valorPorTipoJogo(tipoDeJogo,440);
      break;
    case etapa === 'dt' && categoria === 3:
      return valorPorTipoJogo(tipoDeJogo,330);
      break;
    case etapa === 'dt' && categoria === 4:
      return valorPorTipoJogo(tipoDeJogo,170);
      break;
    case etapa === 'fi' && categoria === 1:
      return valorPorTipoJogo(tipoDeJogo,1980);
      break;
    case etapa === 'fi' && categoria === 2:
      return valorPorTipoJogo(tipoDeJogo,1320);
      break;
    case etapa === 'fi' && categoria === 3:
      return valorPorTipoJogo(tipoDeJogo,880);
      break;
    case etapa === 'fi' && categoria === 4:
      return valorPorTipoJogo(tipoDeJogo,330);
      break;
    }
}

// função que devolve valor caso o tipo de jogo seja internacional ou doméstico
const valorPorTipoJogo = (tipoDeJogo,valor) => {
  if(tipoDeJogo === 'do'){
    return valor;
  }else if(tipoDeJogo === 'in'){
    return valor / 4.10;
  }else{
    console.log("Tipo de jogo inválido!");
    return 0;
  }
}

// função para impressão de bilhete
const imprimeBilhete = (nome,tipoJogo,etapaJogo,categoria,qtdeIngressos,valorIngresso) => {
  const cifrao = tipoJogo === 'do' ? 'R$' : 'US$';
  const tipoDeJogo = tipoJogo === 'do' ? 'Nacional' : 'Internacional';
  let etapa = '';

  if(etapaJogo === 'sf'){
    etapa = 'Semifinal';
  }else if(etapaJogo === 'dt'){
    etapa = 'Terceiro Lugar';
  }else if(etapaJogo === 'fi'){
    etapa = 'Final';
  }else{
    etapa = 'Indefinido';
  }

  console.log(`--- Valor da compra ---`);
  console.log(`Nome do cliente: ${nome}`);
  console.log(`Tipo de jogo: ${tipoDeJogo}`);
  console.log(`Etapa do jogo: ${etapa}`);
  console.log(`Categoria: ${categoria}`);
  console.log(`Quantidade de Ingressos: ${qtdeIngressos} ingressos`);
  console.log(`--- Valores ---`);
  console.log(`Valor do ingresso: ${cifrao} ${valorIngresso.toFixed(2)}`);
  console.log(`Valor total: ${cifrao} ${(valorIngresso * qtdeIngressos).toFixed(2)}`);
}

// programa

const nomeCompleto = prompt("Digite o seu nome completo");
const tipoDeJogo = prompt("Digite o tipo de jogo? IN para internacional / DO para doméstico").toLowerCase();
const etapaDoJogo = prompt("Digite a etapa? SF Semifinal / DT Terceiro Lugar / FI Final").toLowerCase();
const categoria = Number(prompt("Digite a categoria: 1 / 2 / 3 / 4"));
const numeroIngressos = Number(prompt("Quantidade de ingressos?"));
const valorIngresso = calculaValorIngresso(tipoDeJogo,etapaDoJogo,categoria);

imprimeBilhete(nomeCompleto,tipoDeJogo,etapaDoJogo,categoria,numeroIngressos,valorIngresso);
*/


//-----------------------------------------------------------------------------------------------
// EXERCICIOS DE LAÇOS - ESTRUTURAS DE REPETIÇÃO

// Exercício 1 de interpretação de código.
/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i  // somando os numeros do 0 até 4, não inclui o número 5.
}
console.log(valor)   */

// Exercício 2 de intepretação de código.
/*  const lista = [21, 11, 42, 15, 18, 19, 11, 13, 25, 27, 10];
 let index = 0;
for (let numero of lista) {
	if (numero > 18) {
		console.log(`${numero} e o indice é ${index}`);
	}
	index += 1;
} */


// exercício 2 de interpretação de código.
/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}// se digitar 4 imprimira:
/* *
**
***
**** */ 



// EXERCÍCIO 1
/* console.log(`PROGRAMA DE CADASTRO DE ANIMAIS DE ESTIMAÇÃO`);
// função captura dados de bichinhos
const capturaDadosBichinhos = (qtdeBichinhos,array) => {
	if(qtdeBichinhos > 0){
		console.log(`Digite o nome dos bichinhos`);
		for(let i = 0;i < qtdeBichinhos;i++){
			nomeBichinhos.push(prompt(`Digite o nome do bichinho`));
		}
	} else if(qtdeBichinhos === 0){
		console.log(`Que pena! Você pode adotar um pet!`);
	} else{
		console.log(`Quantidade inválida`);
	}
}

const impressaoDadosBichinhos = (array) => {
	if(array.length>0){
		console.log(`Nome dos seus bichinhos!`);
		for(let i = 0;i < array.length; i++){
			console.log(`${i+1}. ${array[i]}`);
		}
	}else{
		console.log(`Sem dados para mostrar.`);
	}
}

const qtdeBichinhos = Number(prompt(`Quantos bichinhos de estimação você tem?`));
const nomeBichinhos = [];

capturaDadosBichinhos(qtdeBichinhos,nomeBichinhos);
impressaoDadosBichinhos(nomeBichinhos); */

// EXERCÍCIO 2
// função imprimir array
const imprimeArray = (array) => {
	console.log(`Impressão dos elementos do array`);
	for(let i of array){
		console.log(i);
	}
}

// função imprime os números dividido por 10
const imprimeNumerosDivididos = (array, numeroDivisor) => {
	console.log(`Impressão dos elementos do array divididos por ${numeroDivisor}`);
	for(let numero of array){
		console.log(`Numero ${numero} dividido por ${numeroDivisor} = ${numero/numeroDivisor}`);
	}
}

// função que cria um array de numeros pares a partir de um array passado pelo usuário
const criaArrayPares = (array) => {
	const arrayPares = [];
	console.log(`Criar e imprime array de números pares a partir de outro array`);
	for(let numero of array){
		if(numero % 2 === 0){
			arrayPares.push(numero);
		}
	}
	imprimeArray(arrayPares);
}

// função que cria strings mostrando indice e valor do array
const arrayEmString = (array) => {
	const arrayStrings = [];
	for(index in array){
		arrayStrings.push(`O elemento do índex ${index} é: ${array[index]}`);
	}
	imprimeArray(arrayStrings);
}


// PROGRAMA
const arrayNumeros = [30,12,11,6,5,14,3,29,18,98,103,1];

imprimeArray(arrayNumeros);
imprimeNumerosDivididos(arrayNumeros,10);
criaArrayPares(arrayNumeros);
arrayEmString(arrayNumeros);