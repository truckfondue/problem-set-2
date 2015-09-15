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
function uniqueLetters(word) {
   var uniqueLetters = {}
   var lettersArray = word.split('')
   for(var i = 0; i < lettersArray.length; ++i){

      if(uniqueLetters.hasOwnProperty(lettersArray[i])) {
         uniqueLetters[lettersArray[i]] += 1
      }
      else {
      	uniqueLetters[lettersArray[i]] = 1
      }
   }
   return uniqueLetters
}

function keyValueArray(obj) {
  var arr = []
  for (key in obj) {
    arr.push(obj[key])
  }
  return arr.sort(function(a, b) {
    return b - a
  })
}

function letterCount(arr) {
  var words = arr.split(' ').sort(function(a, b) {return b.length - a.length})
  var mostrepeatedArr = []
  var mostrepeatedWord = ''
  for (var i = 0; i < words.length; i++) {
    if(keyValueArray(uniqueLetters(words[i])).length > mostrepeatedArr && keyValueArray(uniqueLetters(words[i]))[0] > 1) {
      mostrepeatedArr = keyValueArray(uniqueLetters(words[i]))
      mostrepeatedWord = words[i]
    } 

  }
  if (mostrepeatedWord === '') {
    return -1
  } else {
    return mostrepeatedWord
  }
}

console.log(keyValueArray(uniqueLetters('banjo billy')).length)



// from stackoverflow
// Array.prototype.getUnique = function(){
//    var u = {}, a = [];
//    for(var i = 0, l = this.length; i < l; ++i){
//       if(u.hasOwnProperty(this[i])) {
//          continue;
//       }
//       a.push(this[i]);
//       u[this[i]] = 1;
//    }
//    return a;
// }

// function LetterCountI(str){
//     var temp = str.split(" ");
//     var final = '', weight = 0;
//     for(var i = 0; i < temp.length; ++i) {
//         var word = temp[i].split("");
//         if(word.getUnique().length < word.length) {
//             var diff = word.length - word.getUnique().length;
//             if(diff > weight){
//                 weight = diff;
//                 final = temp[i];
//             }
//         }
//     }
//     return final;
// }

// console.log(LetterCountI("Catt dooog"));
// console.log(LetterCountI("toddday is the greatttttest day ever!"));