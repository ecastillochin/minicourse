//var variable1='variable global'   //es considerada una variable global --revisar
// Estas variables fueron introducidas en el 2015 por el ES6
//let variable2 ='variable por scope'  // este tipo de variable depende del scope
const variable3=3.1415 //constante

//uso de var 

function  imprimir() {
   // console.log(variable1)
}

imprimir()

function imprimirlet() {
//let variable2 ='variable por scope'
 //  console.log(variable2)

}
//console.log(variable2)
imprimirlet()

function imprimeconst() {
    variable3=1
   console.log(variable3)
}

imprimeconst()