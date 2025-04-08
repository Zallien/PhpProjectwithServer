
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
