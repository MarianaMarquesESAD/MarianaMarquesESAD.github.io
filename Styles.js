// Get the button
let scrollUpButton = document.getElementById("scrollUpButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollUpButton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
