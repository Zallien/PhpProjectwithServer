
const menunavs = document.querySelectorAll(".menunav ul li");
const sections = document.querySelectorAll(".containersforfoodcards");
const PayBTN = document.getElementById("paybtn")

menunavs.forEach((menuitem, i) =>{


    menuitem.addEventListener('click', ()=>{
        menunavs.forEach(element => {
            element.classList.remove("active")
        });

        menuitem.classList.add("active");

        sections.forEach(secs => {
            secs.classList.remove('active')
        });
        sections.forEach(secs => {
            secs.classList.add('hiddenlist')
        });

        sections[i].classList.add('active');
        sections[i].classList.remove('hiddenlist');
        if(menuitem.classList.contains("active")){
            document.getElementById("nameofactivenav").innerText = menuitem.dataset.target;
        }

    });
    


});

PayBTN.addEventListener('click', function(){
    const loadingElement = document.getElementById("loading");
    loadingElement.classList.remove("hidediv");
})


// OrderStatus
document.getElementById("OrderstatusBTN").addEventListener('click', ()=>{

    document.querySelector(".orderstatus").classList.remove("hidediv")
})

document.getElementById("orderstatusback").addEventListener('click', ()=>{

    document.querySelector(".orderstatus").classList.add("hidediv")
})

document.getElementById("AccSettings").addEventListener('click', ()=>{

    document.querySelector(".accountsettings").classList.remove("hidediv")
})

document.getElementById("accsettingsbakc").addEventListener('click', ()=>{

    document.querySelector(".accountsettings").classList.add("hidediv")
})
