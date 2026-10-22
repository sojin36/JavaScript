window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll("section")
    const dots = document.querySelectorAll(".dot")
    
    sections.forEach((sections, index)=>{
        // 색션 영역이 화면 위쪽에서 얼마나 떨어져 있는지 학인
        // getBoundingClientRect() : 영역이 브라우저 화면의 맨 위에서 얼마나 떨여져있느지 확인

        const top = sections.getBoundingClientRect().top;

        if(top < window.innerHeight / 2){
            dots.forEach((dot)=>{
                dot.classList.remove("active")
            })
            dots[index].classList.add("active")
        } 

    });
});