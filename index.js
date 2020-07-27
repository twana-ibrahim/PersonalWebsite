var items = document.getElementsByClassName("links");


for (var i = 0; i < items.length; i++) {

  items[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var burger = document.querySelector("#burger");
var closeBtn = document.querySelector("#close");
var leftSide = document.querySelector("#left-side");
var rightSide = document.querySelector("#right-side");

burger.addEventListener("click", function(){
  leftSide.classList.remove("leftSide-hide");
  rightSide.classList.add("hide");
  closeBtn.classList.remove("hide");
});

closeBtn.addEventListener("click", function(){
  rightSide.classList.remove("hide");
  leftSide.classList.add("leftSide-hide");
  burger.classList.remove("hide");
});
