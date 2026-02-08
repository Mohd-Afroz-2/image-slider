let index=0;
let timer= null;
const slides=document.querySelectorAll('.slide')

function changeSlide(n) {
    slides[index].style.display= "none";
    index=(index+n+slides.length)% slides.length;
    
    slides[index].style.display="block"

}
function toggleAuto() {

    const btn=document.getElementById("toggleBtn");

    if (timer) {
        clearInterval(timer);
        timer=null;
        btn.innerText="Start Auto";
        
    }else{
        timer=setInterval(()=>{changeSlide(1);},3000);
        btn.innerText="Stop Auto"
    }
}
