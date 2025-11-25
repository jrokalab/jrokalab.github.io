$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Ph.D. Student", "Graduate Research Associate", "Robotics Engineer", "Systems Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

 // --- UPDATED EXPERIENCE SCRIPT ---
    // We bind to the document to ensure the click is caught no matter what
    $(document).on('click', '.timeline-item', function(){
        // Toggle the 'open' class
        $(this).toggleClass('open');
        
        // Debugging: This prints to the console (F12) to prove it was clicked
        console.log("Timeline item clicked!"); 
    });
    // ------------------------------------------------------
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// MODAL POPUP SCRIPT (For Projects) - Keep this outside the ready block
const modal = document.getElementById("projectModal");
const closeBtn = document.getElementsByClassName("close-modal")[0];
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalResults = document.getElementById("modalResults");
const modalImg = document.getElementById("modalImg");

function openModal(element) {
    const title = element.getAttribute("data-title");
    const desc = element.getAttribute("data-desc");
    const results = element.getAttribute("data-results");
    const image = element.getAttribute("data-image");

    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalResults.innerText = results;
    modalImg.src = image;

    modal.style.display = "flex";
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}