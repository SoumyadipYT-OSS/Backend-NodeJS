/*  
    User will ask for number between 0 - 9,
    if the number below to 5, resolve if not reject
*/

// Promise is a constructor, that's why we use 'new' keyword.

/*
console.log("--Example 1--");

var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10);
    console.log(n);
    if (n < 5) {
        return res();
    } else {
        return rej();
    }
})

ans
    .then(function() {
        console.log("below");
    })
    .catch(function() {
        console.log("above");
    })

console.log("ans: ", ans);
*/



/*  asynchronous task  */
// sabse pehle ghar par aao
// gate kholo aur gate lagao
// khana pakao khana khao
// webpage chalao
// sojao kiuki tum thak gaye ho


var ans2 = new Promise(function(res, rej) {
    return res("sabse pehle ghar par aao");
})

var p2 = ans2.then(function(data) {
        console.log(data);
        return new Promise(function(res, rej) {
            return res("gate kholo aur gate lagao");
        })
    })

var p3 = p2.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res("khana pakao khana khao");
    })
})
p3.then(function(data) {
    console.log(data);
})
console.log("--Example 2--");