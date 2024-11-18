localStorage.setItem('eruda-console', '{"displayIfErr": false}');
localStorage.setItem('eruda-dev-tools', '{"displaySize": 50,"theme": "Material Darker"}');
localStorage.setItem('eruda-entry-button','{"rememberPos": false}');

var lock=0,l=1;
const unll=99;

Dev=()=> console.log("Advanced features accessed!");

var web={
	encrypt(e){return btoa(e)}, //Encryption to base64
	decrypt(e){return atob(e)}, //Reverse of above
	enc:document.getElementsByTagName("enc"),
	dec:document.getElementsByTagName("dec"),
	lock(){for(var i=0;i<this.enc.length;i++){
	try{this.enc[i].innerHTML=this.encrypt(this.enc[i].innerHTML);}
	catch{}
	}},
	unlock(){for(var i=0;i<this.enc.length;i++){
	try{this.enc[i].innerText=this.decrypt(this.enc[i].innerText);
	this.dec[i].innerText=this.decrypt(this.dec[i].innerText);}
	catch{}
	}}
}
//web.lock();
var dates={
christmas:{m:12,d:25},
independence:{m:8,d:15},
republic:{m:1,d:26},
newYear:{m:1,d:1}
}
function isDate(given) {
  var now = new Date();
  return (now.getMonth() == given.m-1 && now.getDate() == given.d);
}
{
if(isDate(dates.christmas)){
swal("Merry Christmas!","And a happy new year!","success");
$("header").css("background-image","linear-gradient(270deg,  #B3000C, #E40010, #D8D8D8, #1FD537,#00B32C )");
$("body").css("background-image","url(https://img.freepik.com/free-vector/red-christmas-background-with-snowflakes-bokeh-lights-design_1048-14954.jpg?w=1800&t=st=1703337082~exp=1703337682~hmac=143330f8d1be55691723f197f9c54f3336ff517337cf6a83ad125c1355994aae)");
$("#mainAudio").attr("src","mhhdt");
}
if(isDate(dates.independence)||isDate(dates.republic)){
$("#covidCaption").html("India Flag");
$("#favicon").attr("src","https://cdn.vectorstock.com/i/1000x1000/66/54/indian-flag-design-vector-4596654.webp");
$("#shareIcon").css("color","blue");
$("#terminal").css("color","blue");
$(".menu-button").css("background-color","blue");
$("header").css("background-image","linear-gradient(0deg, #138808 33%, #ffffff 33%, #ffffff 66%, #FF9933 66% )");
}
if(isDate(dates.newYear)){
swal("Happy New Year!","","success");
$("body").css("background-image","url(https://i.giphy.com/MViYNpI0wx69zX7j7w.webp)")
}

}
//The above is for special days like Xmas/independence
document.addEventListener('copy', (event) => {
  const pagelink = `\n\nRead more at: ${document.location.href}`;
  event.clipboardData.setData('text/plain', document.getSelection() + pagelink);
  event.preventDefault();
});
//The above is for adding text to clipboard when copied
if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){localStorage.setItem("darkMode","enabled");}

window.onerror=(error)=>{console.error("Custom error: " + error);return true;};

window.addEventListener('click', (e) => {
if (e.target !== $(".about-contentTxt")) {
$(".about-content").css('visibility','hidden')
}});

