const fs = require('fs');

/*
    writefile
    appendfile
    copyfile
    rename
    unlink
*/

fs.appendFile("hey.txt", ". Yee NodeJS learning interesting hain", function(err) {
    if (err) console.error(err);
    else console.log("done");
});