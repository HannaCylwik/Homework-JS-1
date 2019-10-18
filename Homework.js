// zadanie 1

/* let Years = [1974, 1900, 1985, 2000];

for (let y = 0; y < Years.length; y++){
    if ((Years[y] % 4 === 0 && Years[y] % 100 !== 0) || (Years[y] % 100 === 0 && Years[y] % 400 === 0)){
        console.log(Years[y])}
        else {continue};
    
}  */




// zadanie 2

// let factorial = [1, 2, 3, 4, 5, 6, 7];
// let seven = 1;
// let i = 0;

// while (i < factorial.length){
//     seven = seven * factorial[i];
//     i++;
// }
// console.log(seven)

// for (let indicator = 0; indicator < factorial.length; indicator++){
//     seven = seven * factorial[indicator];  
// }
// console.log(seven);



// zadanie 3

// let table = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let i = 0;

// for(table[i] % 2 != 0; i < table.length;  i++) {
    
//     if (table[i] % 2 == 0){
//         continue;
//     }
//     sum = sum + table[i];
// }
// console.log(sum);





// zadanie 4

// let array = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let min = array[0];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min){
//         min = array[i]
//     }
//     else (array[i] > max) ;{
//         max = array[i]
//     }
// }
// console.log(min);
// console.log(max);




// zadanie 5

// let names = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
// let longest = names[0];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].length > longest.length){
//         longest = names[i]
//     }
// }
// console.log(longest)



///////// let names = ['Karol', 'Adam', 'Rski', 'drfyjooijuyderdfuip', 'Super', 'g'];
// let longest = names[0];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].length > longest.length){
//         longest = names[i]
//     }
//     // console.log(longest)
// }
///////// console.log(longest)





// zadanie 6

// let array = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let highest = array[0];
// let score = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= highest) {
//         highest = array[i]
//     }
    
// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == highest) {
//         score.push(i); 
//     }
// }
// console.log(score);






// zadanie 7


// let table = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let i = 0;
// let even = 0;
// let value = 0;

// for(table[i] % 2 == 0; i < table.length;  i++) {
    
//     if (table[i] % 2 != 0){
//         continue;
//     }
//     sum = sum + table[i];
//     even++ ;
// }
// console.log(sum);

// value = sum / even;

// console.log(value);




// zadanie 8

// let table = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let number = 0;

// for (let i = 0; i < table.length; i++) {
//     if (i % 2 == 0 && i != 0) {
//         sum = sum + table[i]
//         number++
//     }
//     else{continue}
// }
// // console.log(sum, number)
// let end = sum / number;
// console.log(end);





// zadanie 9

// let table = [1,6,23,8,4,98,3,7,3,98,4,98];
// let start = 0;

// for (let i = 0; i < table.length; i++) {
//     if (table[i] % 2 == 0) {
//         start = start + table[i]
//     }
//     if ( table[i] % 2 != 0) {
//         start = start - table[i]
//     }
// }
// console.log(start);