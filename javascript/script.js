// var,let,const-line-by-line comparison

//declarations and initialization
///var a;//delcare karna
//var a=12;
//var a=13;//(phli value initialization krna)
//declare and initialize
//var hota kya h--
//.window mein add hota h
//.function scoped hota h and aap firse declare kr skte ho  same name se and error nahi aayega
//let ki value hm bdl skte pr const ki value nhi kyuki const fix hoti hai
//scope(global ,block,functional)
//global ka mtlb {} ke anter nhi h,aur {}ke anter variable create krege to vh block hoga,let ko hm block me bna skte pr var ko nhi,
//reassignment,redeclaration(redeclaration ka mtlb let ya var ka use krna )(reassigment ka mtlb hai ki same nhi ho skte jaise var var so skta hai pr let nhi)
//temporal dead zone(tdz-utna jitne mein js ko pata to hai ki variable exist krta hai pr wo aap ko value nhi de skta hai yh var me nhi hota hai let and const me hota hai)
//console.log(a);
//let a =12;
//hoisting impact per type(hoisting -ek variable ko jab js mein bnate hai wo variable do hisso mein toot jate hai and uska declare part upar chala jata hai and uska initialization part neeche reh jata hai)
//(hoistind 3 me hota hai let var const me
//var->hoist->undefined,let->hoist->x koi fined nhi hota vaise he const me hota hai)
///let age=undefined;
//console.log(agr);
 //age =24;
// var x= 1;//global
 //{
   // var x = 2;//global
// }
 //console.log(x);
 //let a =10;
 //{
  //  let a=20;
 //   console.log("inside:",a);
 //}
 //console.log("outside:",a);
 //data types
 //data ka types(2 type.primitives->aisi saari values jinko copy karne par tumhe ek real copy mil jaaye,reference-> inko copy karne pr real copy nahi milegi but aapko reference milega-parent ka)primitive type-string,number,boolean,null,undefined,symbol,bigint//reference-arrays[],object{},function()yh hai sb hai.
 //null ka mtlb h apne jaan boojh kr koi value nhi di
 //undefined ka mtlb ki ek variable aur usey value nhi di to jo value by default mili wo hai undefined hai
 //symbol-> unique immutable value
 //let a=9007199254740991n;//yh bigint ke liye hai
 // dynamic typing->js mein static typing nahi hai and yaha par hai dynmaic typing jiska mtlb hai aap data ko change kr skte ho kyuki yaha par dynamic data types hai)
 //type of quirks(e.g.,typeof null==="object")->
 //typeof nan h mtlb ki no ki value nhi h pr vh number h
 //type coercion (==vs===)->concept jismein aapka ek type automatically convert ho jayega (ex-"5"+1hai to yh 51 kr dega console me check krte hai)
 //truthy vs falsy values->(agr 0false "" null undefined nan document.all hai to yh falsy values hai yh sb hm console me check krte hai jaise ki maine check kiya !!0 krte hai to yh false aayega ) baki sb truthy values hoga
 //operators-->>arithmetic,comparsion,logical,assignment,unary,ternary
 //(+,-,*,/,%,**-->>arithmetic operators,(=,==,===,<,>,<=,>=,!,!= -->>comparison),(!,&&,|| -->>yh logical hai),(= yh assignment ha),(+,-,!,typeof,++,-- yh sb unary operator hai),(?:yh ternary operator)
 //control flow--->>(1.if else else -if ,2.switch case,3.early return pattern)
 //kaha se jaana hai->kaha tak jaana hai->kaise jana hai ..ham for loop use krte hai
 //for(start;end;change){
 //}
 // kaha se jaana hai ->kab rukna hai ->kaise jaana hai ...ham while loop use krte hai
 //ex--1.1-40 yh for loop
 //2.20-30 yh for loop
 //3.hello na aajaye-while loop
 //4.laal color ka ped-while loop
 //while loop example--
 // start
 // while(end){
 //code
 //change
 //}
 // ex--let i=1;
 //while(i<32){
 //console.log(i);
 //i++
 //}
 //do loop ex--
 //let i=1;
 //do{
 //console.log(i);
 //i++;
 //}
 //while(i<20)
 //brek,continue---
 //break ex--
 //for(let i=1; i<20; i++){
 //console.log(i);
 //if(i===32){
 //break;
 //}
 //}
 //continue ex--
 //for(let i=1; i<20;i++){
 //if(i===32)
 //continue;
 //}
 //}
 //question--
 //1. print number from 1 to 10 using a for loop.solve--
 //for(let i=1;i<11;i++){
 //console.log(i);
 //}
 //2.print numbers from 10 to 1 using a while loop.solve--
 //for loop se -- for(let i=10; i>0; i--){
 //console.log(i);
 //}
 //while loop--
 //let i=10;
 //while(i>0){
 //console.log(i);
 //i--;
 //}
 //3.print even number from 1 to 20 using a for loop solve---
 //for(let i=1;i<21;i++){
 // if(i%2===0){
 //   console.log(i);
 // }
 //}
 //4. print odd number from 1 to 15 using while loop solve--
 //for loop
