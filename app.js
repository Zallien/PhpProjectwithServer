document.getElementById("LoginBTN").addEventListener('click', function(e) {
    e.preventDefault();

    const loadingElement = document.getElementById("loading");
    
    loadingElement.classList.remove("hidediv");
    console.log("Loading animation started");
});
