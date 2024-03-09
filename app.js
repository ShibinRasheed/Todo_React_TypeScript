const mainPic = document.querySelector("#mainPic");

const gallery = document.querySelectorAll(".galleryPic");

const btn = document.querySelector("#btn");

const mode = document.querySelector("#mode")

btn.innerText = "Lighten";
    mode.classList.remove("overlay");

btn.addEventListener("click",()=>{
  console.log('cli');
  if(mode.classList[0] == "overlay")
  {
    btn.innerText = "Lighten";
    mode.classList.remove("overlay");
  }
  else
  {
    btn.innerText = "Darken";
    mode.classList.add("overlay");
  }
 
})

for(let pic of gallery){
pic.addEventListener("click",()=>{
  mainPic.src = pic.src;
})
}