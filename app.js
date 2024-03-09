const mainPic = document.querySelector("#mainPic");

const gallery = document.querySelectorAll(".galleryPic");

for(let pic of gallery){
pic.addEventListener("click",()=>{
  mainPic.src = pic.src;
})
}