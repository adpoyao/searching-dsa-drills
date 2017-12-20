'use strict';

let dataString = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5 76 62';

const dataArray = dataString.split(' ').map(element => parseInt(element, 10));

const sortedArray = dataArray.sort((a, b) => (a - b));
// O(?)

function linearSearch(array, value){
	let counter = 0;
	for (let i=0; i < array.length; i++) {
		if (array[i] === value) {
			return `Number of tries: ${i + 1}`;
		}
	}
}
// Testing linearSearch
// console.log(linearSearch(array, 68));
// O(n)

function binarySearch(array, value, start = 0, end = array.length, counter = 1){
	if (start > end) {
		return -1;
	}
	let index = Math.floor((start+end)/2);
	let result = array[index];

	if (result === value) {
		return [index, counter];
	}
	else if (result < value) {
		return binarySearch(array, value, index + 1, end, counter + 1);
	}
	else if (result > value) {
		return binarySearch(array, value, start, index - 1, counter + 1);
	}
}

// Test binary search
// console.log(binarySearch(sortedArray, 1));
// O(log n);
