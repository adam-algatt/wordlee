import wordBank from '../word-bank.txt'
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

   export const genWordSet = async() => {
      // using set instead of arr for rapid functionality of .has() method
      
      let wordSet; 

        await fetch(wordBank)
          .then((res) => res.text())
          .then((result) => {
          const wordArr = result.split("\r\n") // ea new line is a diff arr el src wordbank had carriage return and newline as seperators
            wordSet = new Set(wordArr)
          })

        return { wordSet };
    }

