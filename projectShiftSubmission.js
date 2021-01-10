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
  productArray = [];
  for (let i = 0; i < array.length; i++){
    productArray.push(array[i] * array[i+1]);
  };
  productArray.pop()
  return Math.max(...productArray)
};

const removeParenth = function(str) {
  parenthIndices = [];
  for (let i = 0; i < str.length; i++){
    if ((str[i] === '(') || (str[i] === ')')){
      parenthIndices.push(i);
    }
  }
  parenthIndices[1] += 1;
  partOne = str.slice(0, parenthIndices[0]);
  partTwo = str.slice(parenthIndices[1]);
  return partOne + partTwo;
};

const scoreScrabble = function(str) {
  scoreCounter= 0;
  for (let i = 0; i < str.length; i++){
    switch (str[i]){
      case 'z':
      case 'q':
        scoreCounter += 10;
        break;
      case 'j':
      case 'x':
        scoreCounter += 8;
        break;
      case 'k':
        scoreCounter += 5;
        break;
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        scoreCounter += 4;
        break;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        scoreCounter += 3;
        break;
      case 'd':
      case 'g':
        scoreCounter += 2;
        break;
      default:
      scoreCounter += 1;
    }
  }
  return scoreCounter;
};
