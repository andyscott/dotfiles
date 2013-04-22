
var relaunch = S.operationFromString("relaunch");
var grid = S.operationFromString("grid padding:5 0:6,6 1:6,6");
var full = S.operationFromString("move screenOriginX;screenOriginY screenSizeX;screenSizeY");
var lefthalf = S.operationFromString("move screenOriginX;screenOriginY screenSizeX/2;screenSizeY");
var righthalf = S.operationFromString("move screenOriginX+screenSizeX/2;screenOriginY screenSizeX/2;screenSizeY");
var tophalf = S.operationFromString("move screenOriginX;screenOriginY screenSizeX;screenSizeY/2");
var topleft = S.operationFromString("corner top-left resize:screenSizeX/2;screenSizeY/2");
var topright = S.operationFromString("corner top-right resize:screenSizeX/2;screenSizeY/2");
var bottomhalf = S.operationFromString("move screenOriginX;screenOriginY+screenSizeY/2 screenSizeX;screenSizeY");
var bottomleft = S.operationFromString("corner bottom-left resize:screenSizeX/2;screenSizeY/2");
var bottomright = S.operationFromString("corner bottom-right resize:screenSizeX/2;screenSizeY/2");

S.on("windowMoved", function(event, win) { S.log("MOVE"); });

S.bind("r:ctrl,alt,cmd", function(win) { win.doOperation(relaunch); });
S.bind("g:ctrl,alt,cmd", function(win) { win.doOperation(grid); });
S.bind("m:ctrl,alt,cmd", function(win) { win.doOperation(full); });
S.bind("left:ctrl,alt,cmd", function(win) { win.doOperation(lefthalf); });
S.bind("right:ctrl,alt,cmd", function(win) { win.doOperation(righthalf); });
S.bind("up:ctrl,alt,cmd", function(win) { win.doOperation(tophalf); });
S.bind("down:ctrl,alt,cmd", function(win) { win.doOperation(bottomhalf); });