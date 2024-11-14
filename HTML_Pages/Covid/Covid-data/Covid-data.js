//Disable the form
$(document).ready(function(){$("input").attr("disabled",true);})
function noFront(){   
location.replace("../Covid.html");
window.close();
return false;}
noBack=()=>setTimeout(noFront,400);

function chkData(){
if(sessionStorage.getItem("data")=="true"){type();}
else{swal("No Data to display","No data was sent by the main website.","warning");}
swal({
    title: 'Loading',
    text: 'Wait for a few seconds...',
    icon: 'success',
    timer: 2000,
    buttons: false
});}
function type(mainForm){
if(mainForm){mainForm=JSON.parse(mainForm)}
else{mainForm=JSON.parse(sessionStorage.getItem("mainForm"))}
const item=["num-value","time","queries","feel","fruit","color","email","suggest","quality","like"];
$("#name").html(mainForm.Name),
$('input[name="cards"][value="'+mainForm.cards+'"]').prop("checked",true),
$("h2").html(mainForm.yn);
const checkValues=mainForm.numValue;
document.querySelectorAll('input[type="checkbox"]').forEach((input,index)=>input.checked=checkValues[index]);
$("#time").html(mainForm.time),
$("#queries").html(mainForm.queries),
$("#feel").html(mainForm.feel),
$("#fruits").html(mainForm.fruit);
$("#color").css("background-color",mainForm.color);
$("#email").html(mainForm.email).attr("href","mailto:"+mainForm.email),
$("#suggest").html(mainForm.suggest),
$("#like").html(mainForm.like),
$("#feedback").html(mainForm.quality);
for(var i=0;i<item.length;i++){
sessionStorage.removeItem(item[i]);}
}