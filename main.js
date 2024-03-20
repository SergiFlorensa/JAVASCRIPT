const pi = 3.14;
console.log(pi);
//--------------------
let color="blue";
console.log(color);
//-----------------------
var marca = "audi";
console.log(marca);
//---------------------------
console.log(typeof(color));
console.log(typeof(pi));
//-----------------------------
function acelerar(){
    console.log(120)
}
acelerar();
//-------------------------------
function saludo(name,surname){
    console.log("Hola " + name + " " + surname)
};

saludo("Sergi", "Florensa");

//-------FUNCION ANONIMA--------------------------
let cantar = function(){
    console.log("tirititiri");
};
cantar();
//------------Anonima con parametros
let cancion = function(artista, genero){
    console.log("drake", "rap");
};
cancion();
//----------ARROW FUNCTION--------------------------
const suma = (a,b) => a + b;
console.log(suma(5,3));
//-----------FUNCIONES CON RETURN----------------------------
const saludar = (name)=>{
    return name;
}
console.log(saludar("sergi"));
//-------------EJERCICIO ----------------------------------
const nombreApellido = ()=>{
    const nombre="sergi";
    const apellido="florensa";
    return{nombre,apellido};
};
const obtenerNombreApellido=nombreApellido();
console.log("Nombre:" + obtenerNombreApellido.nombre);
console.log("Apellido:" + obtenerNombreApellido.apellido);
//--------------------------------------------------------------
const boleano=(boolean)=>{
    console.log("el valor booleano es:" + boolean);
};
boleano(true);

//---------------------------------------------------
const mostrarParametros = (...parametros)=> {
parametros.forEach(valor =>{
    console.log(valor);
});
};
mostrarParametros(1,2,3,4,5);
//---------------------------------------------
const lanzarMoneda = (valor)=>{
    if(valor===1){
        return "cara";

    }else if (valor===0){
        return"cruz";
    }else{
        return "el valor debe ser 0 o 1";
    }
};
const resultadoValor = Math.round(Math.random());
console.log(lanzarMoneda(resultadoValor));
//------------------------------------------------
const sumaNumeros = (num1, num2, num3) => {
    const suma = num1 + num2 + num3;
    return suma;
};

const resultado = sumaNumeros(3, 5, 7);
console.log(resultado); 
//-------------------------------------
const nombreCompleto = (nombre, apellido1,apellido2)=>{
    const nombreApellido = nombre + apellido1 + apellido2;
    console.log(nombreApellido);

};

nombreCompleto("Sergi ", "Florensa ", "Montagut");
//-----------------------------------------------------
const dosNumeros = (num1,num2)=> {
    const mayor = Math.max(num1, num2);
    console.log("el mayor numero es: " + mayor);
};
dosNumeros(8,4);
dosNumeros(548,8784);
//---------------------------------------------------
let mes = 8;

switch (mes) {
    case 1:
        console.log("enero");
        break;
    case 2:
            console.log("febrero");
            break;
    case 3:
                console.log("marzo");
            break;
    case 4:
            console.log("abril");
            break;
    case 5: 
            console.log("mayo");
            break;
    case 6: 
            console.log("junio");
            break;
    case 7: 
            console.log("julio");
            break;
    case 8: 
            console.log("agosto");
            break;
    case 9: 
            console.log("septiembre");
            break;
    case 10: 
            console.log("octubre");
            break;
    default:
        console.log("no es un mes del año");
        break;
}
//-------------------------------------------------
function convertirNumero(str) {
    switch(str) {
        case 'uno':
            return 1;
        case 'dos':
            return 2;
        case 'tres':
            return 3;
        case 'cuatro':
            return 4;
        case 'cinco':
            return 5;
        default:
            return 'Número no válido';
    }
}

var numeroString = 'cinco';

console.log(convertirNumero(numeroString));
//------------------------------------------
function numeroAleatori(){
    return Math.round(Math.random());
}

var aleatorio = numeroAleatori();
console.log(aleatorio);
//---------------------------------------------
var numeroDecimal = 3.1445;
var numeroRedondeado = Math.round(numeroDecimal)

console.log(numeroRedondeado);
//------------------------------------------------
function substitucionLetra(palabra){
    return palabra.replace(/a/g,'o');
}
var texto = "la alarma esta sonando";
console.log(substitucionLetra(texto));
//------------------------------------------------
function empiezaPorAca(palabra1, palabra2){
    return palabra1.startsWith('aca') || palabra2.startsWith('aca');
}

