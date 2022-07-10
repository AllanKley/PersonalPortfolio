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











function copy(){
    var Url = document.getElementById("box");
    Url.value = window.location.href;
    Url.focus();
    Url.select();
    document.getElementById("custom-tooltip").style.display = "inline";
    document.execCommand("copy");
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);

};







































  