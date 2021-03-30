// click button
const hamburger = () =>{
    const ham = document.querySelector(".hamburger");
    const list = document.querySelector(".ct-block");
    ham.addEventListener("click", () =>{
        list.classList.toggle("transform");
    })
}
hamburger();

