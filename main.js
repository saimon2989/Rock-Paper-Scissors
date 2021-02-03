

// Variables
let piedra = 0;
let papel = 1;
let tijera = 2;
let options = ['Piedra', 'Papel', 'Tijera'];
let cpuOption = getCpuOption(0,2);
let userOption;

userOption = prompt('¿Qué Eliges? \nPiedra: 0\nPapel: 1\nTijera: 2,', 0);

alert('Elegiste ' + options[userOption]);
alert('La Cpu eligío ' + options[cpuOption]);

//  funciones
function getUserOption(){
    if(userOption == piedra){
        if(cpuOption == piedra){
            alert('Empate!! 😬');
        } else if(cpuOption == papel){
            alert('Perdiste!! 😔');
        } else if (cpuOption == tijera){
            alert('Ganaste!! 🤩');
        }
    } else if (userOption == papel){
        if(cpuOption == piedra){
            alert('Ganaste!! 🤩');
        } else if(cpuOption == papel){
            alert('Empate!! 😬');
        } else if (cpuOption == tijera){
            alert('Perdiste!! 😔');
        }
    } else if (userOption == tijera){
        if(cpuOption == piedra){
            alert('Perdiste!! 😔');
        } else if(cpuOption == papel){
            alert('Ganaste!! 🤩');
        } else if (cpuOption == tijera){
            alert('Empate!! 😬');
        }
    } else {
        alert('Digita un numero entre 0 y 2');
    }
}
getUserOption();

function getCpuOption(min, max){
    let cpuNumber = Math.floor(Math.random() * (max - min + 1 ) + min);
    return cpuNumber;
}