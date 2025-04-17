let accountnav = false

document.querySelector('.adminInfo').addEventListener('click', function(){
    if(accountnav == true){
        document.querySelector('.accountnav').classList.add('hidediv')
        accountnav = false
    }
    else{
        document.querySelector('.accountnav').classList.remove('hidediv')
        accountnav = true
    }
})