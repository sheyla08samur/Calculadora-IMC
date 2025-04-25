"use strict"
const BIENVENIDA= "Bienvenido a su calculadora de IMC";
const MSJ_ID= "Ingrese su numero de identificación: ";
const MSJ_NOMBRE= "Ingrese su nombre completo: ";
const MSJ_EDAD= "Ingrese su edad: ";
const MSJ_GENERO= "Ingrese su genero(M/F): ";
const MSJ_PESO= "Ingrese su peso: ";
const MSJ_ALTURA= "Ingrese su altura en metros: ";
const MSJ_RESULTADO= "Su IMC es: ";

alert(BIENVENIDA)
let running = true;
let hombres = 0;
let mujeres = 0;

do{
    let id= prompt (MSJ_ID);
    let nombre= prompt(MSJ_NOMBRE);
    let edad= prompt (MSJ_EDAD);
    let genero= prompt (MSJ_GENERO);
    if (genero== "m" || genero== "M"){
        hombres++
    }
    else if (genero== "f" || genero==  "F"){
        mujeres++
    }
    else{
        alert("Error al ingresar los datos.");
        
    }
    let peso= prompt(MSJ_PESO);
    let altura= prompt(MSJ_ALTURA);
    let imc= peso/(altura**2);

    if (imc>30.0){
        alert(`${MSJ_RESULTADO} ${imc} "⚠️ Tu IMC indica que tienes sobrepeso. Considera adoptar hábitos más saludables, como mejorar tu alimentación y aumentar tu actividad física. Siempre es buena idea consultar con un especialista."`);
    } else if (imc>25.0){
        alert(`${MSJ_RESULTADO} ${imc} "⚠️ Tu IMC indica que estas un poco sobre el peso. Considera adoptar hábitos más saludables, como mejorar tu alimentación y aumentar tu actividad física. Siempre es buena idea consultar con un especialista."`);
    } else if (imc>18.5){
        alert(`${MSJ_RESULTADO} ${imc} "🎉 ¡Felicidades! Tu peso se encuentra dentro del rango saludable. Sigue manteniendo un estilo de vida equilibrado con buena alimentación y actividad física."`);
    } else{
        alert(`${MSJ_RESULTADO} ${imc} "🚨 Tu IMC indica que estás por debajo del peso saludable. Sería ideal que consultes a un profesional de la salud para evaluar posibles causas y opciones para alcanzar un peso adecuado."`);
    }

    let continuar = prompt('¿desea continuar? (si/no)');
    if (continuar=="no"){
        running= false;
    }

    let usuarios= (`"id: " ${id}, "nombre: " ${nombre}, "edad: " ${edad}, "genero: " ${genero}`);
    console.log(usuarios)

} while (running== true)