

### src/index.ts
#### Lignes 4 - 11
```typescript
if (process.argv.includes("--help")) {
    console.log("je vais vous aider");
}

const posName = process.argv.indexOf('--name')
if (posName !== -1) {
    console.log("Bonjour ", process.argv[posName + 1]);
}
```
- Il y a deux conditions qui verifie la presence de `--name` et de `--help` dans le script: start de package.json. Si les arguments sont presents alors il y aun affichage qui fait. 
- Dans le deuxième "log" j'aurais écris (`Bonjour ${process.argv[posName + 1]}`) mais c'est completement subjectif


#### Lignes 15 - 32
- il y a une Interface -> "Ipersonne" qui spécifie la structure d'un objet composé de quatre propriétés : `nom`, `prenom`, `age`, et `sexe`, chacune ayant un type spécifique. 
- Ensuite on a la définitionn d'un objet `pers` de type "Ipersonne".
- Par la suite, pour créer deux nouveaux objets `newName` et `newName2`, il était utulisé la "spread syntax". 
- Enfin, il était utilisé `console.log()` pour afficher les trois objets.