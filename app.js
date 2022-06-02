require("dotenv").config();

console.log(process.env.KEY)
if(!process.env.TOKEN && !process.env.KEY){
    throw new Error("No hay configuración con Api Key y con Token");
}

var Trello = require("trello");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
console.log(trello)
/**/
trello.addCard("ANTONIO JARAMILLO JARAMILLO", "Wax on, wax off", "626c2abfcd29f816a703d740",
    function (error, trelloCard) {
        if (error) {
            console.log("Could not add card:", error);
        }
        else {
            console.log("Added card:", trelloCard);
        }
    });


/*

*/




      
     


    