let prevScrollPos = window.scrollY;
window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById('page-header').style.top = '0';
    } else {
        document.getElementById('page-header').style.top = '-72px';
    }
    prevScrollPos = currentScrollPos;
}