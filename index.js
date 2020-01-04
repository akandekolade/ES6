// let and const
// {
//     const name= "kolade"
//     console.log(name)

// for(let i=0; i<10;i++){
//     console.log(i)
//     setTimeout(function(){
//         console.log("the number is "+ i)

//     }, 2000)
// }

// // arrow functions
// const names= ["kol","joe", "sop"]
// const fullnames=names.map(function(name){
//      return`${name} bos`;
//  })

//  const fullnames2=names.map((name)=> {
//     return`${name} bos`;
// })

// const fullnames3=names.map(name=> {
//     return`${name} bos`;
// })

// const fullnames4=names.map(name=> `${name} bos`)

// const fullnames5=names.map(()=> `cool bos`)
// console.log(fullnames5)

// const saymyname=(name)=>{
//     alert(`Hello ${name}!`)
// }
// saymyname(`kolade`)

// const race="100m dash"
// const winners=["kolade","tolu","kunle"]
// const win= winners.map((winner ,i)=> ({
//     name: winner,
//     race,
//     place: i + 1
// }))
// console.table(win)
// console.log(win)

// const ages=[62,54,67,23,14,78,99,45]
// const old=ages.filter(age=> age>= 60)
// console.log(old)

// DEFAULT FUNCTION ARGUMENTS

// function calculateBill(total, tax=0.13, tip=0.15){
//     return total + (total * tax) + (total * tip)

// }
// const totalBill = calculateBill(100, undefined, 0.25)
// console.log(totalBill)

// TEMPLATE STRINGS INTRODUCTION
// const name="jan di";
// const age = 6
// const sentence1 = "My dog "+ name + " is "+ age*7 + " years old. "
// const sentence2 = `My dog ${name} is ${age*7} years old.`
// console.log(sentence2)

// CRATING HTML FRAGMENTS WITH TEMPLATE LITERALS
// It is in a folder

// TAGGED TEMPLATE LITERALS
// function highlights(strings, ...values) {
//     let str = "";
//     strings.forEach((string, i) => {
//         str += string + (values[i] || "")
//         ` str += ${string} <span class="h1">${values[i] || ""}</span>`;
//     });
//     return str;
// }
//  const name = "snickers";
//  const age = 100;
//  const sentence = highlights`My dog's name is ${name} and he is ${age} years old`;

//  console.log(sentence)

// NEW SRTING METHODS
// const course = "RFB2"
// const flightnumber = "20-AC2018-jz"
// const accountnumber = "825242631RT0001"

// const make = "BMW"
// const model = "x5"
// const colour = "Royal blue"

// function leftPad(str, length = 20) {
//     return `> ${" ".repeat(length - str.length)}${str}`
// }

// console.log(leftPad(make))
// console.log(leftPad(model))
// console.log(leftPad(colour))
// .startswith()
// .endswith()
// .includes()
// .repeat()

// DESTURCTURING OBJECTS
// const person={
//     first: "kolade",
//     last: "akande",
//     country: "Nigeria",
//     city: "Ibadan",
//     twitter: "kilokanmi"
// };

// const {first,last,twitter} = person;

// DESTURCTURING ARRAYS
// const details = ["kolade", "123", "kolade.com"]
// const [name, id, website] = details;
// console.log(name, id, website);

// const data ="Football, sports, 90210, 23, kolade, cool";
// const[itemname, category, sku, inventory] = data.split(",")
// console.log(itemname, category, sku, inventory)

// const team=["kolade", "harry", "sarah", "keegan", "ricker"]
// const [captain, assistant,...players]= team;

// SWAPPING VARIABLES WITH DESTURCTURING
// let inRing = "Hulk Hogan"
// let onSide = "The Rock"
// console.log(inRing, onSide);

// [inRing, onSide] = [onSide, inRing]
// console.log(inRing,onSide)

// DESTURCTURING FUNCTIONS
// function convertCurrency(amount){
//     const converted= {
//         USD: amount*0.76,
//         GPB:amount*0.53,
//         AUD:amount*1.01,
//         MEX:amount*13.30
//     };
//     return converted
// }

// const {USD, AUD, MEX,GPB} = convertCurrency(100)
// console.log(USD,GPB,AUD,MEX)

// function tipCalc ({total=100, tip=0.15, tax=0.13} = {})
// {
//     return total + (tip*total)+(tax*total);

