function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
  window.addEventListener('scroll',function(){
    var scrollY = window.scrollY;
    const home = document.getElementById("home");
    const msg = document.getElementById("msg");
    const photo = document.getElementById("photo");
    
    if(scrollY <= 559){
      home.classList.add("active");
      msg.classList.remove("active");
      photo.classList.remove("active");
    }
    if(scrollY >= 600){
      home.classList.remove("active");
      msg.classList.add("active");
      photo.classList.remove("active");
    }
    if(scrollY >= 1131){
      home.classList.remove("active");
      msg.classList.remove("active");
      photo.classList.add("active");
    }
  });