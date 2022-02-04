document.getElementById("button1").addEventListener("click", GrowFunction);
document.getElementById("button2").addEventListener("click", BlueFunction);
document.getElementById("button3").addEventListener("click", FadeFunction);
document.getElementById("button4").addEventListener("click", RotateFunction);
document.getElementById("button5").addEventListener("click", RstFunction);

function GrowFunction() {
  document.getElementById("box").style.height = "250px";
  document.getElementById("box").style.width = "250px";
}
function BlueFunction() {
  document.getElementById("box").style.backgroundColor = "Blue";
}
function FadeFunction() {
  document.getElementById("box").style.opacity = "0.5";
}
function RotateFunction() {
  document.getElementById("box").style.transform = "rotate(45deg)";
}
function RstFunction() {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.backgroundColor = "Orange";
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.transform = "initial";
}