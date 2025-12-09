let prevScrollPos = window.scrollY;
window.onscroll = () => {
  const currentScrollPos = window.scrollY;
  const pageHeader = document.getElementById("page-header");
  if (!pageHeader) {
    console.log("page header not set");
  } else if (prevScrollPos > currentScrollPos) {
    pageHeader.style.top = "0";
  } else {
    pageHeader.style.top = "-90px";
  }
  prevScrollPos = currentScrollPos;
};