(function(logger){
console.oldlog=console.log;
console.olderror=console.error;
console.oldwarn=console.warn;
console.log=function(){
var output="",arg,i,n=1;

for(i = 0;i<arguments.length;i++){
arg=arguments[i];
output+='<span class="item log-'+(typeof arg)+'">';

if(typeof arg==="object"&&typeof JSON==="object"&&typeof JSON.stringify==="function"){output+=JSON.stringify(arg)}
else{output+=arg;}
output+="</span>&nbsp;";}

logger.innerHTML+=output+"<br>";
console.oldlog.apply(undefined,arguments);
}
console.error=function(){
var output="",arg,i,n=1;

for(i = 0;i<arguments.length;i++){
arg=arguments[i];
output+='<span class="item log-error">';
output+=arg;
output+="</span>&nbsp;";}

logger.innerHTML+=output+"<br>";
console.olderror.apply(undefined,arguments);
};
console.warn=function(){
var output="",arg,i,n=1;

for(i = 0;i<arguments.length;i++){
arg=arguments[i];
output+='<span class="item log-warn">';
output+=arg;
output+="</span>&nbsp;";}

logger.innerHTML+=output+"<br>";
console.oldwarn.apply(undefined,arguments);
};
})(document.getElementsByClassName("console")[0]);
console.log(undefined);
console.warn(0);
if(jQuery&&typeof jQuery!="undefined"){console.log(jQuery.fn.jquery);}
{function greetUser(){
var time=new Date().getHours();
if (time<11){return "morning";}
else if(time<13){return "noon";} 
else if(time<17){return "afternoon";}
else if(time<20){return "evening";}
else{return "night";}}
onload=function(){
document.body.classList.remove("preload");
web.lock(); //Encrypts website
}
$("#greetime").html(greetUser());}
if($(".banner_ad").css("font-size")=="0px"){swal("Stop using an Adblocker!","Just stop it!","error");}
//Ad checker
/*{swal("Thank you for visiting my website on Coronavirus.","","success").then((yes)=>{
swal("Do you like this website?","","info",{buttons:["No","Yes"],}).then((yes)=>{
if(yes){swal("You pressed Yes.","Thank you. 😃 😃 😃.","success")}
else{swal("You pressed No.","😭 😭 😭.","error")}
})});}*/
function htmlEncode(s){var el=document.createElement("div");el.innerText=el.textContent=s;s=el.innerHTML;return s;}
//The code below is to greet you

var txt="This website is about Covid-19 virus.";
function greetings(){
var userName=prompt("Konnichiwa, welcome to my website.\nMay I know your name?");
if(userName==""||userName==null){
alert("Sorry. I do not know your name.");}
else{
alert("Nice to meet you " + userName + "! " + "Welcome to my website on Covid-19, I hope you're enjoying the website!");}
alert("Please give me a \"\Best website ever\"\ in the feedback. Arigato.");}
//The code below is for lists
slideUp1=()=>$("#li1").css("max-height","0px");
slideDown1=()=>$("#li1").css("max-height","100px");
slideUp2=()=>$("#li2").css("max-height","0px");
slideDown2=()=>$("#li2").css("max-height","100px");
slideUp3=()=>$("#li3").css("max-height","0px");
slideDown3=()=>$("#li3").css("max-height","100px");

