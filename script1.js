
/*
 Exercice 1
 */
 console.log(`---------------  Exercice 1 --------------`);

// 1- Stockez votre nourriture préférée dans une variable.
let NourriturePrefere = "Riz cantonaire";

// 2- Enregistrez votre repas préféré de la journée dans une variable (c'est-à-dire petit-déjeuner, déjeuner ou dîner)
let RepaPrefere = "Diner";

// 3-Console.logI eat <favorite food> at every <favorite meal>
console.log(`logI eat ${NourriturePrefere} at every ${RepaPrefere}
`);



/*
 Exercice 2
 */
console.log(`---------------  Exercice 2 --------------`);

// Partie 1
 const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

 // 1- Créez une variable myWatchedSeriesLength dont le nom est égal au nombre de séries dans le myWatchedSeries tableau.
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

// 2- Créez une variable nommée myWatchedSeriesSentence, qui est égale à une phrase décrivant la série que vous avez regardée
let myWatchedSeriesSentence = `la meilleur serie du monde est ${myWatchedSeries[1]} `;
console.log(myWatchedSeriesSentence);

// 3- Console.log une phrase utilisant les deux variables créées ci-dessus
console.log(`Parmis les ${myWatchedSeriesLength} serie que compte le tableau, ${ myWatchedSeriesSentence } `);


// Partie 2
// 1- Remplacez la série « the big bang theory » par « friends ». Astuce : Vous devrez utiliser l'index de la série « the big bang theory ».
console.log(myWatchedSeries[2] = "friends");

// 2- Ajoutez, à la fin du tableau, le nom d'une autre série que vous avez regardée.
console.log(myWatchedSeries.push('Suite'));

// 3- Ajoutez, au début du tableau, le nom de votre série préférée.
myWatchedSeries.unshift('Allo');

// 4- Supprimer la série « miroir noir ».
myWatchedSeries.shift();

// 5- Console.log la troisième lettre de la série "money heist".
console.log(myWatchedSeries[1][2]);

// 6- Enfin, console.log le myWatchedSeriestableau, pour voir toutes les modifications que vous avez apportées.
console.log(myWatchedSeries);


 /*
 Exercice 3
 */
 console.log(`---------------  Exercice 3 --------------`);

 // 1- Stocker une température Celsius dans une variable.
 let temperature = 29 ;
 console.log(` ${temperature} °C`);

 // 2- Convertissez-le en fahrenheit et console.log <temperature>°C is <temperature>°F.
 let conversionTemperature = (temperature/5)*9 + 32
 console.log(`${temperature} °C est egale à ${conversionTemperature} °F`)


 /*
 Exercice 4
 */
 console.log(`---------------  Exercice 4 --------------`);

 let c;
 let a = 34;
 let b = 21;

// 1- Quel sera le résultat de a + bdans la première expression ?
// Prediction: 55 => nous avons l'addition de deux nombre
console.log(a+b) 
// Actual: 55
// la prediction est la meme que la valeur réel

// 2- Quel sera le résultat de a + bdans la seconde expression ?
a = 2;
// Prediction: 23 => car a et b sont des nombres et a été reafecté à 2
console.log(a+b) //second expression
// Actual: 23
// la prediction est la meme que la valeur réel

// 3- Quelle est la valeur de c?
// Prediction: undefined => la variable c a été declaré mais pas intensié
console.log(c) //second expression
// Actual: undefined
// la prediction est la meme que la valeur réel

// 4- Analysez le code ci-dessous, quel sera le résultat ?
 // Prediction: 75 =>  le resultat vas retourné 3 + 4 concatené a la variale "5"
 console.log(3 + 4 + '5');
 // Actual: 75
// la prediction est la meme que la valeur réel



 /*
 Exercice 5
 */
 console.log(`---------------  Exercice 5 --------------`);
 typeof(15)
 // Prediction: number => l'expression retourne une valeur de type number car la variable passé est un nombre
 console.log(typeof(15));
 // Actual: number
 // la prediction est la meme que la valeur réel
 
 typeof(5.5)
 // Prediction: number => l'expression retourne une valeur de type number car la variable passé est un nombre
 console.log(typeof(5.5));
 // Actual: number
 // la prediction est la meme que la valeur réel
 
 
 typeof(NaN)
 // Prediction: number => 
 console.log(typeof(NaN));
 // Actual: number
