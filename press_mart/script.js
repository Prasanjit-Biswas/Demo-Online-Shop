var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 5000,
  },
});

var swiper = new Swiper(".sample-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    399: {
      slidesPerView: 1,
      spaceBetweenSlides: 100,
    },
    650: {
      slidesPerView: 2,
      spaceBetweenSlides: 500,
    },
    770: {
      slidesPerView: 1,
      spaceBetweenSlides: 40
    }
  }
});

const btns = document.querySelectorAll('.btn');
const storProducts = document.querySelectorAll('.common');

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    storProducts.forEach((product) => {
      if (filter == "all") {
        product.style.display = "block"
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none"
        }
      }
    })
  })
}

// const search = document.getElementById('search');

// search.addEventListener("keyup", (e) =>{
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();

//     for(i=0;i<storProducts.length;i++){
//     if(storProducts[i].classList.contains(searchValue));
//     }
// })

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    499: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    750: {
      slidesPerView: 2,
      spaceBetweenSlides: 10
    },
    1099: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// timer
var dest = new Date("oct 3, 2023 10:00:00").getTime();

var x= setInterval(function(){



var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff/(1000*60*60*24));
// console.log(days)
var hours = Math.floor((diff % (1000*60*60*24)) / (1000 * 60 * 60));
// console.log(hours)
var munite = Math.floor((diff % (1000*60*60)) / (1000 * 60));
// console.log(munite)
var seconds = Math.floor(diff % (1000*60) / 1000);
// console.log(seconds)

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".munit").innerHTML = munite;
document.querySelector(".second").innerHTML = seconds;

}, 1000);



var swiper = new Swiper(".rating", {
  pagination: {
    el: ".swiper-pagination",
  },
});


// navbar
function myFunction() {
  var click = document.getElementById("menu-items");
  if (click.style.display === "none") {
     click.style.display = "flex";
  } else {
     click.style.display = "none";
  }
}