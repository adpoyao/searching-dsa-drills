///// EXERCISE 3

// **PROMPT**
// Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a searching algorithm?

// **DATA**
const library = [
	'005.133 Mike Cowlishaw: The REXX Language',
	'005.133 Sams: Teach Yourself C++ In 21 Days',
	'005.133 Bjarne Stroustrup: The C++ Programming Language',
	'005.2762 Douglas Crockford: JavaScript: The Good Parts',
	'005.2762 David Flanagan: JavaScript: The Definitive Guide',
	'005.44684 Meinhard Schmidt: Windows Vista for Dummies', //It certainly is...
	'220.52081 Zondervan: NIV Study Bible',
	'231.7652 Dr Russell Humphries: Starlight and Time',
	'623.82509051 Frederick Thomas Jane: Jane\'s Fighting Ships', //So far, the ships are winning.
	'796.8092 Chuck Norris: The Official Chuck Norris Fact Book',
];

let searchBook = (library, search) => {
	let length = search.length;
	let results = [];

	for (let i = 0; i < library.length; i++) {
		if (library[i].slice(0, length) === search) {
			results.push(library[i]);
		}
	}

	if (!results.length) {
		throw new Error('Book not found');
	} else {
		return results;
	}
};

console.log(searchBook(library, '7'));