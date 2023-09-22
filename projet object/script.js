"use strict";

let student={//les accolades permettent de créer l'Object
    nom: "Eden",//4 caractères
    nourriture: "chili",//5 caractères
    ville: "Paris",//5 caractères => total 14 caractères
}

let values=Object.values(student);//affiche la valeur totale des caractères dans l'Object
console.log(values);
let result=0;//commence l'affichage à partir de l'index 0
values.forEach((values)=> {
     result+=values.length
 })
 console.log(result);