//The code above is for lists 
// minimum is included, maximum is excluded
rollDice=(min,max)=>$("#num").html(Math.floor(Math.random()*(max-min))+min);
//The above code is to roll a dice.
function checkPrice(){
let fruit=$("#fruits").val(),pric=$("#price"),prics="The price of "+fruit+" is ",am;
switch(fruit){
case "apple":
am="₹100."
pric.html(prics+am);
break;
case "banana":
am="₹10"
pric.html(prics+am);
break;
case "mango":
am="₹500."
pric.html(prics+am);
break;
case "orange":
am="₹20."
pric.html(prics+am);
break;
default:
pric.html("Sorry for the inconveniences, "+fruit+" is currently not available.");}}
//Above is to buy fruits.
var timers,timeout,x=600;
timerFunc=()=>{
x -=1;
if(x<=0){x=0}
$("#timer").html(x);}
$(function(){
timers=setInterval(timerFunc,1000);});
timer=()=>swal("Sorry your time is up, you should not fill the form now.","","warning");
timeout=setTimeout(timer,x*1000);
//the above is for timer. 
function getFeed(){
swal({
title:document.getElementById("report").value,
button:'It\'s ok'});}//idk
//the above is for getting feedback
function clearForm(){
if(confirm("Are you sure you want to reset the form?")){
document.getElementById("form-main").reset();
$("#submits").prop("disabled",false);
swal("The form was reset!","You can now refill the form.","error");
clearInterval(timers),timers=setInterval(timerFunc,1000),x=60;
clearTimeout(timeout),setTimeout(timer,60000)}
else{
swal("You are safe!","The form data wasn't deleted!","success");
}}
function valid(){
move(),save();
}
function move(){
var i=0;
if(i==0){
i=1;
var elem=$(".myBar");
var width=1;
var id=setInterval(frame,40);
function frame(){
if(width>=100){
clearInterval(id);
i=0;}
else{
width++;
per=width+"%"
elem.css("width",per);
elem.html(per)}}}}
function formSubmit(){
valid();
$("#submits").val("Submiting...").prop("disabled",true);
setTimeout(times=()=>window.location.href='Covid-data/Covid-data.html',4000);
return false;}
function formFeedSubmit(){
valid();
$("#button-feedback").val("Submiting...").prop("disabled",true);
setTimeout(times=()=>window.location.href='Covid-data/Covid-data.html',4000);}
correctans=()=>{$("#19").html("2019 ✔️")};
//This is for telling you the date and time
function time(findDate=new Date()){
var year=findDate.getFullYear(),findMonth=findDate.getMonth(),month=findMonth+1,dates=findDate.getDate(),hour=findDate.getHours(),mins=findDate.getMinutes(),second=findDate.getSeconds(),millisec=findDate.getMilliseconds(),b="/";
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day=days[findDate.getDay()];
if(hour>12){
hour+=-12
var m="pm"}
else{m="am"}
if(dates<10){dates="0"+dates}
if(month<10){month="0"+month}
if(hour<10){hour="0"+hour}
if(mins<10){mins="0"+mins}
if(second<10){second="0"+second}
if(millisec<100){millisec="0"+millisec}
if(millisec<10){millisec="0"+millisec}
var date="Date= "+day+" "+dates+b+month+b+year+", Time="+hour+":"+mins+":"+second+"."+millisec+" "+m;
$("#time").html(date);}
//For unselecting the none box
$("input[id^=box]").change(function(){
if($(this).attr('id')=='box4'){
if($('input#box4:checked').length){
$("input#box1").prop("checked",false);
$("input#box2").prop("checked",false);
$("input#box3").prop("checked",false);}}
else if($('input#box1:checked').length||$('input#box2:checked').length||$('input#box3:checked').length){$("input#box4").prop("checked",false);}
else{$("input#box4").prop("checked",true);}
});
// Get the modal
var modal=document.getElementById("covidModal"),img=document.getElementById("favicon"),modalImg=document.getElementById("covidModalContent");
img.onclick=function(){
modal.style.display="block";
modalImg.src=this.src;
//$("#covidCaption").html("Coronavirus picture");
}
//Get the <span> element that closes the modal
var span=document.getElementsByClassName("close")[0];
//When the user clicks on <span> (x), close the modal
span.onclick=()=>{modal.style.display="none";}
//The js below is for Changing font
font=(font)=>document.documentElement.style.fontFamily=font.value;
//The js below is for the theme day/night
let darkMode=localStorage.getItem("darkMode"),darks=document.body,adjust=document.getElementById("adjust"),slider=document.getElementsByClassName("slider")[0],circle=document.getElementsByClassName("circle")[0];
enableDarkMode=()=>{
darks.classList.add("dark-mode"),adjust.classList.remove("fa-sun"),adjust.classList.add("fa-moon"),circle.classList.add("circle-on"),slider.classList.add("slider-on");
localStorage.setItem("darkMode","enabled");}
disableDarkMode=()=>{
darks.classList.remove("dark-mode"),adjust.classList.remove("fa-moon"),adjust.classList.add("fa-sun"),circle.classList.remove("circle-on"),slider.classList.remove("slider-on");
localStorage.setItem("darkMode",null);}
if(darkMode==="enabled"){enableDarkMode()}
function dark(){
darkMode=localStorage.getItem("darkMode");
if(darkMode!=="enabled"){enableDarkMode()}
else{disableDarkMode()}}

