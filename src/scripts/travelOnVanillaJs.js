window.addEventListener('scroll', function () {
  let container = document.querySelector(".travel");
  let devieHeight = window.innerHeight;


  if (devieHeight < 1000) {
    if (pageYOffset > 1300) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  } else if (devieHeight > 1000) {
    if (pageYOffset > 1000) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  }

});