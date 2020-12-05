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

//other solutions include...

//Day Two - Deposit Profit
//You have deposited a specific amount of dollars into a bank account.
//Each year, the balance increases by the same annual growth rate.
//Solve for how long it would take the balance to reach a given threshold
//(assuming not additional deposits are made)

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
//Wrie a function that splits an array (first argument)
//into two groups the length of size (second argument)
//returns a two-dimensional array.

