// // ASSESSMENT 3: Coding Practical Questions

// // --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// const fiboSeq = () => {
// 	let arr = [];
// 	arr[0] = 0;
// 	arr[1] = 1;
// 	for (i = 2; i <= 10; i++) {
// 		arr[i] = arr[i - 1] + arr[i - 2];
// 	}
// 	return arr;
// };

// console.log("Fibonacci:", fiboSeq());

// // // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // // Expected output: [-9, 7, 9, 199]
// // var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // // Expected output: [-823, 7, 23]

// const oddNums = (array) => {
// 	let filteredArray = array.filter(
// 		(value) => typeof value === "number" && value % 2 !== 0
// 	);
// 	return filteredArray.sort((a, b) => a - b);
// };
// console.log(oddNums(fullArr1));
// console.log(oddNums(fullArr2));

// // --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// var middleLetters1 = "hello"
// // Expected output: “l”
// var middleLetters2 = "rhinoceros"
// // Expected output: “oc”

// const middleLetters = (string) => {
// 	let stringArray = string.split("");
// 	let middle = stringArray[Math.floor(stringArray.length / 2)];
// 	if (stringArray.length % 2 === 0) {
// 		let twoMid = stringArray.length / 2 - 1;
// 		return stringArray[twoMid] + middle;
// 	} else {
// 		return mid;
// 	}
// };
// console.log(middleLetters(middleLetters1));
// console.log(middleLetters(middleLetters2));

// // --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)
//ran out of time as i was trying to do challenges from the beggining of the syllabus to practice will go twork through them

// // --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []

// ran out of time working on portfolio project will get back to it and ush it up on tuesday
