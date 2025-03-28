const hamburger=document.querySelector(".ham_menu");
const linksCtn=document.querySelector(".menu");
const links=document.querySelectorAll(".menu_link");

hamburger.addEventListener("click",()=>{
    linksCtn.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize",()=>{
    if(window.matchMedia("(max-width: 550px)").matches){
        closeMenu();
    }
});

if(window.matchMedia("(max-width:550px)").matches){
    closeMenu();
}

function closeMenu(){
    links.forEach((link)=>{
        link.addEventListener("click", ()=>{
            linksCtn.classList.remove("active");
            hamburger.classList.remove("active");

        })
    })
}

document.addEventListener('scroll',()=>{
    const nav=document.querySelector('nav');
    if(window.scrollY>0){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled')
    }
}) //end of navbar

//start of slider

const Slider =[...document.querySelectorAll('.product_slider')];
const nextBtn =[...document.querySelectorAll('.next_btn')];
const prevBtn =[...document.querySelectorAll('.prev_btn')];

Slider.forEach((item, i) => {
    let containerDiamentions = item.getBoundingClientRect(); 
    let containerWidth = containerDiamentions.width;

    nextBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })
    prevBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })

})//end of slider

function val(){
    var cname=document.getElementById("Name").value;
    var phoneno=document.getElementById("phno").value;
    var email=document.getElementById("Email").value;
    var fb=document.getElementById("feedback").value;
    //name
    // var regname="^[A-Z][a-z]+(\s[A-Z][a-z]+)?$";
    // if(cname==""){
    //     document.getElementById('nameError').innerHTML="*Enter a name";
    //     return false;
    // }
    // if(!cname.match(regname)){
    //     document.getElementById('nameError').innerHTML="*Invalid name";
    //     return false;
    // }
    //phone no
    var regphno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(phoneno==""){
        document.getElementById('phnoError').innerHTML="*Enter a Phone number";
        return false;
    }
    if(!phoneno.match(regphno)){
        document.getElementById('phnoError').innerHTML="*Invalid phone number";
        return false;
    }

    //email
    regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email==""){
        document.getElementById('emailError').innerHTML="*Enter a Email";
        return false;
    }
    if(!email.match(regemail)){
        document.getElementById('emailError').innerHTML="*Invalid Email";
        return false;
    }
    alert("Feedback submitted! thank you the feedback")
}
