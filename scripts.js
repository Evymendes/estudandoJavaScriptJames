window.addEventListener('load', desafioJavaScript);

function desafioJavaScript() {

    var desafio1 = document.querySelector('#desafio1');
    var umInner = desafio1.innerHTML;

    // console.log(desafio1);
    // console.log(umInner);

    var variavelString = umInner.split(" ");
    console.log(variavelString);

    variavelString.forEach(function(elemento){
        var substituir = umInner.replace(/,/g, "").replace('.', "");
        console.log(substituir);
    })
    var sasa = variavelString.forEach(function(elemento){
        return elemento <= 5
    })
        console.log(sasa);

    var filtrar = umInner.filter(value => {
       return value <= 5
    });
    console.log(filtrar);
    
}
/*window.addEventListener('load', mani);

function mani() {

    var listaHTML = document.createElement('ul');
    var body = document.querySelector('body');
    body.appendChild(htmlLista);
    arra.forEach(function(elemento){
        var item = document.createElement('li');
        item.innerHTML = elemento;
        htmlLista.appendChild(item);
    })
    console.log(htmlLista);
}*/



// // só faz alguma coisa quando a tela carregar toda "load", nome da função 'calculadora'
// window.addEventListener('load', calculadora);

// // Calculadora
// function calculadora(){
//     console.log('testando calculadora');

//     var display = document.querySelector("#display");
//     display.value = "" ;

//     var botao7 = document.querySelector("#_7");
//     botao7.addEventListener("click", function(){
//         display.value = display.value + botao7.value;
//     });
//     var botao8 = document.querySelector("#_8");
//     botao8.addEventListener("click", function(){
//         display.value = display.value + botao8.value;
//     });
//     var botao9 = document.querySelector("#_9");
//     botao9.addEventListener("click", function(){
//         display.value = display.value + botao9.value;
//     });
//     var botaoDivisao = document.querySelector("#_divisao");
//     botaoDivisao.addEventListener("click", function(){
//         display.value = display.value + botaoDivisao.value;
//     });
//     var botao4 = document.querySelector("#_4");
//     botao4.addEventListener("click", function(){
//         display.value = display.value + botao4.value;
//     });
//     var botao5 = document.querySelector("#_5");
//     botao5.addEventListener("click", function(){
//         display.value = display.value + botao5.value;
//     });
//     var botao6 = document.querySelector("#_6");
//     botao6.addEventListener("click", function(){
//         display.value = display.value + botao6.value;
//     });
//     var botaoMultiplicao = document.querySelector("#_multiplicacao");
//     botaoMultiplicao.addEventListener("click", function(){
//         display.value = display.value + botaoMultiplicao.value;
//     });
//     var botao1 = document.querySelector("#_1");
//     botao1.addEventListener("click", function(){
//         display.value = display.value + botao1.value;
//     });
//     var botao2 = document.querySelector("#_2");
//     botao2.addEventListener("click", function(){
//         display.value = display.value + botao2.value;
//     });
//     var botao3 = document.querySelector("#_3");
//     botao3.addEventListener("click", function(){
//         display.value = display.value + botao3.value;
//     });
//     var botaoSubtracao = document.querySelector("#_subtracao");
//     botaoSubtracao.addEventListener("click", function(){
//         display.value = display.value + botaoSubtracao.value;
//     });
//     var botao0 = document.querySelector("#_0");
//     botao0.addEventListener("click", function(){
//         display.value = display.value + botao0.value;
//     });
//     var botaoAdicao = document.querySelector("#_adicao");
//     botaoAdicao.addEventListener("click", function(){
//         display.value = display.value + botaoAdicao.value;
//     });    
//  /*operacao de apagar */
//     var botaoApagar = document.querySelector("#_apagar");
//     botaoApagar.addEventListener("click", function(){
//         display.value = display.value.substr(0,(display.value.length -1));
//     });
//  /*operacao de igual */
//     var botaoIgual = document.querySelector("#_igual");
//     botaoIgual.addEventListener("click", function(){

