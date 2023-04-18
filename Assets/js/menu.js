function menuShow(){
    var menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'Assets/img/menu.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'Assets/img/cancel.png'
    }
}