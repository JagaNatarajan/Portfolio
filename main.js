   var typed = new Typed(".para", {
    strings:["After obtaining my bachelor's degree in ComputerScience made me to intrigued a lot.","I enjoyed the challenges that my education presented, and I'm very excited to work as a professional software developer and use the versatile skills that this career demands."],
    typeSpeed: 50,
    backSpeed:30,
    backDelay:2000,
    loop: true
 })  

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
      event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


/*     @media(max-width:768px)
{
    .navbar .header-text .links .para{
        float: none;
        text-align: center;
        width: 100%;
        height: 50%;
    }
    .header-text {
        width: 90%;
     padding-top: 20vh;
     padding-left: 70vh;
    }
})  */