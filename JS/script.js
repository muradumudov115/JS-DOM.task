//side bar

let closeBtn=document.getElementById("closeBtn");
let sideBar=document.getElementById("sideBar");
let returnBtn=document.getElementById("returnBtn");


sideBar.addEventListener("click",function(){
 sideBar.classList.add("close")
})

returnBtn.addEventListener("click",function(){
    sideBar.classList.remove("close")
})