var palabra1 = 'academia';
var palabra2 = 'escuela';

console.log(empiezaPorAca(palabra1,palabra2));
//------------------------------------------------
function saludar3veces(saludo){
    return saludo + ',' + saludo + ',' + saludo;
}
var saludo = 'hola';

console.log(saludar3veces(saludo));
//-------------------------------------------
for (let i = 0; i < 10; i++) {
    console.log("I love code ")
}
let contador = 0;
while(contador < 10){
    console.log('i love code');
    contador++
}
//----------------------------------------------
const letras = ['a', 'b', 'c', 'd', 'e'];

letras.forEach(letra => {
    console.log(letra)
});
//--------------------------------------------
let numero = 5;
for(let i = numero; i >= 0 ; i--){
console.log(i);
}
//---------------------------------------------
let numero1 = 1;
let i = 0;
do{
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);

    }
}while (numero < 5);

/**
 * El primer If mira si el valor de i es igual a 0 y si es del mismo tipo que numero.
 * 
 * Como si lo es, el valor de i ahora es = 1 y el valor de numero es 0
 * 
 * Si i no es 0 numero suma 1 y mostraria 2
 * 
 * Hace un total de 6 iteraciones hasta que llega a 5.
 */
//-------------------------------------------------------------------------------------


//---------------------A PARTIR DE LA POSICION 4 HACIA AL FINAL CAMBIA TODOS LOS ELEMENTOS DEL ARRAY POR UNO EN CONCRETO-----
const alimentos = ['🍔', '🥙', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥩'];

alimentos.fill('🍺', 4);

console.log(alimentos);


//-------------Consultamos si hay una piña en el array-------------
const comida = ['🍕','🍕','🍍','🍕','🍕'];

if(comida.some(piña=> piña === '🍍')){
    console.log("hay piña para rato");
}
//------------------la piña fuera del array------
const piñaPizza = ['🍕','🍕','🍍','🍕','🍕'];

const comidaSinPiña = piñaPizza.filter(elemento=>elemento !== '🍍');

console.log(comidaSinPiña);

//----------------CONVERTIR FRESAS EN BOLETUS----

const fresasYLimones = ['🍓','🍋','🍓','🍋','🍓'];

const champisYLimones = fresasYLimones.map(fruta=>{
    if(fruta ==='🍓'){
        return '🍄';

    }else return fruta;
});
console.log(champisYLimones);

//-----------DESPUES DE --------------------------------

const ingredientes = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];

for (let i = 0; i < ingredientes.length; i++) {
    if (ingredientes[i] === '🌶️') {
        ingredientes.splice(i + 1, 0, '😬');
        i++; // Avanzamos un paso extra para evitar agregar 😬 después del recién insertado
    }
}

console.log(ingredientes);

//----------------------------------------------------
const todasLasCartas = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];

const añadeJoker = todasLasCartas.map(function(elementoActual, posicionIndice) {
  if (elementoActual === '🎴' && posicionIndice !== todasLasCartas.length - 1) {
    return [elementoActual, '🃏'];
  } else {
    return elementoActual;
  }
});

const cartasFinal = añadeJoker.flat();

console.log(cartasFinal);

//------------------------FOREACH---------------------------------------------

let ListaNumeros = [1,2,3,4,5,6];

ListaNumeros.forEach(function(numeros){
    console.log(numeros);

});