let slider1=document.getElementsByClassName("slider")[1],circle1=document.getElementsByClassName("circle")[1];
function toggle(){
toggleSwitch=localStorage.getItem("toggleSwitch")
if(toggleSwitch=="false"){toggleOn();}
else{toggleOff();}
}

toggleOn=()=>{
circle1.classList.add('circle-on');slider1.classList.add('slider-on');
localStorage.setItem("toggleSwitch",true)}
toggleOff=()=>{
circle1.classList.remove('circle-on');slider1.classList.remove('slider-on');
localStorage.setItem("toggleSwitch",false)}

//The js below is for stopping the localStorage
$(".remember").change(function(){
console.log(
"%cYamete Kudasi!",
"color:red;font-size:4rem;text-stroke:1px black;font-weight:bold"
);
if($(this).prop(':checked',false)){
sessionStorage.setItem("temp",localStorage.getItem("darkMode"));
localStorage.removeItem("darkMode");}
else{localStorage.setItem("darkMode",sessionStorage.getItem("temp"));
sessionStorage.removeItem("temp");}
});
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}
var json;
function save(){
var mainForm=new Object();
//Get the form
const s=sessionStorage;
s.setItem("data","true");
let form=document.forms[1],form2=document.forms[0];
//Save value of name
mainForm.Name=form.names.value
//Save value of radio button
mainForm.cards=$('input[name="cards"]:checked').val();   
mainForm.yn=$('input[name="y-no"]:checked').val();
//Save the value of check boxes

mainForm.numValue=getCheckedBoxes("symptoms")
mainForm.time=$('#input1').val()
mainForm.queries=form.queries.value
mainForm.feel=$('#feel :selected').val()
mainForm.fruit=$('#fruits :selected').val()
mainForm.color=$('input[name="favouriteColor"]').val()
mainForm.email=form2.email.value
mainForm.suggest=$('textarea[name="suggest"]').val()
mainForm.quality=form2.quality.value
mainForm.like=$('input[name="l-ds"]:checked').val()
s.setItem("mainForm",JSON.stringify(mainForm))
window.json=JSON.stringify(mainForm)
}


let typeChara=0;
function typeWriter(){
if (typeChara < txt.length) {
var spans = '<span>' + txt.split("")[typeChara]+'</span>';
$(spans).appendTo(".about-contentTxt")
typeChara++;
setTimeout(typeWriter, 90);
var elem = document.getElementsByClassName("about-content")[0];
elem.scrollTop = elem.scrollHeight;}
}
function undoType(){
$(".about-contentTxt").html("");
typeChara=0;}
window.onscroll=function(){
let topBtn=$(".go-up-btn");
if(document.body.scrollTop>20||document.documentElement.scrollTop>20){topBtn.addClass("button-active");}
else{topBtn.removeClass("button-active");}}
//below for typewriter
var songID=0;
var about=$(".about"),aboutSound=$("#aboutAudio"),
mtAudio=document.getElementById("mtAudio"),
mtAudioProgress=document.getElementById("mtAudioProgress");
let mouseDownOnSlider = false;
about.on("click",function(){
mtSrc="./../../../Music/" + lrc[songID].song + ".mp3";
mtAudio.setAttribute('src',mtSrc);
mtAudio.load();
aboutSound.get(0).play();
mtAudio.play()
aboutAudio.volume=0.8
});
mtAudioProgress.addEventListener("change", () => {
const pct = mtAudioProgress.value / 100;
mtAudio.currentTime = (mtAudio.duration || 0) * pct;
mtAudio.play()
});
mtAudio.addEventListener("timeupdate", () => {
if (!mouseDownOnSlider){
mtAudioProgress.value = mtAudio.currentTime / mtAudio.duration * 100;
document.getElementById("mtAudioProgressText").innerText=mtAudioProgress.value+"%";}
});

