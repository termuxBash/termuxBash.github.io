localStorage.setItem('eruda-console', '{"displayIfErr": true}');
localStorage.setItem('eruda-dev-tools', '{"displaySize": 50,"theme": "Material Darker"}');
localStorage.setItem('eruda-entry-button','{"rememberPos": false}');

var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 10);
	myScore = new component("30px", "Consolas", "white", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("cvs"),
    start : function() {
        this.context = this.canvas.getContext("2d");
		this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 2);
		window.addEventListener('mousedown', function (e) {
	      myGameArea.x = e.pageX;
	      myGameArea.y = e.pageY;
	    })
	    window.addEventListener('mouseup', function (e) {
	      myGameArea.x = false;
	      myGameArea.y = false;
	    })
	    window.addEventListener('touchstart', function (e) {
	      myGameArea.x = e.pageX;
	      myGameArea.y = e.pageY;
	    })
	    window.addEventListener('touchend', function (e) {
	      myGameArea.x = false;
	      myGameArea.y = false;
	    })
        window.addEventListener('touchmove', function (e) {
            myGameArea.x = e.touches[0].screenX;
            myGameArea.y = e.touches[0].screenY;
        })
        window.addEventListener('move', function (e) {
            myGameArea.x = e.touches[0].screenX;
            myGameArea.y = e.touches[0].screenY;
        })
    },
	stop : function() {
	clearInterval(this.interval);
	},
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
function component(width, height, color, x, y, type) {
	this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
	this.gravity = 0.003;
	this.gravitySpeed = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
	if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    }
    this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
          clicked = false;
        }
    return clicked;
      }

    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
    crash = false;
        }
        return crash;
      }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        rockwall = myGameArea.canvas.width - this.width;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0; 
        }
        if(this.x > rockwall ){
	        this.x = rockwall; 
        }
        
    }
        }
function updateGameArea() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
 for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i]) || myGamePiece.hitBottom()) {
      myGameArea.stop();
	  document.getElementById("reset").style.display="block";
     return;
    }
 }
  myGameArea.clear();
  myGameArea.frameNo += 1;
 if (myGameArea.frameNo == 1 || everyinterval(150)) {
   x = myGameArea.canvas.width;
   minHeight = 10;
   maxHeight = 200;
   height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
   minGap = 50;
   maxGap = 200;
   gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
   myObstacles.push(new component(10, height, "green", x, 0));
   myObstacles.push(new component(10, x - height - gap, "green", x, height + gap+300));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
   myObstacles[i].x += -1;
   myObstacles[i].update();
 }
/*if (myGameArea.x && myGameArea.y) {
    myGamePiece.x = myGameArea.x;
    myGamePiece.y = myGameArea.y;        
}*/

  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
}
function accelerate(n) {
  myGamePiece.gravity = n;}
startGame()
const canvas = document.getElementById('cvs')
canvas.width = window.innerWidth -50
canvas.height = window.innerHeight-50