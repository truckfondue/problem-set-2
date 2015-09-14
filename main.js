// 1. firstReverse
function firstReverse(str) {
	return str.split('').reverse().join('')
}

// 2. swapCase
function swapCase(str) {
	var arr = str.split('')
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i].toUpperCase()) {
			arr[i] = arr[i].toLowerCase()
		} else {
			arr[i] = arr[i].toUpperCase()
		}
	}
	return arr.join('')
}

// 3. letterCount
// hand-rolled attempt
// function uniqueLetters(word) {
//    var uniqueLetters = {}
//    var lettersArray = word.split('')
//    for(var i = 0; i < lettersArray.length; ++i){

//       if(uniqueLetters.hasOwnProperty(lettersArray[i])) {
//          uniqueLetters[lettersArray[i]] += 1
//       }
//       else {
//       	uniqueLetters[lettersArray[i]] = 1
//       }
//    }
//    return uniqueLetters
// }

// from stackoverflow
Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
}

function LetterCountI(str){
    var temp = str.split(" ");
    var final = '', weight = 0;
    for(var i = 0; i < temp.length; ++i) {
        var word = temp[i].split("");
        if(word.getUnique().length < word.length) {
            var diff = word.length - word.getUnique().length;
            if(diff > weight){
                weight = diff;
                final = temp[i];
            }
        }
    }
    return final;
}

console.log(LetterCountI("Catt dooog"));
console.log(LetterCountI("toddday is the greatttttest day ever!"));