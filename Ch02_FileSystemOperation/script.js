const fs = require('fs');

/*
    writefile
    appendfile
    copyfile
    rename
    unlink
*/

fs.writeFile("hey.txt", "hey JS learning journey", function(err) {
    if (err) console.error(err);
    else console.log("done");
});