// }
// const bill= tipCalc()
// console.log(bill)

// FOR OF LOOP
// const cuts =["chuck", "brisket", "shank","short rib"];

// for (const [i, cut] of cuts.entries()) {
//     console.log(`${cut} is the ${i+1} item`)

// }

// function addUpNumbers(){
//     let total= 0
//     for ( const num of arguments) {
//         total += num;
//     }
//     console.log(total);
//     return total;
// }

// addUpNumbers(10,23,45,67,89,56,123)

// THE FOR LOOPS
// for loop
// const cuts =["chuck", "brisket", "shank","short rib"];
// for(let i=0; i<cuts.length; i++){
//     console.log(cuts[i])
// }

// foreach loop
// const cuts =["chuck", "brisket", "shank","short rib"];
// cuts.forEach((cut)=>{
//     consol.log(cut);
//     if (cut === "brisket"){
//     continue;
//     }
// })

// forin loop
// const cuts =["chuck", "brisket", "shank","short rib"];
// for(const index in cuts){
//     console.log(cuts[index]);
// }

// forof loop
// const cuts =["chuck", "brisket", "shank","short rib"];
// for(const cut of cuts){
//     if(cut === "brisket"){
//      //break/ continue ;
//     }
//     console.log(cut)
// }

// USING FOR IN WITH OBJECTS
// const apple={
//     colour: " red >",
//     size: " medium >",
//     weight:" 50g >",
//     sugar: " 10 >"
// }

// for(const prop in apple){
//     const value= apple[prop];
//     console.log(value, prop)
// }

// ARRAY.FROM() AND ARRAY.OF()
// too stressful watch the video again until you know it
// or check it in "THE FOLDER"

// SPREAD OPERATOR

// const featured = ["Deep dish", "Peperoni","Hawaiian"];
// const speciality = ["Meatzza", "Spicy Mama", "Margherita"];

// const pizzas = [...featured, "veg", ...speciality]

// const fridayPizzas =[...pizzas];

// const deepDish = {
//     pizzaName :"Deep Dish",
//     size: "Medium",
//     ingredients: ["Marinara", "Italian Sausage", "Dough", "Cheese"]
// };

// SPREADING INTO A FUNCTION
// const inventors= ["Einstein","Tesla","Galileo"]
// const newInventors =["Musk", "Jobs"]
// inventors.push(...newInventors)
// console.log(inventors)

// const name =["kolade", "akande"]

// function sayHi(first, last){
//     alert(`Hi there ${first} ${last}`)
// };

// sayHi(...name)

// THE ...REST PARAM IN FUNCTIONS AND DESTRUCTURING
// function convertCurrency(rate,...amounts){
//     return amounts.map(amount => amount*rate);

// }
// const amounts=convertCurrency(1.54,10,23,52,1,56)
// console.log(amounts)

// const runner =["kolade", 123, 5.5, 5, 6, 35]
// const [name,id, ...runs]=runner;
// console.log(name, id, runs);

// const team =["wes","kait","lux","sheena","kelly"];
// const [captain,assistant,...players]=team;
// console.log(captain,assistant,players)

// OBJECT LITERAL UPGRADES
// const first ="snickers";
// const last = " bos ";
// const age = 2;
// const breed = "caucasian"
// const dog = {
//     first,
//     last,
//     age,
//     breed,
//     pals:["hudo"," jibola"]
// };
// console.log(dog)

// //instead of this
// const modal ={
//     create: function (){

//     },
//     open: function (){

//     },
//     close: function (){

//     },
// }

// // do this
// const modal ={
//     create(selector){

//     },
//     open(content){

//     },
//     close(goodbye){

//     },
// };

/// //////////////////
// function invertColor(color) {
//     return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
// }

// const key = 'pocketColor';
// const value = '#ffc600';

// const tShirt = {
//   [key]: value,
//   [`${key}Opposite`]: invertColor(value)
// };

// console.log(tShirt)

// const keys = ['size', 'color', 'weight'];
// const values = ['medium', 'red', 100];

// const shirt = {
//   [keys.shift()]: values.shift(),
//   [keys.shift()]: values.shift(),
//   [keys.shift()]: values.shift(),
// }
// console.log(shirt);

// PROMISES WATCH THE VIDEO

