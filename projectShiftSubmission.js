const findSum = function(array){
  totalCounter = 0;
  for (i = 0; i < array.length; i++){
    totalCounter += array[i];
  }
  return totalCounter;
};

const findFrequency = function(array) {
  const result = {
    most: '',
    least: ''
  };
  let testArray = Array.from(new Set(array));
  let testCount = [];
  for (let i = 0; i < testArray.length; i++){
    counter = 0;
    for (let j = 0; j < array.length; j++){
      if (testArray[i] === array[j]){
        counter++;
      }
    }
    testCount.push(counter);
  }
  const maxIndex = (argument) => {if (Math.max(...testCount) === argument){
    return true;}
  };
  const minIndex = (argument) => {if (Math.min(...testCount) === argument){
    return true;}
  };
  result.most = testArray[testCount.findIndex(maxIndex)];
  result.least = testArray[testCount.findIndex(minIndex)];
  return result;
};

const isPalindrome = function(str) {
  stringArray = str.split('');
  reverseArray = []
  for (let i = 0; i < str.length; i++){
    reverseArray.push(stringArray.pop());
  }
  reverseWord = reverseArray.join('');
  if (reverseWord === str){
    return true;
  } else {
    return false
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
