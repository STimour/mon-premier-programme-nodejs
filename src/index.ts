
const _help_ = "--help";
const _name_ = "--name";


if (process.argv.includes(_help_)) {
    console.log('Je vais vous aider');
  }

if (process.argv.includes(_name_)) {
    const nameIndex = process.argv.indexOf('--name') + 1;
    if (nameIndex < process.argv.length) {
      const name = process.argv[nameIndex];
      console.log(`Bonjour ${name}`);
    } else {
      console.log('Mettez un nom après l\'argument name');
    }
};
//class Personne{
//    nom: string;
//    prenom: string;
//    age: number;
//    sexe: string;
//
//    constructor(nom:string, prenom:string, age:number, sexe:string){
//    this.nom = nom;
//    this.prenom = prenom;
//    this.age = age;
//    this.sexe = sexe;
//    }
//};
//
//const personne1 = new Personne("Laforge", "Thomas", 30, "Masculin");
//const personne2 = new Personne("Amish", "Fatir", 30, "Masculin");
//
//console.log(Personne);
//console.log(personne1);
//console.log(personne2);
//


interface Person {
    nom: string,
    prenom: string,
    age: number,
    sexe: string,
};


const personne: Person = {
    nom: "Laforge",
    prenom: "Thomas",
    age: 30,
    sexe: "Masculin",
};



const personne2: Person = {
    nom: "Laforge",
    prenom: "Thomas",
    age: 30,
    sexe: "Masculin",
} 
personne2.nom = "Amish"
personne2.prenom = "Fatir"

console.log(personne)
console.log(personne2)