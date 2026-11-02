const showAssbtn=document.getElementById("ShowAssignmentNotification");
const showAttbtn=document.getElementById("ShowAttendenceNotification");


const asspara =document.getElementById("AssignmentNotification");
const attpara =document.getElementById("AttendencetNotification");


function ShowAssignment(){
  asspara.textContent = "Your Assignment deadline is approching";
}
showAssbtn.addEventListener("click", ShowAssignment);

showAttbtn.addEventListener("click", () =>{
  attpara.textContent="please check your attendence status";
});