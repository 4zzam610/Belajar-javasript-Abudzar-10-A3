//operator logika

//&&
let a = 5 === "5" && 6 > 3;
console.log("hasil operator logika && : " + a); // true

let b = 5 !== 10 && 6 > 10;
console.log("hasil operator logika && : " + b); // true

let c = 100 != "10" && 10 == "10";
console.log("hasil operator logika && : " + c); // true

//tugas
//true && true = true
let k = 5 === 5 && 6 > 3;
console.log("hasil operator logika && : " + k); // true
// && false = false
let h = 5 === 5 && 2 > 7;
console.log("hasil operator logika && : " + h); //false
//false && true = false
let j = 5 === 10 && 6 > 3;
console.log("hasil operator logika && : " + j); //false
//false && false = false
let l = 5 === 10 && 2 > 7;
console.log("hasil operator logika && : " + l); //false

//operator || (or)
//true || true = true
let m = 5 === 5 || 6 > 3;
console.log("hasil operator logika || : " + m); // true
//true || false = true
let n = 5 === 5 || 2 > 7;
console.log("hasil operator logika || : " + n);
//false || true = true
let o = 5 === 10 || 6 > 3;
console.log("hasil operator logika || : " + o); // true
//false || false = false
let p = 5 === 10 || 2 > 7;
console.log("hasil operator logika || : " + p); // false

//Operator ! (not)
//true = false
let q = !(5 === 5);
console.log("hasil operator logika ! : " + q);
//false = true
let r = !(5 === 10);
console.log("hasil operator logika ! : " + r);


