window.onscroll = () => {
    let currentScrollPos = window.pageYOffset

    if ( currentScrollPos > 0) {
        document.querySelector('#searchbar').style.display = 'flex'
    } else {
        document.querySelector('#searchbar').style.display = 'none'
    }
}