//for (let i=1;i<16;i++){
// if(i%2===1){
   // console.log(i);
 // }
 //}
 //while loop--
 //let i=1;
 //while(i<16){
 // if(i%2===1){
 //   console.log(i);
 // }
 // i++;
 //}
 //5.print the multiplication table of 5(i.e.,5*1=5 ...5*10=50)
 //for loop
 //for(let i=1;i<10; i++){
 // console.log(`5*${i} =${5*i}`);
 //}
 //6.find the sum of number from 1 to 100 using a loop. solve--
 // for loop
 //let sum=0;
//for(let i=1; i<101;i++){
  sum=sum+i;
 // }
 // console.log(sum)
 //7.print all number between 1 to 50 that are divisible by 3. solve--
 //for(let i=1;i<51;i++){
  //if(i%3===0){
//console.log(i);
 // }
 //}
 //8.ask the user for a number and print whether each number from 1to that number is even or odd.(e.g."1 is odd","2 is even,"....) solve---
 //let val = prompt("give a number");
 //for (let i=1; i<=val;i++){
 // if(i % 2===0){
 //   console.log(`${i} is even`);
 // }else{
//    console.log(`${i} is odd`);
//  }
 //}
 //9.count how many number between 1 to 100 are divisible by both 3 and 5. solve--
 //for (let i=1; i<101;i++){
 //if(i % 3 === 0 && i%5 === 0){
 //console.log(i);
 //}
 //}
 //10.stop at first multiple of 7
 //write a loop from 1 to 100 that:
 //a) prints each number
 //b) stops completely when if finds the first number divisible by 7 solve--
 // for(let i =1; i <101; i++){
 //console.log(i);
 //if( i % 7 ===0) {
 // break;
 //}
 //}
 //11. skip multiples of 3----
 //weite a loop from 1 to 20 that:
 //.skips numbers devisible by 3
 //.prints all others
 //💡use continue
 //expected output:
 //1 2 4 5 7 8 10 11....(no 3,6,9,etc.)
 //solve---
 //for(let i =1; i<21;i++){
 //if (i %3 === 0) continue;
 //console.log(i);
//13. print frist 5 odd numbers only
//write a loop from 1to100 that:
//.prints only 5 odd numbers
//.then stops the loop
//💡use both if,continue,and a counter+break
//expected output:1 3 5 7 9
//solve---
//let count =o;
//for(let i=1; i<101;i++){
//if(i%2 ===1){
//count++;
//console.log(i);
//}
//if (count === 5) break;
//}
//chatgpt me search krna hai --- i am complete beginner in js and i perfer english give me some question to solve arround loop,10 question which are ulttimate beginner friendly
//chapter -6😊 function
//what why how,what function--agr code likh diya to wo turant chal jaata hai
//ex--function dance(){
//console.log("dance");
//console.log("dance");
//}
//dance();
//fat arrow fnc-- let fnc=()=>{
  //}
//fun expessions --let fnc=funtion(){
//}
//for ex-- function dance(v1){
//console.log(`${v1} naach raha hai`);
//}
//dance("ghoda");
//dance("lion");
//dance("gudiya");
//paramter question------
//function add (v1,v2){
//console.log(v1+v2);
//}
//add (1,2);
//jab arguments kai saare ho to humein utnr hi parameter banaane padege,issey bachne ke liye,hum rest ka use karte hai.....agr...function ke parameter space main lage to wo  rest operator hai and agr wo arrays and objects mein lage to wo spread operator for exmaple
//function abcd(...val){
//console.log(val);
//}
//abcd(1,2,3,4,5,6);
//return ka mtlb jaha se aaye ho wahi daal denge
//function abcd(){
  //return 12;
