
    let elem =document.getElementsByClassName('content');
    let toggle = document.querySelector('#toggle');
    toggle.addEventListener('click',()=>{
        let navItems= document.querySelector('.nav-items');
        if(navItems.style.display=="none") {
            navItems.style.display="block"
            
        }else{
            navItems.style.display="none"
        }
    })

