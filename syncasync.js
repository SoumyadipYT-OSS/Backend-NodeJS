/*  
    User will ask for number between 0 - 9,
    if the number below to 5, resolve if not reject
*/

// Promise is a constructor, that's why we use 'new' keyword.

var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10);

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