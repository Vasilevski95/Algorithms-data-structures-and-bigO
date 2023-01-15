//Algorithms and bigO

// const sumUp = (n) => {
//   let rezultat = 0;
//   for (let i = 0; i <= n; i++) {
//     rezultat += i;
//   }
//   return rezultat;
// };

// let start = 0;
// let end = 0;

// start = performance.now();
// sumUp(10);
// end = performance.now();

// const result = end - start;

// console.log(result);

// function sumUp(n) {
//   return (n / 2) * (1 + n);
// }

// let start = 0;
// let end = 0;

// start = performance.now();
// sumUp(10);
// end = performance.now();

// const result = end - start;

// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const sumNumbers = (array) => {
//   let result = 0; // 1

//   for (let i = 0; i < arr.length; i++) { //1
//     result = result + array[i]; // n
//   }
//   return result; //1
// };

// T = 1+1+1+n = 3+n
// T = 1*n
// T = n => O(n) -> Linear time complexity

// console.log(sumNumbers(arr));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumNumbers1(numbers) {
//   return numbers.reduce((sum, curNum) => sum + curNum, 0);
// }

// console.log(sumNumbers1(arr));

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

//THEORY: Algorithms and bigO

// What is an algorithm?

// 1) def: An algorithm is a process or set of rules to be followed in calculations or other problem-solving operations,
// 	especially by a computer.

// 2) def: In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem.
// 	It takes a set of input(s) and produces the desired output.

// 3) def: A sequence of steps (instructions) to solve a clearly defined problem (The same steps always lead to
// 	the same solution of a problem (given the same inputs))

// Every program is an algorithm OR: Every program consist of many smaller algorithms.

// As a programmer, I need to be able to solve problems (efficiently)

// What is the "Best possible solution"?

// -Algorithm with the best performance

// Measuring Performance (Time complexity - Big O)
//If we use a for loop to find solution for example in the video, bigger number leads to more loop iterations.
//Hense time increases in a linear way

// Deriving Big O (Asymptotic Analysis)

// 1. Define the function (mathematical function -> graph to se if its constant, linear, quadratic, cubic)
// 2. Find the fastest growing term (example: T = 3 + 1*n  -> 1*n)
// 3. Remove the coefficent ( T = 1*n -> n)
// 	So I get T=n -> O(n)

// Deriving the time complexity function -> Count the number of expression execution (You look at your function (algorithm)
// 	and you look at each expression (every line of code in it) and you count how often that's getting executed)

// Example 1: n=1 n=3 n=10 n=n
// const sumUp = (n) => {
//    let rezultat = 0; -> How often does this first expression execute (n=1 -> 1 time); (n=3 -> 1 time); (n=10 -> 1 time); (n=n -> 1 time)
//    for (let i = 0; i <= n; i++) { 	 (n=1 -> 1 time); (n=3 -> 1 time); (n=10 -> 1 time); (n=n -> 1 time)
//      rezultat += i; ->		(n=1 -> 1 time); (n=3 -> 3 times); (n=10 -> 10 times); (n=n -> n times)
//    }
//    return rezultat; 	(n=1 -> 1 time); (n=3 -> 1 time); (n=10 -> 1 time); (n=n -> 1 time)
//  };

// T = 1 + 1 + n + 1 = 3 + n = 3 + 1 * n -> Time equasion (math) -> So this is linear

// 1.

// Example 2: n=1 n=3 n=10 n=n

// function sumUp(n) {
//     return (n/2) * (n+1)  	(n=1 -> 1 time); (n=3 -> 1 time); (n=10 -> 1 time); (n=n -> 1 time);
// }

// T = 1 -> This is constant

// 1. T = 1
// 2. T = 1 -> 1
// 3. T = 1
// 	So I get T=1 -> O(1)

// Using big O to compare algorithms

// O(1) - Constant time complexity -> n (number of input) has no effect on the time the algorithms takes

// O(log n) - Logarithmic time complexity -> Execution time grows logarithmically with n

// O(n) - Linear time complexity -> Execution time grows linearly with n

// O(n^2) - Quadratic time complexity -> Execution time grows quadratically with n

// O(2^n) - Exponential time complexity -> Execution time grows exponentially with n

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

//Data structures

//Arrays
// const names = ["Djole", "Marko", "Jana", "Djole"];

// console.log(names[1]);
//Index starts at zero, we can find any element by index

// console.log(names.length);
//Size and length adjusts dynamically

// for (const el of names) {
//   console.log(el);
// }
//Arrays are iterable

