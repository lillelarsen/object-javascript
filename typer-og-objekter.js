const tekst = "dslknflkdjanaslkjf";

const number = 213;

const bool = true;

// date, array skal man bruge Object.call
const idag = new Date();

const functiontest = function() {
    return "";
}

console.log(typeof date);

console.log(Object.prototype.toString.call(idag) === "[object Date]");
