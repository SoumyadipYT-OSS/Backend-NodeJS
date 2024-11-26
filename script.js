// Fundamentals of JavaScript:
// arrays and objects
// functions return
// async js coding
// foreach map filter find indexOf

var arr = [1, 2, 3, 4];
console.log(arr);

var newarr = arr.map(function(val) {
    return 13;
})
console.log(newarr);

var filter_arr = arr.filter(function(val) {
    if (val > 3) {return true;}
})
console.log("Filter arr with greater than 3: ", filter_arr);


var ans = arr.find(function(val) {
    if (val === 2) return val;
})
console.log("Finding value 2 from the arr: ", ans);


console.log(arr.indexOf(12));
console.log(arr.indexOf(2));


/*  Object  */
console.log("Object in JS");
var obj = {
    name: "testObj",
    obj: "this is value",
    numeric: 123
};
console.log(obj);
console.log(obj.name);
console.log(obj['numeric']);


/*  methods of function  */
console.log("Methods of function in JS");
function abcd() {

}
var len_of_abcd = abcd.length;
console.log("Length of abcd function: ", len_of_abcd);

function abc(a, b, c, d) {

}
var len_of_abc = abc.length;
console.log("Length of abc fucntion: ", len_of_abc);

console.log("So we can say that number of parameters determines the length of a function");


