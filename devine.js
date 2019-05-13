function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var nombre = entierAleatoire(0, 100);
var choix = undefined

for (var i = 0; i != 10; i++){
    if (choix === nombre){
        alert('Bravo a vous vous avez réussit a deviner le nombre!');
    }else if (choix == undefined){
        choix = prompt('Essayé de deviner le nombre');    
    }else if (choix < nombre) {
            choix = prompt('Plus grand');
        }else if (choix > nombre) {
            choix = prompt('Plus petit');
        }else if (choix == nombre){
            alert('Bravo a vous vous avez réussit a deviner le nombre!'); 
        }
    }