// names.push("Jana");
// console.log(names.length);

// const janaIndex = names.findIndex((el) => el === "Jana");
//Downside: to find elements, js goes through an array and search for specific element
//This can be difficult if an array is very big and element is close to the last one

// console.log(janaIndex);

// names.splice(2, 1);
//Splice method allows me to modify the array and remove elements
//First number is index that we want to start, and second number is index that we want to splice after first number index
//This can also be performance intensive, because we have to move all the elements after the element has been removed

// console.log(names);

//Sets - a closer look

// const ids = new Set();

// ids.add("abc");
// ids.add(1);
// ids.add("bb2");
// ids.add(1);
// ids.add("fafaf");

// console.log(ids.has("abc"));
//returns true/false

// ids.delete("bb2");

// console.log(ids);

/*Sets are great choise if you need lists of data, but you don't want a duplicate values, and you dont care so much about the order and the position */

//Objects

// const person = {
//   firstName: "Djordje",
//   age: 27,
//   hobbies: ["sports", "cooking"],
//   greet() {
//     console.log("Hi, I'Am " + this.firstName);
//   },
// };

// for (const el of person) {
//   console.log(el); // You cannot use for of loop (person is not iterable)
// }

// console.log(person[0]); // Can't access elements by index

// console.log(person["firstName"]); //You can access by key name

// console.log(person.firstName); // You can access by dot notation

// person.lastName = "Vasilevski";
// console.log(person);
//You can add new properties to an object using dot notation

// delete person.age;
// console.log(person);
//You can delete properties with delete method

// console.log(person.greet());
//You can access methods inside of an object

//Maps

// const resultData = new Map();

// resultData.set("average", 1.52); //With set we add new key-value pair

// resultData.set("lastResult", null);

// const country = { name: "Germany", population: 82 };

// resultData.set(country, 0, 89);
//You can set a country as a key, and then store a value for it
//This is not allowed in objects

// for (const el of resultData) {
// console.log(el); //We can use for-of loop
// }

//In the console, we get back arrays -> every key-value pairs saved in map are set as an array
//And that array have two elements (first: key, second: value)

// resultData.set("average", 33.89);

// console.log(resultData);

// console.log(resultData.get("average"));
//We can use get method to get access to all the values or just the keys

// resultData.delete(country);
// console.log(resultData);
//We can use delete method to delete an element by key

//Linked list

// class LinkedList {
// constructor() {
// this.head = null; //First element of the list
// this.tail = null; //Last element of the list
// }

// append(value) {
// const newNode = { value: value, next: null }; //This is an empty object at first (because every node knows about the next node in line)

// if (this.tail) {
// this.tail.next = newNode; // My newNode is now stored in the next property, of the previously last node
// }
//I must check if I have tail before I try to edit the old tail, if I dont have a tail, then I dont update it (there is nothing to update)
// this.tail = newNode; //I can now overwrite the tail property of my constructor with my newNode
//   if (!this.head) {
//     this.head = newNode;
//   }
// }
//I must check if i have a head property (!this.head -> if its falsy => null)

// prepend(value) {
//   const newNode = { value: value, next: this.head };

//   this.head = newNode;

//   if (!this.tail) {
//     this.tail = newNode;
//   }
// }
//I add element at the beginning of the linked list

// insertAfter(value, afterValue) {
// I find the afterValue (find the node with this value), if I do find a node (if it doesent return null) then I want to create new node after that old node (value I found)
// const existingNode = this.find(afterValue);

// if (existingNode) {
// const newNode = { value: value, next: existingNode.next }; // existingNode.next -> next value of the existing node
// existingNode.next = newNode; //I put newNode between existingNode and the old existing next node
//   }
// }

// find(value) {
//   if (!this.head) {
//     return null;
//   }

//   let curNode = this.head;

//   while (curNode) {
//     if (curNode.value === value) {
//I find the node with the value I'Am looking for
// return curNode; // I return that node (by calling return I do not continue with the loop)
//   }
//   curNode = curNode.next;
// }

// return null; // If I dont find anything i return nothing (I can put null also -> Optional)
// }

// delete(value) {
//   if (!this.head) {
//     return;
//   }

//   while (this.head && this.head.value === value) {
//     this.head = this.head.next;
//   }

//   let curNode = this.head;

//   while (curNode.next) {
//     if (curNode.next.value === value) {
//       curNode.next = curNode.next.next;
//     } else {
//       curNode = curNode.next;
//     }
//   }

//   if (this.tail.value === value) {
//     this.tail = curNode;
//   }
// }

