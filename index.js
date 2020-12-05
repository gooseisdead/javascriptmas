//JavaScriptmas Blog

//Day One
// n chldren have got n pieces of candy. Each child must have the same amount of candy.
// individual pieces of candy may not be split.

// hint: Math.floor

function candies(children, candy) {
    const eachKidGets = Math.floor(candy / children)
    return eachKidGets * children
}

