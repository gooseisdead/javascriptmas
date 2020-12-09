//JavaScriptmas Blog

//Day One
// n chldren have got n pieces of candy. Each child must have the same amount of candy.
// individual pieces of candy may not be split.

// hint: Math.floor

function candies(children, candy) {
    const eachKidGets = Math.floor(candy / children)
    return eachKidGets * children
}

//since we don't need fractional numbers of candy, Math.floor works great here.

//Math.floor() is a static method of Math in js. It returns a number representing
//the largest integer less than or equal to the specified number. 

// **************** //

//Day Two - Deposit Profit
//You have deposited a specific amount of dollars into a bank account.
//Each year, the balance increases by the same annual growth rate.
//Solve for how long it would take the balance to reach a given threshold
//(assuming no additional deposits are made)

function depositProfit(deposit, rate, threshold) {
    let yearsToMature = 0
    let rateOfReturn = rate / 100
    while (deposit < threshold) {
        deposit += (deposit * rateOfReturn)
        yearsToMature++
    }
    return yearsToMature
}

//there is likely some refactor that can be done here, but this has some nice
//referential logic to it.

//Day Three - Chunky Monkey
//Wrie a function that splits an array of values (first argument)
//into two groups the length of size (second argument)
//returns a two-dimensional array.

//example:
// array1 = ["a" "b", "c", "d"] should return [["a", "b"], ["c", "d"]] where size is 2
// array2 = ["0", "1", "2", "3", "4", "5"] should return [["0", "1", "2", "3"], ["4", "5"]] where size is 4

//hint: .slice()

function chunkyMonkey(values, size) {
    let chunks = []
    let count = 0
    let chunkShare = values.length
    
    while (count < chunkShare) {
        chunks.push(values.slice(count, count += size))
    }
    return chunks
}

//again, could probably use a refactor here but this rolled right out for me logically
//i knew i would need a new array and a "counter" of sorts to keep track of how many times
//I'd traversed the values to the given size

//Day 4 - Century from Year
//Given a year, return the century it was in
//Centuries defined from year 1-100, the second century being 101-200 etc...
//solve for which century any year is in, and for edge case year 00

// hint: Math.floor

function centuryFromYear(year) {
    return Math.ceil( year / 100 )
}

//Math.ceil works well here, better than involving Math.floor with more arithmatic.

//Day 5 - Reverse a String
//You may need to turn the string into an array before reversing it.
//Output must be a single string

function reverseAString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


//Day 6 - Sort Strings by Length
//Given an array of strings, create a function to order them from least characters
//to most.

//Hint: .sort()

function sortByLength(strs) {
    let sortedArray = 
        strs.sort((sortedArray, valueLength) => {return sortedArray.length - valueLength.length})
    return sortedArray;
}

// Day 7 - Count Vowel Consonant 
// Given a string of letters, assign a value of 1 to vowels and 2 to consonants.
// Return the value of a give string.

// Hints: .split(), .reduce()

function countVowelConsonant(str) {

    return str.split("").reduce(function (accumulator, currentValue) {
      let i=2;
      if("aeiou".indexOf(currentValue) != -1) i=1;  
      return accumulator +i;
    }, 0);
  }

  // ..... //