//}

 //let val = abcd();
 //console.log(val);
 //first class funts-->functions ko values ki tarah treat kar  skte hai
 //ex---  function abcd(val){
 //          val();
 //}
 //abcd(function (){
 //console.log("hey");
 //});
 //high of first--> wo function hota hai jo ki return kare  function ya fir acceept kare ek fnc apne parameter mein
 //for example ---function abcd(val){
 //}
 //abcd(function(){
 //})
 // for ex--- function abcd(){
 //return function(){
 // pure vs impure functions
 // aisa fnc jo ki baahar ki value ko naa badle wo hai pure fnc.
 //for example---let a = 12;
 //             function abcd(){
 //             console.log("hehe");
 //              }
 //            function hui(){
 //                a++;
 //               }
 //aisa fnc jo baahr ki vakue kp badal de wo hai impure fnc.
 //closures-->> ek fnc jo return kare ek aur function aur return hone waala function humesha use karega parent fnc ka koi variable.
 //for ex--->>>   function abcd(){
 ///                let a=12;
 //                  return function(){
 //                      console.log(a);
 //                     }
//                    }
//for ex----(lexical scoping)......
//           function abcd(){
//              let a = 12;
//             function defg(){
//               let b =13;
//              function ghij(){
//                 let c=14;
//             }
//            }
//          }
//    IIFE(Immediately invoked function expressions)    ex----  (function(){
//                       }) ();
//
// Partice question...............
//Q1.what's the difference between function declaration and expression in terms of hoisting?..
//solve--- abcd();
//       function abcd(){
//         }
//Q2.use rest parameter to accept any number of scores and return the total.
//solve--->>   
//      function getScore(....scores){
//               let total =0;
//              scores.forEach(function (val){
//                total =tatal +val;
//                  });
//             return total;
// }
//  console.log(getScore(10,12,14,18));
//Q3.write a BMI calculator.
// function bmi(weight,height) {
// return weight / (height * height);
//}
// console.log(bmi(69,1.7).toFixed(2));
///
/// CHAPTER --7   ARRAYS--
// ARRAY METHODS 
// 1.push()
//ex-- let arr = [1,2,3,4,5];
//       arr.push(7000);
//2.pop()
//ex -- let arr =[1,2,3,4,5];
//       arr.pop(5);
//3.shift()--sure ki vlaue ht jate  hai
// let arr = [1,2,3,4,5];
// arr.shift();
//4.unshift()---kuch add krne ke liye
// let arr = [1,2,3,4,5];
// arr.unshift(0);
//5.splice()-- add kr ke htaa deta h
// let arr =[1,2,3,4,5];
// arr.splice(2,1);
//6. slice()
// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,3);
//7.reverse()
// let arr = [1,2,3,4,5];
// arr.reverse();
//8. sort()-->assending order (a-b) or dessending order (b-a)
// let arr = [11,62,3,4,25];
//  let sr = arr.sort(function(a,b){
//      return a-b;
// });
//9. forEach()--> hr ek function ke liye chlata h
// let arr = [11,62,3,4,25];
// arr.forEach(function(val){
// console.log(val);
//});
//10.map--->> map srf tb use krna h jb aapko ek nya array banana h pichle array kr data ke basis par
//map dikhte hi sath man me ek blank array bna liya kro
//let arr = [11,62,3,4,25];
// let newarr=arr.map(function(){
//return 12;
//});
//11.filter()
// let arr = [1,2,3,4,5,6,7,8];
//let newarr = arr.filter(function(val){
// if (val>4) return true;
//});
//12. reduce() --> previousvalue:number,currentvalue:number, currentindex: number, array:number[]);number
//let arr =[1,2,3,4,5,6];
//arr.reduce(function(accumulator,val){
// return accumulator + val;
//},0);
// Q.. add "india" to the start of this array using spread..
// let countries = ["USA","UK"];
//COUNTRIES = ["INDIA",....countries];
//
//CHAPTER--OBJECT
//Q...destructure the key "first-name" as a variable called firstname.
//const user = {
//"first-name":"ARPITA",
//};
//Let{"first-name":firstName } user;
//Q..use object.entries() to print all key-value pairs as:1..title:javascript,2..duration:4 weeks...
// const course = {
//title:"javascript",
//duration:"4 weeks",
//};
//object.entries(couse).forEach(function(val){
//console.log(val[0] + ":" + val[1]);
//});
///
/// DOM (document object model)---..HTML SE element select karna ,text badlna ,html badalna,css badlna, attribute,event listeners...


