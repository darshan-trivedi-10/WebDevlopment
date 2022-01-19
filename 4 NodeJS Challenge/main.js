var fs = require('fs');
let inputArr = process.argv.slice(2);

let command = inputArr[0];
let rightCommand = "wcat";

if (command == rightCommand) {
    let inputSz = inputArr.length;
    for (let i = 1; i < inputSz; i++) {
        let fileName = inputArr[i];
        checkName(fileName);
    }
} else {
    console.log("Please🙏 Input Right command");
}


function checkName(fileName) {

    if (fs.existsSync(fileName)) {
        let state = fs.statSync(fileName);
        if (fs.statSync(fileName).isFile()) {
            fs.readFile(fileName, (error, data) => {
                if (error) {
                    throw error;
                }
                console.log(data.toString());
            });

        } else {
            console.log("This is not a File");
        }

    }
    else {

    }

}

i am darshan