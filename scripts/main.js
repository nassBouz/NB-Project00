  console.log("i am outside");

 $(document).ready(function() {
  console.log("i am inside");

  $(".myNav").on('click',function(){
    console.log("hhhhh");
    $('#ab1').attr("text-decoration", "underline");
  });
// $('#myQuotes').fadeToggle(3000);
//   var speed= 1000,
num = 1,
timer = setInterval(rotate, 5000); //15 seconds as requested
console.log('i ma in rotator');
function rotate() {
  console.log("i am in function rotator");
    var container_footer = $("#rotate_container");
    var divs_footer = container_footer.children();
    var divs_footer_length = divs_footer.length;
    $("#item"+num).fadeOut(speed);
    num>divs_footer_length  ? num=0 : num++;
    $("#item"+num).fadeIn(speed);
    timer = setTimeout(rotate, 5000);
};

    })
//   function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// ----------------


