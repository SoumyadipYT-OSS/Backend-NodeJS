const fs = require('fs');

/*
    fs.writeFile
    fs.appendFile
    fs.rename
    copyfile
    rename
    unlink
*/

fs.rename("hey.txt", "renamedFile.txt", function(err) {
    if (err) console.error(err);
    else console.log("done");
})