about.on("mouseout blur",function(){
aboutSound.get(0).pause();
if(localStorage.getItem("toggleSwitch")=="true"){null}
else{mtAudio.pause();}
});
function dies(){
var sound;
songLyrics("die");
about.click();
bash("menu");
mtAudio.play();}
//for debug
var debugModal=$(".debugModal")
debug=()=>{debugModal.css('display',"block");}
debugClose=()=>{debugModal.css('display',"none");}
window.onclick=function(event){if(event.target==debugModal){debugClose();}} 
//For write error
$('.Debugmodal-body').click(function(){$(this).find('input[type="text"]').focus();});
function enterCmd(e){
if(event.keyCode==13){ 
runCmd($('.cmdBox').val());}
else if(event.keyCode==38){
$(".cmdBox").val($('.item:last').html())
}
else if(event.keyCode==40){alert("down")}
}
Bash=(command)=>bash(command)
function bash(command){
var cmds=command.trim().split(/\s*,\s*/);
for(var i=0;i<cmds.length;i++){
$('.cmdBox').val(cmds[i]);
runCmd($('.cmdBox').val());}
}
function runCmd(val){
$('.cmdBox').val("");
var vals=val.toLowerCase();
console.log(val);
if(vals=='exit'){debugClose()}
else if(vals=="menu"){$(".menu").click();}
else if(vals=="heart"){$(".heartBox").click();}
else if(vals=="dark"){$(".slider").click();}
else if(vals=="mango"){(lock==unll) ? manSopen() : null}
else if(vals.substring(0,2)=="l="){
eval(val);
lock=l;
(lock==unll) ? web.unlock() : null;}
else if(vals.substring(0,2)==".m"){
$("#aboutMusic").text("Music Lyrics");
songLyrics(vals.slice(2));}
else if(vals.substring(0,3)=="man"){
(lock==unll) ? mango(vals.slice(4)) : dies();}
else if(vals=="help"){
console.log(`Custom Javascript Console<br>
Commands:<br>
Help - Displays the help,<br>
exit - Exits the console,<br>
menu - Toggles the hamburger menu,<br>
heart - Toggles Show heart,<br>
dark - Toggles dark mode,<br>
cls - Clears the fake console,<br>
title - Sets the title,<br>
vscode - Opens vscode,<br>
destroy - destroys page 1 element at a time,<br>`);
console.oldlog("This is not made to be displayed in actuall js console!");}
else if(vals.substring(0,5)=="title"){
if(vals.substring(0,13)=="title awesome"){$("#title").html('<a href="javascript:alert(\'!@£_#_&£&-&£-&&((Hehe))\')">😎😎😎</a>')}
else{$("#title").html(val.slice(6))}}
else if(vals=="vscode") window.open("https://vscode.dev","_blank");
else if(vals=="cls"){$(".console").html("");console.clear();console.log("Console was cleared!")}
else if(vals=="loader"){alert(history.back())}
else if(vals=="whoami") (lock==unll) ? alert(web.decrypt("YWdzaGFycDIzQGdtYWlsLmNvbQ==")+' '+web.decrypt("SSBsb3ZlIGNvdmlk")) : dies(),console.log("A dunce"),debug();
else if(vals=="destroy" || vals=="thanosnap"){
console.log("Starting destruction!...");alert("Destruction started- interval .5s");
setInterval(function(){delElem();},500);}
else{
try{eval(val);}
catch(e){console.error(e.message);}}
var topPos=document.getElementsByClassName("console")[0];
topPos.scrollTop = topPos.scrollHeight;
/*The above is a console for mobiles*/}
{var cmd=(new URL(document.location)).searchParams.get("cmd");
if(cmd==null||cmd==""){console.log("No code exexuted!");}
else{console.log("Executing...");
console.log(cmd)
bash(cmd);}
}
function delElem(){
console.log("Deleted 1 item!");
$('*').eq(Math.floor(Math.random()*$('*').length)).remove();}

async function share(){
const shareData = {
title: 'Covid-19 website',
text: 'Covid-19 website made by Me™!',
url: 'https://html5test.com'
}
try {
await navigator.share(shareData);
console.log('Covid shared successfully');
} catch (err) {
console.error(`Error: ${err}`);
}
}


