var items = document.getElementsByClassName("links");


for (var i = 0; i < items.length; i++) {

  items[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}






// change navbar by scroll 
// var divs = document.querySelectorAll(".rightSide");

// var x = document.getElementsByClassName("rightSide")[0];

// var divId = divs.id;

// for(var i = 0; i < x.children.length; i++){
//   var divsId = x.children[i].id;
//   if(window.scrollX >= divsId[i]){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     items.className += " active";
//   }
// }


// if(window.scrollY >= divId = document.getElementById("skills"));{
  // console.log(x.children[0].offset());
// }