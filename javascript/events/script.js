function showalert(){
    alert("btn clicked via html");
}

document.getElementById("clickButton").addEventListener("click", showalert2);

function showalert2(){
    alert("btn clicked via js");
}

document.getElementById("box").addEventListener("click", () =>{
    document.getElementById("box").innerText="the box is clicked"
});


  const button = document.getElementById('hoverBtn');


  button.addEventListener('mouseover', () => {
    document.getElementById('hoverBtn').innerText="the box is clicked"
  });


  button.addEventListener('mouseout', () => {
    document.getElementById('hoverBtn').innerText="place your mouse"
  });


  document.getElementById("namesubmit").addEventListener("click",()=>{
    console.log(document.getElementById("fullname").value.trim());
    
  });
document.getElementById("fullname").addEventListener("keydown",(e) =>{
(e.key==="Enter")&&
});





