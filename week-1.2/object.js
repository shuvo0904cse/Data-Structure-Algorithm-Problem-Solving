const obj = {
    name: 'Saiful',
    email: 'shuvo0904@gmail.com'
};
console.log(obj.name);
console.log(obj['email']);

//loop -  - Time Complexity O(n)
for (let key in obj) {
    console.log(obj[key]);
    console.log(key);
}

//add to object - Time Complexity O(1)
obj.profession = "Teacher";
console.log(obj);


//remove from object - Time Complexity O(1)
delete obj.profession;
console.log(obj);

//search specing key - Time Complexity O(1)
console.log('email' in obj);