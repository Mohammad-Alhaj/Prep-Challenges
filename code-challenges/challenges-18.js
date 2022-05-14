'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    
let newArray = str.split(' ')
let length = newArray.length/2
let result = newArray[Math.floor(length)].length

return result

//this is another solution ....could be destructuring  


// let newArray = str.split(' ')
// return (newArray[Math.floor( newArray.length/2)].length)

}




// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
   
        let array= [] ;
       let x = str1.split('')
       let y = str2.split('')

        
   
    if((x.length===y.length))   
    {
        
     for (let i = 0; i < x.length; i++) {
         if (str2.includes(x[i])) {
             
            array.push(x[i])
             }
         
     }
       
    }     
      
   else return false
    array.join('')
   if(x.length==array.length) 

    return true

    else 
    return false

//another solution .... it's coolud be shorter than old solution ^_^..................
    //could solve this problem in aonther method it's call sort() it's use for tedi the array 
    // in this problem I can sort the array  and compere between them and it give me true or false
}
        
  

    

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {

   return (arr.indexOf(int))
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };