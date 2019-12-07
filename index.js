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

//TEMPLATE STRINGS INTRODUCTION
// const name="jan di";
// const age = 6 
// const sentence1 = "My dog "+ name + " is "+ age*7 + " years old. "
// const sentence2 = `My dog ${name} is ${age*7} years old.`
// console.log(sentence2) 

//CRATING HTML FRAGMENTS WITH TEMPLATE LITERALS
// It is in a folder

//TAGGED TEMPLATE LITERALS
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

//NEW SRTING METHODS
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


//SWAPPING VARIABLES WITH DESTURCTURING
// let inRing = "Hulk Hogan"
// let onSide = "The Rock"
// console.log(inRing, onSide);

// [inRing, onSide] = [onSide, inRing]
// console.log(inRing,onSide)

//DESTURCTURING FUNCTIONS
function convertCurrency(amount){
    const converted= {
        USD: amount*0.76,
        GPB:amount*0.53,
        AUD:amount*1.01,
        MEX:amount*13.30
    };
    return converted
}
 
const {USD, AUD, MEX,GPB} = convertCurrency(100)
console.log(USD,GPB,AUD,MEX) 