// BUILDING YOUR OWN PROMISES
// const p =new Promise((resolve, reject)=> {
//   setTimeout(()=>{
//   reject("kolade isn\'t cool");
//   }, 1000)
// });
// p
//  .then(data=>{
//    console.log(data)
//  })
//  .catch(err=> {
//    console.error(err)
//  })

// CHAINING PROMISES
// watch video

// WORKING WITH MULTIPLE PROMISES

// const weather = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ temp: 29, conditions: 'Sunny with Clouds'});
//       }, 2000);
//     });

//     const tweets = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(['I like cake', 'BBQ is good too!']);
//       }, 500);
//     });

//     Promise
//       .all([weather, tweets])
//       .then(responses => {
//         const [weatherInfo, tweetInfo] = responses;
//         console.log(weatherInfo, tweetInfo)
//       });

//       const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
//       const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

//       Promise
//         .all([postsPromise, streetCarsPromise])
//         .then(responses => {
//           return Promise.all(responses.map(res => res.json()))
//         })
//         .then(responses => {
//           console.log(responses);
//         });

// SYMBOLS
// const kolade =Symbol("kolade");
// const person=Symbol("kolade");

// const classroom ={
//    [Symbol("Mark")]:{grade: 50, gender: "male"},
//    [Symbol("olivia")]: {grade: 80, gender: "female"},
//    [Symbol("olivia")]: {grade: 80, gender: "female"},
// }
// // it doesn't work
// for(person in classroom){
//     console.log(person)
// };
// const syms =Object.getOwnPropertySymbols(classroom);
// const data =syms.map(syn=> classroom[syn]);
// console.log(data);

