var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("showSlide fade");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 6000);
}

$(document).ready(function(){
    $(".partners-logos").slick({
        slidesToShow: 6,
       slidesToscroll: 1,
       autoplay: true,
        autoplaySpeed: 100,
        arrows: false,
        dots: false,
       pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
       },{
           breakpoint: 520,
        settings: {
                slidesToShow: 3
            }
        }]
    });
});


function myfunction(){
    window.location="sign.html";
}


