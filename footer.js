window.addEventListener("scroll", function() {
    var footer = document.querySelector(".footer");
    if (window.scrollY > 0) {
        footer.classList.remove("hide");
      
    } else {
        footer.classList.add("hide");
    }
  });
