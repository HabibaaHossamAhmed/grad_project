const navMain = document.getElementById('navMain');

// if (window.pageYOffset >= 100) {
//     navMain.classList.add("navScroll")
//     } else {
//         navMain.classList.remove("navScroll");
//     }
// window.addEventListener("scroll", function(event) {
//     navMain.classList.add('navScroll');
// });

window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
        navMain.classList.add('navScroll');
        navMain.classList.add('trans');
    } else {
        navMain.classList.remove('navScroll');
        navMain.classList.add('trans');
    }
  });