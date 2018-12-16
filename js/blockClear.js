var colors = ["red", "green", "blue", "orange", "yellow",];
window.onload = function()
{
  createBoxes();
  $("myButton").observe("click",createBoxes);

}
function createBoxes(){

  for (var i = 0; i < 100; i++) {
    var posYRan = [ Math.floor( Math.random() *400 )];
    var posXRan = [ Math.floor( Math.random() *400 )+200];
    var newP = document.createElement("p");
    var top = posXRan + "px";
    var left = posYRan + "px";
    newP.style.top  = top;
    newP.style.left  = left;
    newP.style.backgroundColor = colors[ Math.floor( Math.random() *5 )];
    $("container").appendChild(newP);
    newP.observe("mouseover", deleteBox);
    function deleteBox() {
      if (event.type == "mouseover" && $("container").childNodes.length >2) {
        $("container").removeChild(this);
      }
      else {
        alert ("Last one!")
        $("container").removeChild(this);
      }
    }
  }
}