function songer(){
var hrs=document.getElementById("hrsCalc").value,
mins=document.getElementById("minsCalc").value;
var time=(hrs*60*60)+(mins*60);
document.getElementById("timeCalc").innerText=time;
console.log(time);
navigator.clipboard.writeText(time);
}

let list = document.getElementById("myUL");
var manDat=man.map(man => man.name);
        manDat.forEach((item) => {
            let li = document.createElement("li");
            li.innerHTML = item;
            list.appendChild(li);
        });
function myFunction() {
  // Declare variables
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
document.getElementById("myUL").addEventListener("click", moreInfo);
var manSearch=$(".manSearch")
manSopen=()=>{manSearch.css('display',"block");}
manSclose=()=>{manSearch.css('display',"none");}

function moreInfo(e){
if (e.target) {
    bash("man "+e.target.innerText);
    manIndex=search(e.target.innerText.toLowerCase())
    alert("Name: "+man[manIndex].name+
    "\nIndex: "+man[manIndex].id
    +"\nRating: "+man[manIndex].rt+" ⭐"
    +"\nCurrent: "+man[manIndex].on);
   navigator.clipboard.writeText(man[manIndex].id)
}
}

/****************************************************************************************************************
End of code lines
*/

var myGamePiece;
var myObstacles = [];
var myScore, mySpeed = 100;


function startGame() {
 myGameArea.start();
  myGamePiece = new component(30, 30, 30, "red", 10, 120);
}

var myGameArea = {
 canvas : document.getElementById("canvas"),
 start : function() {
	this.context = this.canvas.getContext("2d");
	this.interval = setInterval(updateGameArea, mySpeed);
	this.frameNo = 0; 
    canvas.addEventListener('touchstart', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    canvas.addEventListener('touchend', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })
	canvas.addEventListener('touchmove', function (e) {
		myGameArea.x = e.touches[0].screenX;
		myGameArea.y = e.touches[1].screenY;
	})
	canvas.addEventListener('mousemove', function (e) {
		myGameArea.x = e.screenX;
		myGameArea.y = e.screenY;
})
  },
 clear : function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
 },
 stop : function(){
	 clearInterval(this.interval);}
}
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
function component(width, height, radius, color, x, y) {
 this.width = width;
 this.height = height;
 this.radius =  radius;
 this.x = x;
 this.y = y;
 this.update = function(){
   ctx = myGameArea.context;
   ctx.fillStyle = color;
   ctx.beginPath();
   ctx.arc(this.x, this.y, radius - 10, 0, 2* Math.PI, false  )
   ctx.fill()
   //ctx.fillRect(this.x, this.y, this.width, this.height);
  }
this.crashWith = function(otherobj) {
var myleft = this.x;
var myright = this.x + (this.width);
var mytop = this.y;
var mybottom = this.y + (this.height);
var otherleft = otherobj.x;
var otherright = otherobj.x + (otherobj.radius);
var othertop = otherobj.y;
var otherbottom = otherobj.y + otherobj.radius;
var crash = true;
if ((mybottom < othertop) ||
	(mytop > otherbottom) ||
	(myright < otherleft) ||
	(myleft > otherright)) {crash = false;}
    return crash;
  }
this.hitBottom = function() {
var rockbottom = myGameArea.canvas.height - this.height;
    rockwall = myGameArea.canvas.width - this.width;
if (this.y > rockbottom) {
    this.y = rockbottom;
}
if(this.x > rockwall ){
	this.x = rockwall; 
}

}
}
function updateGameArea() {
	if(myGameArea.x && myGameArea.y){
	myGamePiece.x = myGameArea.x;
	myGamePiece.y = myGameArea.y;}

  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
	if (myGamePiece.crashWith(myObstacles[i])) {
	  myObstacles.splice(i, 1)
	  	  myGameArea.stop();
	  mySpeed-=1
	  startGame()

	  return;
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(50)) {
    y = Math.floor(Math.random()*(myGameArea.canvas.height-20+1)+20)
    x = myGameArea.canvas.width;
    myObstacles.push(new component(30, 30, 30, "green", x, y));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
   myGamePiece.update();
}
startGame()