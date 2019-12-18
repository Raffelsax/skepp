
let squareSize = 50;
//Spelbräde med i förväg utplacerade skepp. 12 rutor med skepp.
let gameBoard  = [
    0,1,1,1,1,0,0,0,
    0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,0,
    0,0,0,0,0,0,0,0,
    
];


function createMap(map){
    //Varje ruta på spelbrädet tilldelas div, klass och id
    for (let i=0; i<map.length; i++) {
        $(".row").append(`<div id=${i} 
        class="square"><img src="wave.jpg" 
        width="${squareSize}"/></div>`);
        
    }
}

let numHitsToWin = 12 //Variabel för antal träffar som gräfs för att vinna, 12 eftersom skeppen är placerade i förväg.

createMap(gameBoard);

$(".square").click(shoot);

function shoot(){ //funktion för att bestämma om skottet är en träff eller miss
    
    let id = $(this).attr('id'); //tar reda vilken ruta och id man klickat på
    console.log(id);

    if (gameBoard[id] == 1){ // om id är lika med 1 finns det ett skepp
          
        numHitsToWin--; // för varje träff minskar antal träffar för att vinna med 1
        $(this).html(`<img src="ship.jpg" width="50" height="50"/>`); // visar träff genom bild på brädet
    }
    else{
        $(this).html(`<img src="miss.jpg" width="50" height="50"/>`); //visar miss genom bild på brädet
        
    }

    if (numHitsToWin<=0){ // om antal skepp på brädet når noll har spelaren vunnit
        alert("Grattis! Du har sänkt alla skepp.")
    }

}



