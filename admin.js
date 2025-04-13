
const filterbutton = document.getElementById("filterbtn")
const filterbackbutton = document.getElementById("filterback")

const addaccountbutton = document.getElementById("addaccountbutton")
const addaccountbuttonback = document.getElementById("addaccountbuttonback")

const addproductbutton = document.getElementById("addproductBTN")
const addproductbuttonback = document.getElementById("addproductBTNback")

const navbuttons = document.querySelectorAll('.navbuttons')
const panels = document.querySelectorAll('.panels')

document.addEventListener('DOMContentLoaded', function(){
    const imgTag = document.getElementById('displayImage');
    imgTag.src = "Assets/logo03.png"
})




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

// forfilter
filterbutton.addEventListener('click', function(){
    document.querySelector(".filteringproductspanel").classList.remove("hiddendiv")
})

filterbackbutton.addEventListener('click', function(){
    document.querySelector(".filteringproductspanel").classList.add("hiddendiv")
})

// foraddingproduct
addproductbutton.addEventListener('click', function(){
    document.querySelector(".addproductpanel").classList.remove("hiddendiv")
})

addproductbuttonback.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector(".addproductpanel").classList.add("hiddendiv")
})

// foraddaccount
addaccountbutton.addEventListener('click', function(){
    document.querySelector(".addaccountpanel").classList.remove("hiddendiv")
})

addaccountbuttonback.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector(".addaccountpanel").classList.add("hiddendiv")
})


const imginput = document.getElementById("imageInput");

document.querySelector('.imgcontainer').addEventListener('click', function(event) {

    imginput.click() 
});

imginput.addEventListener('change', function(){
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imgTag = document.getElementById('displayImage');
        imgTag.src = e.target.result;
        imgTag.style.display = 'block';
      };
      reader.readAsDataURL(file);
      document.querySelector(".imgcontainer label").style.display = "none"
    }
})

