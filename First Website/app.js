const modal = document.querySelector('.modal');
const previews = document.querySelector(".grid-item grid-item-5");
const original = document.querySelector("full-image");
const imgText=document.querySelector(".caption");

previews.forEach((preview)=>{
    previews.addEventListener("click",() =>{
        modal.classList.add("open");
    });
});

modal.addEventListener('click',(e) => {

}

);


