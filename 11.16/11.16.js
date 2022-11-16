document.getElementById("button1").addEventListener("click",()=>{
    document.getElementById("button2").removeAttribute("hidden")
})
document.getElementById("button2").addEventListener("click",()=>{
    document.getElementById("button1").setAttribute("hidden","")
})