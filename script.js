const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  }
  else{
    toTop.classList.remove("active");
  }
})


var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg(){
  fullImgBox.style.display = "none";
}