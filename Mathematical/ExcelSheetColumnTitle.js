// Leetcode 168
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // Approach by me
    /*
    const map = new Map();
    
    for(let i = 1; i <= 26; i++) {
      map.set(i, String.fromCharCode(64 + i));
    }

    if(columnNumber <= 26) {
      return map.get(columnNumber);
    }

    let res = "";
    let quotient = 0, remainder = 0;

    while(columnNumber > 26) {
      quotient = Math.floor(columnNumber / 26);
      remainder = columnNumber % 26;

      if(remainder === 0) {
        res = "Z" + res;
        quotient = quotient - 1;
      }
      else {
        res = map.get(remainder) + res;
      }

      if(quotient <= 26) {
        res = map.get(quotient) + res;
        break;
      }
      else {
        columnNumber = quotient;
      }
    }

    return res;
    */



    // More efficient approach from editorial and discussion section
    let res = "";

    while(columnNumber > 0) {
      columnNumber--;
      let remainder = columnNumber % 26;
      columnNumber = Math.floor(columnNumber / 26);
      res = String.fromCharCode(remainder + 65) + res;
    }

    return res;
};