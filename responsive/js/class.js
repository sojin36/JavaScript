
window.addEventListener("load", ()=>{
    const open = document.querySelector("#open")
    const detail = document.querySelector("#detail")
    const closeBtn = document.querySelector("#close")

    open.addEventListener("click", ()=>{
        detail.style.display = "block"
        open.style.display = "none"
    });
    
    closeBtn.addEventListener("click", ()=>{
        detail.style.display = "none"
        closeBtn.style.display = "bolock"
        open.style.display = "block"
    })
})