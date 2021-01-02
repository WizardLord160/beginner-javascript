const blank = {};
console.log("Blank type:", typeof blank);
console.log("Blank value", blank);

const book = {
    title: "1894",
    author: "George Orwell",
    isAvailable: false
};
console.log("Book type:", typeof book);
console.log("Book value:\n", book);

const data = {title: "1984", author: "George Orwell"};
const book1 = new Object(data);
console.log("\n--- Define book1 with data");
console.log("Book1 type:", typeof book1);
console.log("Book1 value: \n, book1");

const dataFunc = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
    checkIn: function() {this.isAvailable = true;},
    checkOut: function() {this.isAvailable = false;}
};
const book2 = new Object(dataFunc);
console.log("\n--- Define book2 with data and functions");
console.log("Book2 type:", typeof book2);
console.log("Book2 value:\n", book2);


// Dot Notation
console.log(book2.author);
book2.author = "G. Orwell";
book2["author"] = "G. Orwell";
console.log(book2);

// Bracket Notation
console.log(book2.author);
book2.author = "G. Orwell";
book2["author"] = "G. Orwell";
console.log(book2);

// Dot Notation
console.log(book2.author);
book2.author = "G. Orwell";
book2.author = "G. Orwell";
console.log(book2);

// Brackets Notation
console.log(book2.author);
book2.author = "G. Orwell";
book2["author"] = "G. Orwell";
console.log(book2);

// Dot Notation
console.log(book2.isAvailable);
book2.checkOut();
console.log(book2);

const bookObj = {
    checkIn: function() {
        return this;
    }
}
console.log("\n\n this is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);

function anotherCheckIn() {
    return this;
}

console.log("\n\n this is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);