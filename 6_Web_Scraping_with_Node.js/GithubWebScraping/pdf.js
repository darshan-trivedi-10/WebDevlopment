const fs = require("fs");
const pdfkit = require("pdfkit");

let pdfDoc = new pdfkit;
pdfDoc.pipe(fs.createWriteStream('first.pdf'));
pdfDoc.text("My Sample PDF Document");
pdfDoc.text("My Sample PDF Document 1");
pdfDoc.text("From Mon-Sat we will have a 10% discount on selected items!", 150, 150);

pdfDoc
    .fillColor('red')
    .fontSize(17)
    .text("20%", 305, 150);
pdfDoc.end();