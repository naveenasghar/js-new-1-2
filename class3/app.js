// var num=+prompt("check a value");
// if(num % 3 ===0 && num % 5 ===0){
//     console.log("both 3 and 5")
// }else if(num % 3==0){
//     console.log("only 3")
// }else if(num % 5 ===0){
//     console.log("only 5")
// }
// var num=+prompt("enter your percentage");
// if(num >= 80 && num<= 100){
//     grade="a+";
// }else if(num >=70){
//     grade="a";
// }else if(num>=60){
//    grade="b";
// }else if(num>=50){
//   grade="c";
// }else if(num>=50){
//    grade="c";
// }else if  (num <=50) {
//     grade="fail";
// }
// console.log(grade);

// var num=+prompt("enter a apercentage");
// var grade;

// if(num >=0 && num < 100){
// if(num >= 80 ){
//     grade="a+"
// }else if(num >= 70 ){
//     grade="a";
// }else if(num >= 60 ){
//     grade="b"
// }else if(num >=50 ){
//     grade="c"
// }else if(num <=50 ){
//    grade="congarsulation you are fail"
// }
//    console.log(grade);
// }else{
//     console.log("error")
// }
var num=+prompt("enter a percentage");
var grade;
if(num >=0 && num<=100){
if(num >= 80){
    grade="a+"
}else if(num >=70){
    grade="a"
}else if(num >= 60){
    grade="b"
}else if(num <=50){
    grade="fail"
}
console.log(grade)
}
else{
console.log("error")
}
