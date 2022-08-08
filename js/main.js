var elOpenModalBtn = document.querySelector(".js-modal-open");
var elOverlay = document.querySelector(".overlay");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-modal-close");
var elBody = document.querySelector("body");

elOpenModalBtn.addEventListener("click", function(){
   elOverlay.classList.add("modal-open");
   elBody.classList.add("body");
})

elCloseModalBtn.addEventListener("click", function() {
   elOverlay.classList.remove("modal-open");
   elBody.classList.remove("body");
})