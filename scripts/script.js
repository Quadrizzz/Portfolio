var y = 0;
var z= 0;
var span_node = document.getElementById("span_node");
var text = document.getElementById("text")

var text_span = "Quadri Abdulmalik"
var text_text = "I'M A WRITER AND WEB DEVELOPER"


function animate1(){
    if(y < text_span.length){
        span_node.textContent += text_span.charAt(y)
        y++
        setTimeout(animate1, 150)
    }
    if( y >= text_span.length){
        animate2()
    }
}

function animate2(){
    if(z < text_text.length){
        text.innerHTML += text_text.charAt(z);
        z++
        setTimeout(animate2, 100)
    }
    show()
}

function show(){
    document.getElementsByClassName('image')[0].classList.add('show-image')
}

animate1()

var scroll = window.requestAnimationFrame || function(callback){
    window.setTimeout(callback, 1000/60)
}

var elementToShow = document.querySelectorAll('.hidden')


function loop(){
    elementToShow.forEach((element)=>{
        if(isElementInViewport(element)){
            element.classList.add('is-visible')
        }
        else{
            element.classList.remove('is-visible')
        }
    })
    scroll(loop)
}

const isElementInViewport = (el)=>{
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0]
    }

    var rect = el.getBoundingClientRect();

    return(
        (rect.top<=0 && rect.bottom>=0) ||
        (rect.bottom>= (window.innerHeight || document.documentElement.clientHeight) && 
         rect.top<= (window.innerHeight || document.documentElement.clientHeight)
        )
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

setTimeout(loop, 3000)

const show_menu = ()=>{
    document.getElementsByClassName('menu')[0].classList.toggle('menu-show');
    document.getElementById('menu-bar').classList.toggle('cross')
    
}
