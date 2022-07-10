const debounce = function(func, wait, i, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout = setTimeout(later, wait);
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}


const target = document.querySelectorAll ('[data-anime]');


const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            
            //!  ------------- maybe take this off -------------
            element.classList.remove(animationClass)
            //!  -----------------------------------------------
        }
    })
}

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200))
}








window.addEventListener('click', function(e){  
    let element = this.document.getElementById("slide");
    let link_div = this.document.getElementById("link_div");
    
    if (element.contains(e.target)){
        element.classList.add("slide");
        link_div.classList.add("changeColor");
    } else{
        element.classList.remove("slide");
        link_div.classList.remove("changeColor");
    }
  });







function PlayGif() {
    image = document.getElementById('gif');
    image.src = "https://raw.githubusercontent.com/AllanKley/AllanKley/main/public/images/ProfileGifNoLoop.gif";
}








currentDiv(1);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var mainPics = document.getElementsByClassName("mainPic");

    if (n > mainPics.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mainPics.length}

    for (i = 0; i < mainPics.length; i++) {
        mainPics[i].style.display = "none";
    }

    mainPics[slideIndex-1].style.display = "block";
}


































  