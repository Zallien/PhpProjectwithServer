
const filterbutton = document.getElementById("filterbtn")
const filterbackbutton = document.getElementById("filterback")

const navbuttons = document.querySelectorAll('.navbuttons')
const panels = document.querySelectorAll('.panels')

navbuttons.forEach((btns, e) =>{


    btns.addEventListener('click', function(){

        navbuttons.forEach((i)=>{
            i.classList.remove('active')
        })
        btns.classList.add('active')

        panels.forEach((i)=>{
            i.classList.add('hiddendiv')
        })

        let target = btns.dataset.target
        document.querySelector(`.${target}`).classList.remove('hiddendiv')
    })
})


filterbutton.addEventListener('click', function(){
    document.querySelector(".filteringproductspanel").classList.remove("hiddendiv")
})

filterbackbutton.addEventListener('click', function(){
    document.querySelector(".filteringproductspanel").classList.add("hiddendiv")
})