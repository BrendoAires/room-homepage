const element = document.getElementById("topMenu");

    const linkMenu = document.getElementById("checkbox-menu");
    linkMenu.addEventListener('click', ()=>{

    
    if (element.style.height === "70px"){
        document.getElementById("topMenu").style.height = "0"
        document.querySelector('main').classList.remove('filter');
        document.getElementById("p-grid1").style.color = "hsl(0, 0%, 63%)";
        document.getElementById("p-grid2" ).style.color = "hsl(0, 0%, 63%)";
        document.getElementById("p-grid3").style.color =  "hsl(0, 0%, 63%)";
        document.getElementById("p-grid4").style.color =  "hsl(0, 0%, 63%)";

    }else{
    document.getElementById("topMenu").style.height = "70px";
    document.querySelector('main').classList.add('filter');
    document.getElementById("p-grid1").style.color = "hsl(0, 0%, 27%)";
    document.getElementById("p-grid2").style.color = "hsl(0, 0%, 27%)";
    document.getElementById("p-grid3").style.color = "hsl(0, 0%, 27%)";
    document.getElementById("p-grid4").style.color = "hsl(0, 0%, 27%)";
    //document.querySelector('p').style.color = "red";
    


   
  }
    })


    /*------ Slider ------*/


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