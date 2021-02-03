// variables
let piedra = 0;
let papel = 1;
let tijeras = 2;
let btnUser1 = document.getElementById('btnUser1');
let btnUser2 = document.getElementById('btnUser2');
let btnAnswer = document.getElementById('btnAnswer');

let respuesta = getAnswer;

let userOption = document.getElementById('userOption');
let userOption2 = document.getElementById('userOption2');



// Eventos

btnUser1.addEventListener('click', getOptionUser1);
btnUser2.addEventListener('click', getOptionUser2);
btnAnswer.addEventListener('click', respuesta);



// Funciones

function getOptionUser1(){
    let option1 = userOption.value;
    if (option1 == piedra){
        alert('Enviado!');
    }else if (option1 == papel){
        alert('Enviado!')
    }else if (option1 == tijeras){
        alert('Enviado!')
    }else{
        alert('Ingresa una opción entre 0 - 2');
    }
}

function getOptionUser2(){
    let option2 = userOption2.value;
    if (option2 == piedra){
        alert('Enviado!');
    }else if (option2 == papel){
        alert('Enviado!');
    }else if (option2 == tijeras){
        alert('Enviado!');
    }else {
        alert('Ingresa una opción entre 0 - 2');
    }
}

function getAnswer(){
    let option1 = userOption.value;
    let option2= userOption2.value;
    if(option1 == piedra){
        if(option2 == piedra){
            alert('Empate!! 😬');
        }else if (option2 == papel){
            alert('El jugador 2 ha ganado!!');
        }else if(option2 == tijeras){
            alert('El jugador 1 ha ganado!!');
        }
    }else if(option1 == papel){
        if(option2 == piedra){
            alert('El jugador 1 ha ganado!!');
        }else if(option2 == papel){
            alert('Empate!! 😬');
        }else if(option2 == tijeras){
            alert('El jugador 2 ha ganado!!');
        }
    }else if(option1 == tijeras){
        if(option2 == piedra){
            alert('El jugador 2 ha ganado!!')
        }else if(option2 == papel){
            alert('El jugador 1 ha ganado!!');
        }else if(option2 == tijeras){
            alert('Empate!! 😬');
        }
    }
}
