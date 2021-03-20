var slideIndex = 1;
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}


//Swipe2
var blockIndex = 1;
showBlocks(blockIndex)

function plusBlock(n) {
    showBlocks(blockIndex +=n);
}

function showBlocks(n) {
    var i;
    var blocks = document.getElementsByClassName("block");
    if (n> blocks.length) { blockIndex = 1}
    if (n < 1) {blockIndex = blocks.length}
    for (i = 0; i < blocks.length; i++){
        blocks[i].style.display = "none";
    }
    blocks[blockIndex-1].style.display = "flex";
}