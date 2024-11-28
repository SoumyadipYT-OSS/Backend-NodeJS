const fs = require('fs');

/*
    fs.writeFile
    fs.appendFile
    fs.rename
    fs.copyfile
    rename
    fs.unlink
*/

// fs.rename("hey.txt", "renamedFile.txt", function(err) {
//     if (err) console.error(err);
//     else console.log("done");
// })


// fs.copyFile("renamed.txt", "copied.txt", function(err) {
//     if (err) console.error(err);
//     else console.log("done");
// })   this code gives you an error, because there is no 'copied.txt' file exists

fs.unlink("renamedFile.txt", function(err) {
    if (err) console.error(err);
    else console.log("done");
})