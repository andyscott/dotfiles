
var relaunch = S.operationFromString("relaunch");
var grid = S.operationFromString("grid padding:5 0:6,6 1:6,6");
var full = S.operationFromString("move screenOriginX;screenOriginY screenSizeX;screenSizeY");
var lefthalf = S.operationFromString("move screenOriginX;screenOriginY screenSizeX/2;screenSizeY");
var righthalf = S.operationFromString("move screenOriginX+screenSizeX/2;screenOriginY screenSizeX/2;screenSizeY");
var tophalf = S.operationFromString("move screenOriginX;screenOriginY screenSizeX;screenSizeY/2");
var topleft = S.operationFromString("corner top-left resize:screenSizeX/2;screenSizeY/2");
var topright = S.operationFromString("corner top-right resize:screenSizeX/2;screenSizeY/2");
var bottomhalf = S.operationFromString("move screenOriginX;screenOriginY+screenSizeY/2 screenSizeX;screenSizeY/2");
var bottomleft = S.operationFromString("corner bottom-left resize:screenSizeX/2;screenSizeY/2");
var bottomright = S.operationFromString("corner bottom-right resize:screenSizeX/2;screenSizeY/2");


var snaplast = S.operationFromString("snapshot last");
var applylast = S.operationFromString("activate-snapshot last");
var snapalt = S.operationFromString("snapshot alt");
var applyalt = S.operationFromString("activate-snapshot alt");

var MOVED = 1;
var RESIZED = 2;
var MOVE_OP = 3;
var RESTORED = 4;
var state = 0;

S.on("windowMoved", function(event, win) { state = MOVED; });
S.on("windowResized", function(event, win) { state = RESIZED; });

function stateOp(op) {
    return function(win) {
	if (state != MOVE_OP)
	    win.doOperation(snaplast);
	win.doOperation(op);
	S.log("STATE_OP");
	state = MOVE_OP;
    }
}

S.bind("/:ctrl,alt,cmd", function(win) {
	if (state != RESTORED)
	    win.doOperation(applylast);
	state = RESTORED;
});

S.bind("r:ctrl,alt,cmd",     function(win) { win.doOperation(relaunch); });
S.bind("g:ctrl,alt,cmd",     stateOp(grid));
S.bind("m:ctrl,alt,cmd",     stateOp(full));
S.bind("left:ctrl,alt,cmd",  stateOp(lefthalf));
S.bind("right:ctrl,alt,cmd", stateOp(righthalf));
S.bind("up:ctrl,alt,cmd",    stateOp(tophalf));
S.bind("down:ctrl,alt,cmd",  stateOp(bottomhalf));