// la prediction est la meme que la valeur réel

 
 typeof("hello")
 // Prediction: string =>  l'expression retourne une valeur de type string car la variable passé est une chaine de carrectere
 console.log(typeof("hello"));
 // Actual: string
 // la prediction est la meme que la valeur réel
 
 
 typeof(true)
 // Prediction: boolean => l'expression retourne une valeur de type boolean car la variable passé est un boolean
 console.log(typeof(true));
 // Actual: boolean
 // la prediction est la meme que la valeur réel
 
 
 typeof(1 != 2)
 // Prediction: boolean => l'expression retourne une valeur de type boolean car deux variables de meme sont comparé
 console.log(typeof(1 != 2));
 // Actual: boolean
 // la prediction est la meme que la valeur réel
 
 
 "hamburger" + "s"
 // Prediction: hamburgers => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
 console.log("hamburger" + "s");
 // Actual: hamburgers
 // la prediction est la meme que la valeur réel
 
 
 "hamburgers" - "s"
 // Prediction: undefined => l'expression retourne undefined car ces variables de type chaine de carractere ne peuvent pas etre contactené avec le signe -
 console.log("hamburger" - "s");
 // Actual: NaN
 // la prediction est differente de la valeur réel
 
 
 "1" + "3"
 // Prediction: 13 => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
 console.log("1" + "3");
 // Actual: 13
 // la prediction est la meme que la valeur réel
 
 
 "1" - "3"
 // Prediction:  undefined => l'expression retourne undefined car ces variables de type chaine de carractere ne peuvent pas etre contactené avec le signe -
 console.log("1" - "3");
 // Actual: -2
 // la prediction est differente de la valeur réel
 
 
 "johnny" + 5
 // Prediction: johnny5 => l'expression retourne une valeur de type string car une variable de type chaine de carractere et une varriable de type number sont concatenés
 console.log("johnny" + 5);
 // Actual: johnny5
 // la prediction est la meme que la valeur réel
 
 
 "johnny" - 5
 // Prediction:  NaN => une verrification est fait en interne pour verrifier si les deux elements sont du meme type à cause de l'operateur -
 console.log("johnny" - 5);
 // Actual:  NaN
 // la prediction est la meme que la valeur réel
 
 
 99 * "hello"
 console.log(99 * "hello");
 // Prediction: NAN => l'operateur * est utilisé seulement pour les variable de type number
 // Actual: NaN
 // la prediction est la meme que la valeur réel
 
 
 1 != 1
 // Prediction: false => c'est une verrification entre deux element de mem type
 console.log(1 != 1);
 // Actual: false
  // la prediction est la meme que la valeur réel

 
 1 == "1"
// Prediction: true => jeavasciptnfait des calcule en interne et convertire l'un des elements dans le type de l'autre
console.log(1 == "1");
 // Actual: true
 // la prediction est la meme que la valeur réel

 1 === "1"
 // Prediction: true => jeavasciptnfait des calcule en interne et convertire l'un des elements dans le type de l'autre
 console.log(1 === "1");
 // Actual: true
 // la prediction est la meme que la valeur réel




 /*
 Exercice 6
 */
 console.log(`---------------  Exercice 6 --------------`);
 // 1- Quelle est la sortie de chacune des expressions ci-dessous ?

5 + "34"
// Prediction: 534 => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
console.log(5 + "34");
// Actual: 534
// la prediction est la meme que la valeur réel

5 - "4"
// Prediction: 1 => nous avons une operation de soustraction cas le chaine "4" est convertire en number
console.log(5 - "4");
// Actual: 1
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris

10 % 5
// Prediction: 0 => l'expression retourne une valeur de type number car nous avons operation modulo entre nombre
console.log(10 % 5);
// Actual: 0
// la prediction est la meme que la valeur réel

5 % 10
// Prediction: 5 => c'est un calcule de modulo, donc les reste est retourné
console.log(5 % 10);
// Actual: 5
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris

"Java" + "Script"
// Prediction: JavaScript => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
console.log("Java" + "Script");
// Actual: JavaScript
// la prediction est la meme que la valeur réel

" " + " "
// Prediction: retourne une chaine vide => c'est une concatenation de deux chaine vide
console.log(" " + " ");
// Actual: retourne une chaine vide
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris

" " + 0
// Prediction: 0 c'est la concanenation d'un nombre et d'une chaine vide 
console.log(" " + 0);
// Actual: 0
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris


true + true
// Prediction: 2 car true eqivaut en memoir à 1
console.log(true + true);
// Actual: 2
// la prediction est la meme que la valeur réel


true + false
// Prediction: 1  car true eqivaut en memoir à 1 et false à 0
console.log(true + false);
// Actual: 1
// la prediction est la meme que la valeur réel


false + true
// Prediction: 1  car true eqivaut en memoir à 1 et false à 0
console.log(false + true);
// Actual: 1
// la prediction est la meme que la valeur réel



false - true
// Prediction: -1  car true eqivaut en memoir à 1 et false à 0
// Actual: -1
console.log(false - true);
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris


!true
// Prediction: false car l'expression verrifie si true n'est pas un boolean
console.log(!true);
// Actual: false
// la prediction est la meme que la valeur réel


3 - 4
// Prediction: -1 => l'expression retourne une valeur de type number car c'est une operation en deux nombre
console.log(3 - 4);
// Actual: -1
// la prediction est la meme que la valeur réel

"Bob" - "bill"
// Prediction: undefined => l'expression retourne undefined car ces variables de type chaine de carractere ne peuvent pas etre contactené avec le signe -
console.log("Bob" - "bill");
// Actual: NaN
// la prediction est differente de la valeur réel