//         var textoDoDisplay = display.value;
//  /*operacao de soma */
//         var exRegularSoma = /\d+\+\d+/; // /\d+(digito)\+(mais)\d+(digito)/
//         var ehSoma = exRegularSoma.test(textoDoDisplay);
//             if(ehSoma){
//                 var operandos = textoDoDisplay.split("+");
//                 var n1 = parseFloat(operandos [0]);
//                 var n2 = parseFloat(operandos[1]);
//                 var resultadoSoma = n1 + n2;
//                 display.value = resultadoSoma;            
//             }
//  /*operacao de subtração */        
//         var exRegular = /\d+\-\d+/;
//         ehSubtracao = exRegular.test(textoDoDisplay);
//             if(ehSubtracao){
//                 var operandos = textoDoDisplay.split("-");
//                 var n1 = parseFloat(operandos [0]);
//                 var n2 = parseFloat(operandos[1]);
//                 var resultadoSubtracao = n1 - n2;
//                 display.value = resultadoSubtracao;  
//             }
//  /*operacao de divisao */
//         var exRegular = /\d+\/\d+/;
//         ehDivisao = exRegular.test(textoDoDisplay)
//             if(ehDivisao){
//                 var operandos = textoDoDisplay.split("/");
//                 var n1 = parseFloat(operandos [0]);
//                 var n2 = parseFloat(operandos[1]);
//                 var resultadoDivisao = n1 / n2;
//                 display.value = resultadoDivisao;
//             }
//  /*operacao de multiplicacao*/
//         var exRegular = /\d+\*\d+/;
//         ehMultiplicao = exRegular.test(textoDoDisplay)
//             if(ehMultiplicao){
//                 var operandos = textoDoDisplay.split("*");
//                 var n1 = parseFloat(operandos [0]);
//                 var n2 = parseFloat(operandos[1]);
//                 var resultadoMultiplicao = n1 * n2;
//                 display.value = resultadoMultiplicao;                
//             }
//     });
// }




// //Maipulação de Strings

// window.addEventListener('load', manipulancaoDeStrings);

// function manipulancaoDeStrings(){
//     console.log("testando... manipulancaoDeStrings");

// 	var elementoComFrase = document.querySelector('#frase');
// 	var frase = elementoComFrase.innerHTML;
//         console.log('Frase: ', frase);
//         console.log('Tipo de Dado: ',typeof frase);
//         console.log('Tamanho da Frase: ', frase.length);
//         console.log('Letra na posição [0]: ', frase[0]);
//         console.log('Letra na posição [5]: ', frase[5]);
//         console.log('Letra Última [frase.length -1]: ', frase[frase.length -1]);

//  	var elementoComResposta = document.querySelector('#resposta');
//  	var resposta = elementoComResposta.innerHTML;
//         console.log('Resposta: ', resposta);

//     var fraseEResposta = frase + ' '+ resposta;
//         console.log('frase e resposta: ', fraseEResposta);

//  	var fraseERespostaConcat = frase.concat(" ", resposta, ' através do concat');
//  	  console.log(fraseERespostaConcat);

//     var _substring0 = frase.slice(10);
//  	  console.log('Pegar de certa palavra em diante: ', _substring0);
//     var _substring1 = frase.slice(8, 25);
//         console.log('Pegar de onde até aonde: ',  _substring1);

//     var indice = frase.indexOf("JavaScript");
//         console.log('Certa palavra começa em qual posição (indexOf): ',  indice);

//     var _substring2 = frase.replace("JavaScript", "Python");
//         console.log("Mudando certa palavra: ", _substring2);

//     var _substring5 = frase.toUpperCase();
//         console.log("Colocando tudo em MAIÙSCULA:" , _substring5);
//     var _substring4 = frase.toLowerCase();
//         console.log("Colocando tudo em minuscula:" , _substring4);    



