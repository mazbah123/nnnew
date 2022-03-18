var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var dnbtn = document.getElementById("dnbtn");

var rotatevalue = circle.style.transform;
var rotatesum;

upbtn.onclick=function()
{
    rotatesum=rotatevalue+"rotate(-90deg)";
    circle.style.transform=rotatesum;
    rotatevalue=rotatesum;
}
dnbtn.onclick=function()
{
    rotatesum=rotatevalue+"rotate(90deg)";
    circle.style.transform=rotatesum;
    rotatevalue=rotatesum;
}

