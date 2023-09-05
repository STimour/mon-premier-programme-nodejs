
import fs from 'fs-extra'



const _help_ = "--help";
const _name_ = "--name";


if (process.argv.includes(_name_)) {
    const nameIndex = process.argv.indexOf('--name') + 1;
    if (nameIndex < process.argv.length) {
      const name = process.argv[nameIndex];
      console.log(`Bonjour ${name}`);
    } else {
      console.log('Mettez un nom après l\'argument name');
    }
};

if (process.argv.includes(_help_)) {
    console.log('Je vais vous aider');
  }


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

const file = '/home/tim/Bureau/node/mon-premier-programme-nodejs/jsonFile.json'
fs.outputJsonSync(file, {personne, personne2})

const data = fs.readJsonSync(file)
console.log(data) 

import "dotenv/config"

console.log("env", process.env.NAME)