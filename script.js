window.addEventListener("load", ()=> {
    const proColor = document.querySelector(".pro-color"),
    slider= document.querySelector('.slider'),
    card = document.querySelectorAll(".card"),
    about = document.querySelector(".about");

    about.classList.add('active')
    proColor.classList.add('active')
    slider.classList.add('active')

    card.forEach((item)=> {
        item.classList.add('active')
    })

    const cardBtn = document.querySelectorAll('.cardBtn');

    cardBtn.forEach((item)=> {
        item.addEventListener("click", (
            document.getElementById('fourth')
        ))
    })
})