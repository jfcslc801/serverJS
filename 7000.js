// We require/import the HTTP module
var http = require("http");

var url = require("url");

// ===================================================================== Then
// define the ports we want to listen to
var PORTONE = 7000;

// ===================================================================== We need
// two different functions to handle requests, one for each server.
function handleRequestOne(req, res) {
  // puts together a url object we are using
  var urlParts = url.parse(req.url);
  // switch statement that changes baised on the url passed in
  switch (urlParts.pathname) {
    // if we are at localhost:7000/ then run display root
    case "/":
      displayRoot(urlParts, req, res);
      break;
    case "/portfolio":
    // if we are at localhost:7000/portfolio run portfolio
      portfolio(urlParts, req, res);
      break;
    default:
      break;
  }
}
function portfolio(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body> <h1> Portfolio </h1>";
  myHTML += "<p> Here are some of my Projects: <a href='https://github.com/jfcslc801'>Github</a></p>";
  myHTML += "<a href='/'>Home</a>";
  myHTML += "</body></html>"
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(myHTML);
}
function displayRoot(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body> <h1> Home Page </h1>";
  myHTML += "<p> This is my home page welcome</p>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>"
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(myHTML);
}
// ===================================================================== Create
// our servers
var serverOne = http.createServer(handleRequestOne);

// =====================================================================
// Starting our servers
serverOne.listen(PORTONE, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});
