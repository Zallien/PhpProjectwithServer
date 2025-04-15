document.getElementById("LoginBTN").addEventListener('click', function(e) {
    e.preventDefault();

    const loadingElement = document.getElementById("loading");
    
    loadingElement.classList.remove("hidediv");
    console.log("Loading animation started");
});

let RoleToggle = "Customer";
const toggleroleBTN = document.querySelector(".navtop label")


const selecbtn = document.querySelectorAll(".selectionbtn")
const selectiondivs = document.querySelectorAll(".selectiondivs")

selecbtn.forEach(i =>{

    i.addEventListener('click', ()=>{
        selectiondivs.forEach(e => {
           e.classList.add("hidediv") 
        });

        let target = i.dataset.target
        document.querySelector(`.${target}`).classList.remove("hidediv")
    } )
})

document.addEventListener('DOMContentLoaded', function(){

    if(RoleToggle == "Customer"){
        document.querySelector(".forcustomers").classList.remove("hidediv")
        document.querySelector(".foradmin").classList.add("hidediv")
        document.querySelector(".navtop label").innerHTML = "Login as Admin or Staff"
    }
    else{
        document.querySelector(".forcustomers").classList.remove("hidediv")
        document.querySelector(".foradmin").classList.add("hidediv")
         document.querySelector(".navtop label").innerHTML = "Register/Login as Customer"

    }
})

const centerdivs = document.querySelectorAll(".centerdiv")

toggleroleBTN.addEventListener('click', function(){

    if(RoleToggle == "Customer"){
        centerdivs.forEach(element => {
            element.classList.remove("hidediv")
        });
        document.querySelector(".foradmin").classList.add('hidediv')
        document.querySelector(".navtop label").innerHTML = "Login as Admin or Staff"
        RoleToggle = "Admin"
        console.log(RoleToggle)
    }
    else{
        centerdivs.forEach(element => {
            element.classList.remove("hidediv")
        });
        document.querySelector(".forcustomers").classList.add("hidediv")
        document.querySelector('.foradmin .forlogin').classList.remove('hidediv')
         document.querySelector(".navtop label").innerHTML = "Register/Login as Customer"
        RoleToggle = "Customer"
        console.log(RoleToggle)
    }
})


