const ar=[1,2,3,4,5,6,7,8,9];
const list = document.createElement("ol");

ar.forEach((item)=>{
    const l = document.createElement("li");
list.textContent=item;
list.appendChild(l);
});

document.getElementById("mylist").appendChild(list);