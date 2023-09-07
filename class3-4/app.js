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
// var num=+prompt("enter a percentage");
// var grade;
// if(num >=0 && num<=100){
// if(num >= 80){
//     grade="a+"
// }else if(num >=70){
//     grade="a"
// }else if(num >= 60){
//     grade="b"
// }else if(num <=50){
//     grade="fail"
// }
// console.log(grade)
// }
// else{
// console.log("error")
// }
// var num=+prompt("enter a percentage");
// var grade;
// if(num >=0 && num <=100){
//     if(num>=80){
//         grade="a+";
//     }else if(num>=70){
//         grade="a"
//     }else if(num>=60){
//         grade="b";
//     }else if(num>=50){
//         grade="c";
//     }else if(num<=50){
//         grade="fail"
//     }
//     document.write(grade);
// }else{
// document.write("error")};
// var months=["january","february","march"];
// months[6]="april";
// console.log(months);
// var days=["mon","tues","wed","thurs"];
// days.push("friday");
// console.log(days);
// var days=["mon","tues","wed","thurs"];
// days.push("friday");
// days.pop();
// console.og(days);
// days.shift();
// days.splice(0,1 ,"march","april");
// console.log(days);
// var months=["jan","feb","march","april"];
// months.slice(0,3);
// console.log(months);
// console.log(months.slice(0,4));
// var months=["sunday","monday","tues","wed"];
// months.push("friday");
// months.pop(4);
// months.unshift("saturday");
// months.shift("saturday");
// months.splice(1,3);
// console.log(months);
// console.log(months.slice(0,2));
// ////////////////////////////////////////////////////////////
// class=4
// for(var i = 0;i<=70; i++){
//     document.write("hey" +i);
// }
// for(var i=1;i<=10;i++){
//     console.log("2 x"+ i +"="+i*2);
// }
//
// var table=prompt("enter a table");
// for(var i=1;i<=10;i++){
//     console.log(table+ "x" +i+"=" + table*i)
// }
//  
// var cities=["pakistan","quetta","isl"];
// var cities=prompt("enter a city");


// for(var i = 0;i<cities.length;i++){
//     if(cities===[i]) {
//         console.log("found" + city);
//         break;
//     }else{
//         console.log("error");
//     }
// }
// var cities  =["isl","que","pun"];
// var city =prompt("enter a city");
// var found = false;

// for (var i = 0; i < cities.length; i++){
//     if(city===cities[i]){
//         console.log("found " + city);
//         found = true;  
//         break;
//     }
// }
// if(!found){
//     console.log("not found" + city); 
// }
// var country=["pak","ind","indo"];
// var count=prompt("enter a country");
// var found=false;

// for (var i =0; i < country.length; i++){
//     if(count===country[i]){
//         console.log("found " + count);
//         found=true;
//         break;
//     }

// }
// if(!found){
//     console.log("not found " + count);
// }

// var city=["Pak","Ind","Sri"];
// var cities=prompt("enter a city");
// var found=false;
// for(var i =0; i < city.length;i++){
//     if(cities.toLowerCase===city[i].toLowerCase){
//         console.log("found" + cities);
//         found=true;
//         break;
//     }
// }
// if(!found){
//     console.log(" notfound" + cities);
// }
// var names=["naveen","ilma","anabia"];
// var user=prompt("enter a name");
// var found=false;
// for(var i =0;i<names.length;i++){
//     if(user.toLowerCase===names[i].toLowerCase){
//         console.log("found" + user );
//         found=true;
//         break;
//     }
// }
// if(!found){
//     console.log("not found"+ user);
// }
// for(var i=1; i<=5; i++){
//     var star=" ";
//     for(var j=1; j<=i;j++){
//     star= star + "* ";
// }
// console.log(star);

// }
// for(var i =1; i<=5; i++){
//     var star=" ";
//     for(var j=1; j<=i; j++){
//         star=star + " *";
//     }
//     console.log(star);

// }
// for(var k=1; k<=9; k++){
//     var star=" ";
//     for(var l=1; l<=k;l++){
//         star=star + " ?"
//     }
//     console.log(star);
// }
// var array=[[0 , 1 , 2],["a" , "b" , "c"]];
// for (var i=0; i<=array.length; i++){
//     for(j=0; j<array[i].length; j++){
//         console.log(array[i][j]);
//     }
// }