const libros = [
{ titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 432 },
{ titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 },
{ titulo: '1984', autor: 'George Orwell', paginas: 328 },
{ titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', paginas: 432 }
];

libros.forEach(function(infoLibro){
    console.log(`titulo: ${infoLibro.titulo}`);
    console.log(`autor: ${infoLibro.autor}`);
    console.log(`paginas: ${infoLibro.paginas}`);

    if (libros.paginas > 300){
        console.log("el libro es extenso");
    }else {
        console.log("este libro no es extenso");
    }

console.log('-------------------------');
});



//---------------------MAP()-----------------------
const numeros = [1,2,3,4,5];

const duplicarNums = numeros.map(function(numero){
    return numero * 2
});

console.log(duplicarNums);



const productos = [
    {nombre: `camisa`,     precio: 20},
    {nombre: `pantalones`, precio:30},
    {nombre: `zapatos`,    precio:50},  
];

const nuevosProductosConDescuentos = productos.map(function(producto){

    return{
        nombre:producto.nombre,
        precio:producto.precio,
        nuevosProductosConDescuentos: producto.precio * 0.9
    }; 
});

console.log(nuevosProductosConDescuentos);
//-----------------------------FROM-----------------------

const frase = `hola mundo`;
const arrayDeCaracteres= Array.from(frase);

console.log(arrayDeCaracteres);
//---------------------SPLICE()-----------------------

let numerazos = [1,2,3,4,5];
numerazos.splice(2,3);
console.log(numerazos);


//--------------------------PEDIDO COMPLETO--------------
const pedidoMesa = ['🍔', '🌭'];
pedidoMesa.push(`🍟`,`🍟`,`🍹`,`🍹`);
console.log(pedidoMesa);

//Output: []
//Expected output: ['🍔', '🌭']
//--------------------------PEDIDO COMPLETO--------------
const pedidoMesa1 = ['🍔', '🌭'];

pedidoMesa1[2] = `🍟`
pedidoMesa1[3] = `🍟`

pedidoMesa1[4] = `🍹`
pedidoMesa1[5] = `🍹`

console.log(pedidoMesa1);
//---------------PEDIDO MESA INVERTIDO-----

const cenitaDomingo = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 

cenitaDomingo.reverse();
console.log(cenitaDomingo);

//------------------INVERTIDO SIN METODOS-----

const domingoCena = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋',`🍹`];

const CenaDomigoInvertida = [];

for(let i = domingoCena.length - 1; i >= 0; i-- ){
    CenaDomigoInvertida.push(domingoCena[i]);
}
for (let i = 0; i < domingoCena.length; i++){
    domingoCena[i] = CenaDomigoInvertida[i];
}

//------------------Sin ARRAY AUXILIAR-----

const pedido4 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];

pedido4.push(''); 

for (let i = pedido4.length - 1; i > 0; i--) {
    pedido4[i] = pedido4[i - 1];  
}

pedido4[0] = '🍸'; 

console.log(pedido4); 


//----------------------------------------------------
const menus = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];

menus.push('');

menus.forEach((elemento, indice) => {
    const otroIndice = menus.length - 1 - indice;
    if (indice < otroIndice) {
        [menus[indice], menus[otroIndice]] = [menus[otroIndice], menus[indice]];
    }
});

menus[0] = '🍸';

console.log(menus);

//-----------------------------EJERCICIO  5  ------------


// Generar un número aleatorio entre 1 y 12
var indiceGanador = Math.floor(Math.random() * 12) + 1;

// Mostrar el número del alumno ganador en la consola
console.log("El número del alumno ganador es: " + indiceGanador);


//-------------------CONCAT()---------------

const ticket01 = ['🍺', '🍺', '🥜'];

const ticket02 = ['🍺', '🥪', '🥙']; 

const combinedTicket = ticket01.concat(ticket02);

console.log(combinedTicket);
//---------------------SPREAT OPERATOR-----------------

const ticket10 = ['🍺', '🍺', '🥜'];

const ticket20 = ['🍺', '🥪', '🥙']; 

const combinedTicket1 = [...ticket10, ...ticket20];

console.log(combinedTicket1);

//---------------------PUSH - EJ5---------------

const bebida = ['🍺', '🍺', '🥜'];
const bebidaTicket = ['🍺', '🥪', '🥙'];

bebida.push(...bebidaTicket);

console.log(bebida);

//--------------------FOR Y SIN metodo array--------

const vermut = ['🍺', '🍺', '🥜'];
const vermutTicket = ['🍺', '🥪', '🥙'];

const vermutJunto = vermutTicket.length;

for(let i = 0; i < vermutJunto; i ++);

vermut[vermut.length]= vermutTicket[i];

console.log(vermut);

//-------------foreach y sin metodo-------

const aperitivo = ['🍺', '🍺', '🥜'];
const aperitivo2 = ['🍺', '🥪', '🥙'];

const combinedTicket3 = [];

aperitivo.forEach(function(elementoDelAperitivo){
    combinedTicket3.push(elementoDelAperitivo);
});

aperitivo2.forEach(function(elementoDelAperitivo){
    combinedTicket3.push(elementoDelAperitivo);
});

console.log(combinedTicket3);

//--------------------6------------------------------
const comandaTicket = ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙'];

comandaTicket.shift();

comandaTicket.pop();

console.log(comandaTicket);