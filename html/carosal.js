var slideNo=0;
slideShow();
function slideShow(){
    var i;
    var slides=document.getElementsByClassName("slides");
    var dots=document.getElementsByClassName("dots");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
        dots[i].className=dots[i].className.replace(" active","");
    }
    slideNo++;
    if(slideNo>slides.length){
        slideNo=1;
    }
    slides[slideNo-1].style.display="block";
    dots[slideNo-1].className+=" active";
    setTimeout(slideShow,3000);
}