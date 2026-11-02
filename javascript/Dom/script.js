function submit(){
    console.log("Button Clicked");
}

const btn = document.getElementById("submitBtn");



btn.addEventListener("click", function() {
    console.log("Button Clicked");
});


const heading=document.querySelector("#divsel");
console.log(heading);


console.log(heading.parentElement.firstElementChild);