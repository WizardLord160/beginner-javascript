// JSON.stringify - object input
console.log("\n -------- ")
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);

// JSON.stringify - collection input
console.log("\n -------- ")
let myBooksJSON = JSON.stringify(myBooks);
console.log(myBooksJSON);

// JSON.parse - string input
let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n -------- ")
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);

// JSON.parse - string input
data = myBooksJSON;
parsed = JSON.parse(data);
console.log("\n --------" )
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);
console.log("Author of 2nd book: " + parsed[1].author);