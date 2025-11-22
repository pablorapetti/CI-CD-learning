const fs = require("fs");

fs.writeFileSync("/root/ci-cd-test-file.txt", "hello from pipeline");
console.log("Finished writing file");
