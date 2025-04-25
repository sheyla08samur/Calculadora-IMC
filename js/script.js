"use strict";

const MSJ_MENU = "Elija la acción a realizar:\n1. Registro\n2. Total de hombres y mujeres\n3. Promedio de edades de hombres y mujeres\n4. Total menores registrados\n5. Total de hombres y mujeres en sobrepeso\n6. Paciente de más bajo IMC\n7. Salir";
const BIENVENIDA = "Bienvenido a su calculadora de IMC";

alert(BIENVENIDA);

let pacientes = [];
let funcionando = true;

while (funcionando) {
    let opc = parseInt(prompt(MSJ_MENU));

    switch (opc) {
        case 1:
            let continuar = true;
            while (continuar) {
                let id = prompt("Ingrese su número de identificación:");
                let nombre = prompt("Ingrese su nombre completo:");
                let edad = parseInt(prompt("Ingrese su edad:"));
                let genero = prompt("Ingrese su género (M/F):").toUpperCase();
                let peso = parseFloat(prompt("Ingrese su peso (kg):"));
                let altura = parseFloat(prompt("Ingrese su altura (m):"));
                let imc = peso / (altura ** 2);

                pacientes.push({ id, nombre, edad, genero, peso, altura, imc });

                let mensajeIMC = `Su IMC es: ${imc.toFixed(2)}\n`;
                if (imc > 30) {
                    mensajeIMC += "⚠️ Tienes obesidad.";
                } else if (imc > 25) {
                    mensajeIMC += "⚠️ Estás en sobrepeso.";
                } else if (imc >= 18.5) {
                    mensajeIMC += "🎉 Tienes un peso saludable.";
                } else {
                    mensajeIMC += "🚨 Estás por debajo del peso saludable.";
                }

                alert(mensajeIMC);

                continuar = prompt("¿Desea registrar otro paciente? (si/no)").toLowerCase() === "si";
            }
            break;

        case 2:
            let hombres = pacientes.filter(p => p.genero === "M").length;
            let mujeres = pacientes.filter(p => p.genero === "F").length;
            alert(`Total de hombres: ${hombres}\nTotal de mujeres: ${mujeres}`);
            break;

        case 3:
            let hombresEdad = pacientes.filter(p => p.genero === "M").map(p => p.edad);
            let mujeresEdad = pacientes.filter(p => p.genero === "F").map(p => p.edad);

            let promHombres = hombresEdad.length ? (hombresEdad.reduce((a, b) => a + b) / hombresEdad.length).toFixed(2) : "N/A";
            let promMujeres = mujeresEdad.length ? (mujeresEdad.reduce((a, b) => a + b) / mujeresEdad.length).toFixed(2) : "N/A";

            alert(`Promedio edad hombres: ${promHombres}\nPromedio edad mujeres: ${promMujeres}`);
            break;

        case 4:
            let menoresEdad = pacientes.filter(p => p.edad < 18).length;
            alert(`Total de menores de edad registrados: ${menoresEdad}`);
            break;

        case 5:
            let sobrepesoHombres = pacientes.filter(p => p.genero === "M" && p.imc >= 25).length;
            let sobrepesoMujeres = pacientes.filter(p => p.genero === "F" && p.imc >= 25).length;
            alert(`Hombres en sobrepeso: ${sobrepesoHombres}\nMujeres en sobrepeso: ${sobrepesoMujeres}`);
            break;

        case 6:
            if (pacientes.length === 0) {
                alert("No hay pacientes registrados.");
            } else {
                let pacienteMin = pacientes.reduce((min, actual) => actual.imc < min.imc ? actual : min);
                alert(`Paciente con menor IMC:\nID: ${pacienteMin.id}\nNombre: ${pacienteMin.nombre}\nIMC: ${pacienteMin.imc.toFixed(2)}`);
            }
            break;

        case 7:
            funcionando = false;
            alert("Gracias por usar la calculadora de IMC.");
            break;

        default:
            alert("Opción no válida.");
            break;
    }
}
