// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Exercice n° 1 => faire une sortie de 25 ( +, -, * & / )
let num = 40; // je crée une variable contant un nombre  
num -= 15; // je soustrait 40 de 15
console.log(num); // print 25 

// Exercice n° 2 => Concaténation de chaînes avec des variables
let str = 'beau'; // je crée une variable contenant une chaine de caractère 
console.log('Il fait ' + str + ' aujourd\'hui.'); // print => Il fait beau aujourd'hui. => en utilisant la concaténation 

// Exercice n° 3 => Interpolation de chaîne 
let string = 'pleut'; // je crée une variable contenant une chaine de caractère 
console.log(`Il ${string} ajourd'hui.`); // print => Il pleut ajourd'hui => en utilisant l'interpolation .
 
// Exercice n° 4 => .join();  
const leTableauQuiContientLesFilmsMarvel = ['Spider-Man', 'Thor', 'Avengers']; // création du tableau contenant les films Marvels
const leTableauQuiContientLesFilmsMarvelJoin = leTableauQuiContientLesFilmsMarvel.join(' - '); // renvoie une représentation sous forme de chaîne des éléments du tableau concaténés.  
console.log(leTableauQuiContientLesFilmsMarvelJoin); // print Spider-Man - Thor - Avengers

// Exercice n° 5 => .splice(); 
const brandOfCars = ['Opel', 'Mercedes', 'BMW', 'Peugeot', 'Citroen']; // création des éléments du tabkleau contenant les marques des véhicules 
brandOfCars.splice(3, 0, 'Dacia', 'Skoda', 'Ford'); // j'ajoute 3 éléménts à partir de l'index 3 
console.log(brandOfCars); // [ 'Opel', 'Mercedes', 'BMW', 'Dacia', 'Skoda', 'Ford', 'Peugeot' 'Citroen' ] 

// Exercice n° 6 => .slice(); 
const daysOfWeeks = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']; // création du tableau contenant les jours de la semaine 
const res = daysOfWeeks.slice(5); // je passe un argument à partir du 5ième élément -> donc à partir de samedi
console.log(res); // print [ 'saturday', 'sunday' ] 

// Exercice n° 7 => .slice(); => Deux arguments
const thePlanet = ['earth', 'moon', 'mars', 'saturn', 'jupiter', 'sun'];  
const resPlanet = thePlanet.slice(1, 5);

console.log(resPlanet);  

// Exercice n° 8 => .slice(); => Arguments négatifs
const cities = ['Brussels', 'Paris', 'Berlin', 'Tokyo' , 'Los-Angles', 'Berme', 'Dubli', 'Havane']; 
const citiesWithNegativeSlice = cities.slice(-5); 

console.log(citiesWithNegativeSlice);

// Exercice n° 9 => .shift()
const temperaturOfTheWeek = [20, 23, 18, 22, 26, 27,]; // je crée un tableau contenant les tempétarature de le semaine
temperaturOfTheWeek.shift(); // supprime le premier élément du tableau

console.log(temperaturOfTheWeek); // print [ 23, 18, 22, 26, 27 ]

// Exercice n° 10 => .unshift(); 
const theDays = ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
theDays.unshift('monday');

console.log(theDays);  

// Exercice n° 11 => .concat(); 
const firsItems = ['eggs', 'breads', 'butter']; // je crée mon premier tableau contant des aliments 
const secondItems = ['apple juice', 'orange juice', 'water'];  // je crée mon deuxième tableau contenant des boissons
const items = firsItems.concat(secondItems); // je fusionne mes deux tableau (un autre tableau se crée)

console.log(items); 

// Exercice n° 12 => .indexOf();
const teamFootball = ['RM', 'Chel', 'Man U', 'Man C', 'Seville', 'Barcelona']; // je crée un tableau contenant les équipes de foot 
console.log(teamFootball.indexOf('Man C')); // print 3 => et  je récupère l'élément de tableau à l'index 3

// Exercice n° 13 => boucle For
for (let i = 0; i < 5; i++) { // je crée une boucle for à fin d'affihcher les nombres de 0 à 4
    console.log(i); // print => 0, ..., 4 
}

// Exercice n° 14 => bouclage à l'envers
for (let y = 5; y >= 0; y-- ) { // je crée une boucle for en inversant les nombres de 5 à 0
    console.log(y); // print 5, ..., 0 
}

// Exercice n° 15 => boucler à travers les tableaux
const myArraywithActorsOfLionsKing = ['Simba', 'Mufasa', 'Sarabi', 'Timon', 'Pumba', 'Rakifi']; // je crée un tableau contenant les personnage du Roi Lion

for (let w = 0; w < myArraywithActorsOfLionsKing.length; w++) { // je boucle à travers le tableau et je le parcours avec la méthode .lenght
    console.log(myArraywithActorsOfLionsKing[w]); // j'affiche et j'accède aux élément du tableau 
}

// Exercice n° 16 => boucles imbriquées
const bobFollowers = ['Carlos', 'Captain Crabs', 'Sandy', 'Bob l\'éponge', 'Simba', 'Scar'];
const tinasFollowers = ['Captain Crabs', 'Mia', 'Bob l\'éponge', 'Paul Walker', 'Tisha', 'Scar']; 
const mutualFollowers = [];  

for (let l = 0; l < bobFollowers.length; l++) {
 for (let u = 0; u < tinasFollowers.length; u++) {
    if (bobFollowers[l] === tinasFollowers[u]) {
        mutualFollowers.push(bobFollowers[l]); 
    }
 }
}

console.log(mutualFollowers);

// Exercice n° 17 => la boucle While
let theNumberTen = 10;  

while (theNumberTen < 15) {
    console.log(theNumberTen);
    theNumberTen++; 
}

// Exercice n° 18 => instructions Do...While
let numberFive = 5; 

do {
    numberFive++; 
    console.log(numberFive);
} while (numberFive < 10); 

// Exercice n° 19 => Break
for (let numberFiifteen = 15; numberFiifteen < 20; numberFiifteen++) {
    if (numberFiifteen === 18) {
        break; 
    }
    console.log(numberFiifteen);
}

// Exercice n° 20 => continue 
for (let numberFour = 4; numberFour < 10; numberFour++) {
    if (numberFour === 6) {
        continue; 
    }
    console.log(numberFour);
}

// Exercice n° 21 => objet 
let aCar = {
    brand : 'Ford', 
    type : 'Fiesta', 
    color : 'Blue', 
    matricule : 'XXX-XXX-XXX', 
    'Type de Boite' : 'manuelle'
}; 

console.log(aCar.brand);
console.log(aCar.type);
console.log(aCar.color);
console.log(aCar.matricule);
console.log(aCar['Type de Boite']);
