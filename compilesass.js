//Made for node.js
var sass = require('node-sass');
var fs = require('fs');
const cssFolder = "css"
const sassFolder = "sass"

function compile(file) {
    sass.render({
        file: sassFolder + "/" + file + ".scss",
        outFile: cssFolder+ "/" + file + ".css"
    }, function (err, result) {
        if (err) {
            console.log("error");
            console.log(err);
            return;
        }
        fs.writeFile(cssFolder + "/" + file + ".css", result.css, function (err) {
            if (!err) {
                console.log("No errors");
            } else {
                console.log(err);
            }
        });
    });
}

compile("index");