// PROTOTYPAL INHERITANCE REVIEW
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   Dog.prototype.bark = function() {
//     console.log(`Bark Bark! My name is ${this.name}`);
//   };

//   Dog.prototype.cuddle = function() {
//     console.log(`I love you owner!`);
//   };

//   const snickers = new Dog('Snickers', 'King Charles');
//   const sunny = new Dog('Sunny', 'Golden Doodle');

// CLASSES
// class Dog{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`Bark Bark! My name is ${this.name}`)
//     }
//     cuddle() {
//         console.log(`I love you owner!`);
//     }
//     static info() {
//         console.log("A dog is better than a cat by 10 times");

//     }
//     get description() {
//         return `${this.name} is a ${this.breed} type of dog`;
//     }
//     set nicknames(value) {
//         this.nick = value.trim();
//     }
//     get nicknames() {
//         return this.nick.toUpperCase();
//     }
// }

//   const snickers = new Dog('Snickers', 'King Charles');
//   const sunny = new Dog('Sunny', 'Golden Doodle');

// EXTENDING CLASSES AND USING SUPER()
// class Animal {
//     constructor(name){
//         this.name = name;
//         this.thirst = 100;
//         this.belly = [];
//     }
//     drink() {
//         this.thirst -=10;
//         return this.thirst;
//     }
//     eat(food) {
//         this.belly.push(food);
//         return this.belly;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed){
//         super(name);
//         this.breed= breed;
//     }
// }

// const rhino = new Animal("Rhiny")
// const snickers = new Dog("snickers","King charles")

// EXTENDING ARRAYS WITH CLASSES FOR CUSTOM COLLECTIONS
// class MovieCollection extends Array{
//     constructor(name, ...items) {
//         super(...items);
//         this.name = name;
//     }
//     add(movie){
//         this.push(movie)
//     }
//     topRated(limit =10){
//         return this.sort((a,b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
//     }
// }
// const movies = new MovieCollection('Wes\'s Fav Movies',
// { name: 'Bee Movie', stars: 10 },
// { name: 'Star Wars Trek', stars: 1 },
// { name: 'Virgin Suicides', stars: 7 },
// { name: 'King of the Road', stars: 8 }
// );

// movies.add({name:"Titanic",stars: 5});

// GENERATORS
// function* listPeolpe() {
//     yield "Wes"
//     yield "kait"
//     yield "snickers"
// }

// const people = listPeolpe()

/// /

// function* listPeolpe() {
//     let i = 0;
// yield i;
// i++;
// yield i;
// i++;
// yield i

// }

// const people = listPeolpe()

/// /
// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879 },
//     { first: 'Isaac', last: 'Newton', year: 1643 },
//     { first: 'Galileo', last: 'Galilei', year: 1564 },
//     { first: 'Marie', last: 'Curie', year: 1867 },
//     { first: 'Johannes', last: 'Kepler', year: 1571 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
//     { first: 'Max', last: 'Planck', year: 1858 },
//   ];

// function* loop (arr){
//     for (const item of arr){
//     yield item;
//     }
// }

// const inventorGen = loop(inventors)

// USING GENERATORS FOR AJAX FLOW CONTROL
// function ajax(url) {
//     fetch(url).then(data => data.json()).then(data => dataGen.next(data))
//   }

//   function* steps() {
//     console.log('fetching beers');
//     const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
//     console.log(beers);

//     console.log('fetching wes');
//     const wes = yield ajax('https://api.github.com/users/');
//     console.log(wes);

//     console.log('fetching fat joe');
//     const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
//     console.log(fatJoe);
//   }

//   const dataGen = steps();
//   dataGen.next(); // kick it off

// LOOPING GENERATORS WITH FOR OF
// function * lyrics () {
//   yield 'But don\'t tell my heart'
//   yield 'My achy breaky heart'
//   yield 'I just don\'t think he\'d understand'
//   yield 'And if you tell my heart'
//   yield 'My achy breaky heart'
//   yield 'He might blow up and kill this man'
// }

// const achy = lyrics()

// for (const line of achy) {
//   console.log(line)
// }

// PROXIES
// const person = { name: 'Kolade', age: 100 }
// const personProxy = new Proxy(person, {
//   get (target, name) {
//     // console.log('someone is asking for ', target, name)
//     return target[name].toUpperCase()
//   },
//   set (target, name, value) {
//     if (typeof value === 'string') {
//       target[name] = value.trim().toUpperCase()
//     }
//   }
// })
// personProxy.name = 'Kolade'

// ANOTHER PROXY EXAMPLE
// const phoneHandler = {
//   set (target, name, value) {
//     target[name] = value.match(/[0-9]/g).join('')
//   },
//   get (target, name) {
//     return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
//   }
// }

// const phoneNumbers = new Proxy({}, phoneHandler)

// USING PROXIES TO COMAT SILLY ERRORS
// const safeHandler = {
//   set (target, name, value) {
//     const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase())
//     if (!(name in target) && likeKey) {
//       throw new Error(`Oops! Looks like we already have a (n)
//         ${name} property but with the case of ${likeKey}`)
//     }
//     target[name] = value
//   }
// }

// const safety = new Proxy({ id: 100 }, safeHandler)

// safety.ID = 200

// SETS
// const people = new Set()
// people.add('kolade')
// people.add('tolu')
// people.add('kunle')

// for (const person of people) {
//   console.log(person)
// }

// const students = new Set(['ife', 'kara', 'tony'])

// const dogs = ['snickers', 'sunny']
// const dogSet = new Set(dogs)

// UNDERSTANDING SETS WITH BRUNCH
// const brunch = new Set()
// // as people start coming in
// brunch.add('wes')
// brunch.add('sarah')
// brunch.add('simone')
// // ready to open

// const line = brunch.values()
// console.log(line.next().value)
// console.log(line.next().value)
// brunch.add('heather')
// brunch.add('snickers')
// console.log(line.next().value)
// console.log(line.next().value)
// console.log(line.next().value)

// WEAK SETS
// const dog1 = { name: 'snickers', age: 3 }
// const dog2 = { name: 'sunny', age: 1 }

// const weakSauce = new WeakSet([dog1, dog2])
// console.log(weakSauce)
// dog1 = null
// console.log(weakSauce)


//MAPS
//  const dogs = new Map();

//  dogs.set("Snickers", 3);
//  dogs.set("Sunny", 2);
//  dogs.set("Hugo", 10);


//  dogs.forEach((val, key) => console.log(val, key));

//  for (const [key ,val]of dogs) {
//      console.log(key, val)
//  }


//  MAP METADATA WITH DOM NODE KEYS
// 


// WEAK MAP AND GARBAGE COLLECTION
 
// let dog1 = { name: 'snickers'}
// let dog2 = { name: 'sunny' }
 
//  const Strong = new Map();
//  const Weak = new WeakMap();

//  Strong.set(dog1, 'Snickers is the best!')
// Weak.set(dog2, 'Sunny is the 2nd best') 

// dog1 = null;
// dog2 = null;


//////////////////THE END/////////////////////////////
