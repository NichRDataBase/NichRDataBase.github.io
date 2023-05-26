const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".grid-container2 img");
const original = document.querySelector(".full-image");
const imgText = document.querySelector(".caption");

previews.forEach((preview)=>{
    preview.addEventListener("click", () =>{
        modal.classList.add("open");
        original.classList.add("open");

        /*const originalSrc= './images/XboxPFP.jpg';*/
    });
});

modal.addEventListener('click',(e) => {

}

);

modal.addEventListener("click",(e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }

}

);