// // 	console.log('Frase: ', frase);
// // 	console.log('Resposta: ', resposta);
// // 	console.log('Tipo de dado: ', typeof frase);
// // 	console.log('Tamanho da frase: ', frase.length);
// // 	console.log('Tamanho da resposta: ', resposta.length);
// // 	console.log('frase[0]: ', frase[0]);
// // 	console.log('frase[5]: ', frase[5]);

// // 	console.log('indexOf: ', indice);
// // 	_substring = frase.replace("JavaScript", "Python");
// // 	console.log(_substring);
// // 	_substring = frase.

// // 	console.log('Tipo de resosta: ', typeof string);

// // 	console.log('Tamanho da string: ', frase.length);
	
//  }


// /*
// Como criar um array;
// como consultar um tamanho de um array;
// como adicionar um novo elemento em um array: push() unshift();
// como excluir um elemento do array: pop() e shift();
// como modificar o conteúdo de uma posição específica;
// como adicionar elementos em posições arbtrarias: splice(2, 0, "lemon", "Kiwi");
// tirar um pedaço de um array: slice();
// unir arrays: concat();
// como ordenar um array: sort();
// como converter um array em uma string e vice-versa: join();
// apagando um elemento: operador delete;
//   11 Como consultar um tamanho de um array. length
// */

// // envolver o código em uma função para que o cógigo seja executado somente depois da página completamente carregada
// window.addEventListener("load", aprendendoArrays);

// function aprendendoArrays(){
//     console.log("testando...");

//     var frutas = [ "laranja", "maçã", "pera" ];
//     var frutas2 = [ "uva"];
//     var frutas3 = [ "limão", "tomate" ];
// //juntar os vetores
//     var frutas4 = frutas.concat(frutas2 ,frutas3);
//      console.log("Juntando", frutas4);
// //Acrecentando um elemento em certa posição
//     frutas[5] = "jacA";
//      console.log(frutas);
// //Como consultar um tamanho de um array.
//      console.log(frutas.length);
//     console.log(frutas4);
// // ter uma ordem
//     frutas4.sort();
//     console.log("ordem :", frutas4);


//     var listaDeFrutas = document.createElement('ul'); // criei em js uma <ul>
//     var body = document.querySelector('body'); // selecionou o body
//     body.appendChild(listaDeFrutas);//body.innerHTML = 'testando'; anexo a <ul> na <body>
//     var itemDeLista;
//     frutas4.forEach(function(elemento){
//         //console.log(elemento);
//         itemDeFrutas = document.createElement('li');// criar um <li>
//         itemDeFrutas.innerHTML = elemento;// colocar nome da fruta como conteudo da li
//         listaDeFrutas.appendChild(itemDeFrutas); //enexou o <li> criado na <ul>
//         //console.log(itemDeFrutas);
//     })
//     //frutas[10] = "jaca";
//    // frutas.push("jambo");
//     //frutas.unshift("tangerina");
//   // frutas[1] = "mamão";
//    // console.log(frutas);
//     // retirar elemento final da array
//     //frutas.pop();
//     // retirar elemento no inicio da array
//     // frutas.shift();

//     // para inserir diga a posição, quantos elementos excluir, qual inserir
//     frutas.splice(2, 0, "limao", "tomate");
//     console.log(frutas)
//     var frutas2 = frutas.slice(3);
//     console.log(frutas2)
//     console.log(frutas.length);
//     console.log(frutas[2]);

// // array vazio com tanho 15
//     // var numero = new array(15);
//     // console.log(numero);







