import { wordBank } from '../wordBank'
    export const defaultBoard = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ];

    export const keyboardRows = {
        row1 : ['q','w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        row2 : ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        row3 : ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    }

   export const genWordSet = async () => {
     // using set instead of arr for rapid functionality of .has() method

     let wordSet;
     let todaysWord;
  
    const wordArr = wordBank.split('\n');
    console.log(wordArr);
    todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    console.log(todaysWord);
    wordSet = new Set(wordArr)

     return {
       wordSet, 
       todaysWord
     };
   }

