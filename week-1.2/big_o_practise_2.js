//O(n)
function logAtLeast5(n) {
    let count = 0;
    for (let i = 0; i < Math.max(5, n); i++) {
        count++;
        console.log(i);
    }
    console.log(count);
}
logAtLeast5(10);

/////////////////////////////////////////////////

//O(n)
function logAtMost5(n) {
    let count = 0;
    for (let i = 0; i < Math.min(5, n); i++) {
        count++;
        console.log(i);
    }
    console.log(count);
}
logAtMost5(10);

/////////////////////////////////////////////////

//O(m + n)
function log(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }

    for (let j = 0; j < b; j++) {
        console.log(j);
    }
}
log(3, 5);

/////////////////////////////////////////////////

//O(1)
//O(lon n)
//O(n)
//O(n lon n)
//O(n^2)