// toArray() {
//   const elements = [];

//   let curNode = this.head;

//   while (curNode) {
//     elements.push(curNode);
//     curNode = curNode.next;
//   }
//   return elements;
// }
//This does not mean that we replace old tail property in memory, old tail still exists in memory, its just in this linked list object we store a new value for the tail property
//This does not delete the old object which was the tail previously, its just not tied to the tail property anymore
// }
//append() method is used to insert a set of nodes to the list after the last child

//Appending means that we need to go to the previously last element (tail), and we need to update the next value on the tail
//And make sure that the next value of the previous tail node now points at this new node
// const linkedList1 = new LinkedList();
// linkedList1.append(1);
// linkedList1.append("hello there");
// linkedList1.append("djole");
// linkedList1.append("max");
// linkedList1.append("max");
// linkedList1.append(true);
// linkedList1.append(18.51);

// linkedList1.prepend("first value!");

// console.log(linkedList1.toArray());

// linkedList1.delete("max");

// linkedList1.delete("first value!");
// linkedList1.delete(18.51);

// console.log(linkedList1.find("first value!"));
// console.log(linkedList1.find("djole"));

// console.log(linkedList1.toArray());

// linkedList1.insertAfter("new value -1", 1);
// linkedList1.insertAfter("new value -2", "hello there");

// console.log(linkedList1.toArray());

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

//THEORY: Data structures

// Maps - a closer look

// new Map()
// map.set('name', 'Djordje')
// map.set(true,true) // Boolean key

// Maps syntax looks like Sets syntax -> We create a map with a constructor function, and then we got a certain methods for interacting with the map
// Specifficaly for adding new key-value pairs we use the set method, and there we can use different kinds of keys, but also objects and arrays
// And you can store any kind of value for any key

// Characteristics:

// -Ordered key-value pairs of data
// -Element access via key
// -Maps are iterable (you can use the for-of loop)
// -Keys are unique, values are not
// -Keys can be anything (reference values like arrays)
// -Maps are meant to be pure data storage, optimized for data access -> you could store a function, but that function will not be able to interract with other Map key-value pairs

// Objects vs Maps

// Objects:
// -Very versatile construct and data storage in JavaScript (more common, easy to use)
// -Must-use if you want to add extra functionality

// Maps:
// -Focused on data storage
// -Can simplify and improve data access compared to object

// WeakSet & WeakMap

// -Variations of Set and Map
// -Values in the case of the WeakSet, and the keys in the case of the WeakMap are only 'weakly referenced'
//  This means that garbage collection can delete values and key if not used anywhere else in the app
//  Example: You have set and bunch of ids in there, and js finds that you don't use them anywhere else
//  It frees up that space in memory. So WeakSet and WeakMap can free space in memory in that way

// Custom data structure: 'Linked list'

// A linked list is a list data structure, you can store values in there (of any kind: numbers, strings, objects)
// you don't work with indexes as in an array and you dont have unique values like in Set.
// But instead, every element in a linked list knows it's value, and it also has a pointer at the next element in line
// and that continues...

// so 1) def: A linked list is a list full of elements that are linked to each other, so every element knows about a next element in line
//  and only about that element. An element does not know anything about element in the back.

// Linked lists were invented because they were really flexible when it came to resizing the list and for memory management.
// Advantage -> Insertion at the start and at the end is very efficient, more efficient than in the array

// Linked list contains nodes, and to insert nodes at the end and at the beginning, we keep track of the first node (head)
// and the last node (tail)

// Why would you want a 'Linked List'

// -Historically (in other programming languages) the main reason was memory management. You didn't have to specify (occupy)
//  the size in advance

// Nowadays, JavaScript has dynamic array (dynamic re-sizing built in) and memory isn't really the primary issue in JavaScript apps

// -Linked list can be useful if you do a lot of insertions at the beginning of lists - Linked lists are faster than arrays at this

// Linked list & arrays time complexity

// Linked list:
// -Element access -> O(n)
// -Insertion at end -> With tail: O(1)
// 		                  Without tail: O(n)
// -Insertion at beginning -> O(1)	    =>	  (LINKED LIST IS BETTER FOR THIS!)
// -Insertion in middle -> Search time + O(1)
// -Search elements -> O(n)

// Arrays:
// -Element access -> O(1)
// -Insertion at end -> O(1)
// -Insertion at beginning -> O(n)
// -Insertion in middle -> O(n)
// -Search elements -> O(n)

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

//DJORDJE VASILEVSKI ©