// //criando um array vazio:
// var listaVazia = new Array();
// var listaVazia = [];
// //criando um array vazio com um tamanho:
// var listaVaziaComTamanho = new Array(15);
// // inserir um valor na array
// var listaVaziaAcrescentando = [];
// listaVaziaAcrescentando.push("Jambo");
// console.log(listaVaziaAcrescentando);
// // inserir um valor na esquerda no array
// listaVaziaAcrescentando.unshift("Tangerina");
// // inserir um valor na direita no array
// listaVaziaAcrescentando.push("Melão");
// listaVaziaAcrescentando.push("Melão");
// // retirar elemento no final do array
// listaVaziaAcrescentando.pop("Melão");
// // retirar elemento do inicio do array
// listaVaziaAcrescentando.shift("Melão");
// // alterar o nome de acordo com uma cesão
// listaVaziaAcrescentando[1] = "MAMÂO";
// // novo elemento no meio da array; (posição, quantos elemento excluir e qual elemento inserir)
// listaVaziaAcrescentando.splice(2, 0, "limão");
// // novo elemento no meio da array; (posição, não excluir elemento e qual elemento inserir)
// listaVaziaAcrescentando.splice(2, 0, "limão", "tomate");
// // novo elemento no meio da array; (posição, excluir  elemento e qual elemento inserir)
// listaVaziaAcrescentando.splice(2, 1, "pera");
// console.log(listaVaziaAcrescentando);
// // retirar um subVelor de um outro vetor de certa posição
// var slicee = listaVaziaAcrescentando.slice(2);
// console.log("slice ", slicee);
// // retirar um subVelor de um outro vetor de certa posição escolhendo varios
// var slicee2 = listaVaziaAcrescentando.slice(2, 4);
// console.log("slice 2 ", slicee2);
// // ordenando
// listaVaziaAcrescentando.sort();
// console.log("ordem :", listaVaziaAcrescentando);
// }


// // maniera objeto literal
// window.addEventListener("load", estudandoObjetos);

// function estudandoObjetos(){
// var ponto = {
//     x: 0,
//     y: 0,
//     andarParaDireita: function(deslocamento = 1){
//         this.x = this.x + deslocamento;
//     }
// };

// var ponto1 = {
//     x: 0,
//     y: 0,
//     andarParaDireita: function(deslocamento = 1){
//         this.x = this.x + deslocamento;
//     }
// };

// console.log(ponto);
// ponto.andarParaDireita(2);
// console.log(ponto);
// ponto.andarParaDireita(5);
// console.log(ponto);
// ponto1.andarParaDireita(5);
// console.log(ponto1);

// // outras 2 maneiras de criar um objeto 
// // função fábrica (chama e retorna o objeto)
// // função construtora

// function createPontoFabrica(x, y){
//     return{
//         x: x,
//         y: y,
//         andarParaDireitaFabrica: function(deslocamento = 1){
//             this.x = this.x + deslocamento;
//         }
//     };
//     }
// //console.log("ponto de fabrica: ", createPontoFabrica);

// var ponto2 = createPontoFabrica(0, 0);
// var ponto3 = createPontoFabrica(2, -7);
// var ponto4 = createPontoFabrica(3, 4);

// console.log("Função Fábrica: ",ponto2);
// console.log(ponto3);
// console.log(ponto4);

// //Função construtora é parecido com a de fabrica
// function criarPontoConstrutora(x, y){
//     this.x = x;
//     this.y = y;
//     this.andarParaDireitaConstrutora = function(deslocamento = 1){
//         this.x = this.x + deslocamento;
//     }
//     }
// // várias possibilidades de criar um ponto
// var ponto2 = new criarPontoConstrutora(0, 0);
// var ponto3 = new criarPontoConstrutora(2, -7);
// var ponto4 = new criarPontoConstrutora(3, 4);

// console.log("Função construtora: ",ponto2);
// console.log(ponto3);
// console.log(ponto4);

// var listaDePontos = new Array();
// listaDePontos.push( new criarPontoConstrutora(1, -1));
// listaDePontos.push( new criarPontoConstrutora(9, -6));
// listaDePontos.push( new criarPontoConstrutora(5, -6));
 
// console.log("listaDePontos ",listaDePontos);


// //entrar no arrey e pegar um determinado atributo

// var itemEscolhido = listaDePontos.find(function(item){
//     return (item.x == 1 && item.y == -1)
// });

// //forEach usa para decorrer o caminho do array
// listaDePontos.forEach(function(item){
//     console.log(item)
// })
// console.log("itemEscolhido", itemEscolhido);
// }