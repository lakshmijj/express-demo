// console.log("Running node.js app CHANGED");

// import express function
let express = require("express");
// construct app object
let app = express();

let fileSystem = require("fs");

app.get("/", (request, response) => {
    // response.write("<b>Hello world :)</b>");
    // response.end();
    response.send("<b>Hello world :)</b>");
});

app.get("/goodbye", (request, response) => {
    response.send("<b>Goodbye world :(</b>");
});

app.get("/hello", (request, response) => {
    response.redirect("/");
});

app.get("/loop/:helloCount/:myMessage", (request, response) => { 
    // isolate count route parameter 
    let count = request.params.helloCount; 
    let message = request.params.myMessage;
    let output = ""; 
    for (let n=0; n<count; n++) { 
        output += message + "<br>"; 
    } 

    response.send(output); 
}); 


app.get("/data", (request, response) => {
    fileSystem.readFile("samples.json", (error, data) => {
        let sampleJSON = JSON.parse(data);
        // send it back as response
        response.send(sampleJSON);
    });
});


app.listen(80, () => console.log("Express listening on port 80"));