//The js below was for backups
//Get the head
let head=document.getElementsByTagName("head")[0];

//For fonts CSS file
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="../../Codes/Fonts.css";
head.appendChild(link);}
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="../../../Codes/Fonts.css";
head.appendChild(link);}

//For icons CSS file
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="./../../../Codes/Fonts/Icons/font-awesome/all.css";
head.append(link);}
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="../../../Codes/Fonts/Icons/font-awesome/all.css";
head.appendChild(link);}
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
head.appendChild(link);}

//For jQuery js file
{let script=document.createElement("script");
script.src="../../../Codes/Libraries/jQuery.js";
script.crossOrigin="anonymous";
head.appendChild(script);}
{let script=document.createElement("script");
script.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.crossOrigin="anonymous";
head.appendChild(script);}

//For Sweet Alert js file
{let script=document.createElement("script");
script.src="../../../Codes/Libraries/swal.js";
script.crossOrigin="anonymous";
head.appendChild(script);}
{let script=document.createElement("script");
script.src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js";
script.crossOrigin="anonymous";
head.appendChild(script);}

//The js above was for backups
{let firefox=navigator.userAgent.indexOf("Firefox")> -1;
if(firefox==true){style()}}
function style(){
setTimeout(function(){swal("This website is not supported by Firefox","Please switch to a chromium based browser.","error")},5000);
{let link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="../../Codes/Libraries/default.css";
head.appendChild(link);}
}