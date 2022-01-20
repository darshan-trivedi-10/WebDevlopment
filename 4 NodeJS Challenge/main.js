var fs = require('fs');
let inputArr = process.argv.slice(2);

let command = inputArr[0];
let rightCommand = "wcat";

if (command == rightCommand) {
    let inputSz = inputArr.length;
    let check = inputArr[1];
    if (check == undefined) {
        console.log("Kindly add Path or File Name");
    }
    let condition = checkName(check);
    if (condition) {
        for (let i = 1; i < inputSz; i++) {
            let fileName = inputArr[i];
            printFileData(fileName, false);
        }

    } else {
        let spaceCommand = "-s", allLineNumber = "-n", contentLine = "-b";
        let firstCommand = inputArr[1];
        if (firstCommand == spaceCommand || firstCommand == allLineNumber || firstCommand == contentLine) {

            let secondCommand = inputArr[2];
            if (checkName(secondCommand)) {
                if (firstCommand == spaceCommand) {
                    for (let i = 2; i < inputSz; i++) {
                        let fileName = inputArr[i];
                        printFileData(fileName, true);
                    }
                } else if (firstCommand == allLineNumber) {
                    for (let i = 2; i < inputSz; i++) {
                        let fileName = inputArr[i];
                        addNumber(fileName, false);
                    }
                } else if (firstCommand == contentLine) {
                    for (let i = 2; i < inputSz; i++) {
                        let fileName = inputArr[i];
                        addNumber(fileName, true);
                    }
                }
            } else {
                if (checkRight(firstCommand, secondCommand, spaceCommand, allLineNumber)) {

                    for (let i = 3; i < inputSz; i++) {
                        let fileName = inputArr[i];
                        allLineSpace(fileName);
                    }

                } else if (checkRight(firstCommand, secondCommand, spaceCommand, contentLine)) {
                    for (let i = 3; i < inputSz; i++) {
                        let fileName = inputArr[i];
                        allLineSpace(fileName);
                    }

                } else {
                    console.log("Please🙏 Input Right command");
                }
            }

        } else {
            console.log("Please🙏 Input Right command");
        }
    }

} else {
    console.log("Please🙏 Input Right command");
}

function allLineSpace(fileName) {
    if (!checkName(fileName)) {
        return;
    }
    var data = fs.readFileSync(fileName).toString().split('\n');
    let num = 1;
    for (let i = 0; i < data.length; i++) {

        if (!(data[i] == '\r' || data[i] == '\n' || data[i] == '')) {
            data[i] = num + " " + data[i];
            num++;
        }

    }
    var text = data.join("\n");
    text = text.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, " ");
    console.log(text);

}

function checkRight(firstCommand, secondCommand, spaceCommand, extraCommand) {
    return (firstCommand == spaceCommand && secondCommand == extraCommand) || (firstCommand == extraCommand && secondCommand == spaceCommand);
}


function addNumber(fileName, check) {
    if (!checkName(fileName)) {
        return;
    }
    var data = fs.readFileSync(fileName).toString().split('\n');
    let num = 1;
    for (let i = 0; i < data.length; i++) {
        if (check) {
            if (!(data[i] == '\r' || data[i] == '\n' || data[i] == '')) {
                data[i] = num + " " + data[i];
                num++;
            }
        } else {
            data[i] = num + " " + data[i];
            num++;
        }
    }
    var text = data.join("\n");
    console.log(text);
}


function printFileData(fileName, check) {

    if (fs.existsSync(fileName)) {
        let state = fs.statSync(fileName);
        if (fs.statSync(fileName).isFile()) {
            fs.readFile(fileName, (error, data) => {
                if (error) {
                    throw error;
                }
                let content = data.toString();
                if (check) {
                    content = content.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, " ");
                }
                console.log(content)
            });

        } else {
            console.log(fileName + " This is not a File");
        }
    }
}


function checkName(fileName) {

    if (fs.existsSync(fileName)) {
        let state = fs.statSync(fileName);
        if (fs.statSync(fileName).isFile()) {
            return true;
        }
    }
    console.log(fileName + " This is not a File");
    return false;
}
