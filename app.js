document.getElementById("LoginBTN").addEventListener('click', function(e) {
    e.preventDefault();

    const loadingElement = document.getElementById("loading");
    
    loadingElement.classList.remove("hidediv");
    console.log("Loading animation started");
});

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


