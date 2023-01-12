     
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 0;
var jugador1 = parseInt(document.getElementById('jugador1').innerHTML);
var jugador2 = parseInt(document.getElementById('jugador2').innerHTML);

function dibujar(){
    for(i=0; i<9; i++){
        if(mapa[i] == 0){
            document.getElementById("c"+i).innerHTML="";
        }
        if(mapa[i] == 1){
            document.getElementById("c"+i).style="color: red";
            document.getElementById("c"+i).innerHTML="X";
            document.getElementById("player").innerHTML="O";
        }
        if(mapa[i] == 2){
            document.getElementById("c"+i).style="color: blue";
            document.getElementById("c"+i).innerHTML="O";
            document.getElementById("player").innerHTML="X";
        }
    }
}
function pintarCelda(celda){
    if (mapa[celda]==0) {
        if (jugador==1){
            mapa[celda]=1;
            jugador=2;
        } else {
            mapa[celda]=2;
            jugador=1; 
        }
    } else {
        swal({
            title: "No puedes pulsar sobre una celda coloreada",
            icon: "warning",
        });
    }
    dibujar();
    var r = ganador();
    switch(r){
        case 0:
            break;
        case 1:
            swal({
                title: "¡Gana el rojo!",
                icon: "success",
            });
            var res1 = parseInt(document.getElementById('jugador1').innerHTML) + 1;
            document.getElementById('jugador1').innerHTML= res1;
            break;
        case 2:
            swal({
                title: "¡Gana el azul!",
                icon: "success",
            });
            var res2 = parseInt(document.getElementById('jugador2').innerHTML) + 1;
            document.getElementById('jugador2').innerHTML= res2;
            break;
        case 3:
            swal({
                title: "¡Empate!",
                icon: "success",
            });
            break; 
    }
}
function ganador(){
    var numEspacios=0;
    for(i=0; i<9; i++){
        if(mapa[i] == 0){
            numEspacios++;
        }
    }
    // Las líneas horizontales
    if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0){
        return mapa[0];
    }
                
    if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0){
        return mapa[3];
    } 
                
    if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) {
        return mapa[6];
    }
                
    //Las líneas verticales
    if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0){
        return mapa[0];
    } 
    if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0){
        return mapa[1];
    } 
    if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0){
        return mapa[2];
    }
    //Las diagonales
    if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0){
        return mapa[0];   
    }
    if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0){
        return mapa[2];  
    } 

    if (numEspacios > 0){
        return 0;
    } else {
        return 3;
    }
}

function reiniciar(){
    mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    jugador = 0;
    document.getElementById("c0").innerHTML="";
    document.getElementById("c1").innerHTML="";
    document.getElementById("c2").innerHTML="";
    document.getElementById("c3").innerHTML="";
    document.getElementById("c4").innerHTML="";
    document.getElementById("c5").innerHTML="";
    document.getElementById("c6").innerHTML="";
    document.getElementById("c7").innerHTML="";
    document.getElementById("c8").innerHTML="";
    document.getElementById("player").innerHTML="O";
}