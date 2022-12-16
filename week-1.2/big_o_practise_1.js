//O(n)
function log(n) {
    let count = 0;
    for (let i = 0; i < n; i++){
        count++;
        console.log(i);
    }
    console.log(count);
}
log(10);

/////////////////////////////////////////////////

//O(n)
function log2(n) {
    let count = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < 2;j++) {
            console.log(i, j);
             count++;
        }
    }
    console.log(count);
}
log2(5);

/////////////////////////////////////////////////

//O(n^2) /Quadratic
function log3(n) {
    let count = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n;j++) {
            console.log(i, j);
            count++;
        }
    }
    console.log(count);
}
log3(5);

/////////////////////////////////////////////////

//O(n + n) + O(2n) = O(n)
function log4(n) {
    let count = 0;
    for (let i = 0; i < n; i++){
        count++;
        console.log(i);
    }
    for (let i = 0; i < n; i++){
        count++;
        console.log(i);
    }
    console.log(count);
}
log4(5);

/////////////////////////////////////////////////

//O((n * n) + n) = O(n^2 + n) = O(n^2)
function log6(n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }

    for (let k = 0; k < n; k++) {
        console.log(k);
    }
}
log6(5);

/////////////////////////////////////////////////

//O(1)
function addItems(n) {
    console.log(n + n + n);
}
addItems(5);

