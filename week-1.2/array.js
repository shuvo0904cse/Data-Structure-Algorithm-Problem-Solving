const arr = ['a', 'b', 'c'];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]); //get last index value


//when you access any data with index then time complexity will be O(1)


//Add in last element - Time Complexity will be O(1)
arr.push('d');
console.log(arr);

//remove last element - Time Complexity will be O(1)
arr.pop();
console.log(arr);

//Add the beginning element - Time Complexity will be O(n)
arr.unshift('aa');
console.log(arr);

//remove the beginning element - Time Complexity will be O(n)
arr.shift();
console.log(arr);

//finding element from array - Time Complexity will be O(n)
for (let elm in arr) {
    if (elm == 'c') console.log(true);
}

//forEach, map, filter, reduce, slice, splice - TIme COmplexity O(n)