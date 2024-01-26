searchForm = document.querySelector('.search-form'); // Selects the search form element

document.querySelector('#search-btn').onclick = () =>{ // Adds an onclick event to the search button
  searchForm.classList.toggle('active'); // Toggles the 'active' class for the search form
}

let loginForm = document.querySelector('.login-form-container'); // Selects the login form container

document.querySelector('#login-btn').onclick = () =>{ // Adds an onclick event to the login button
  loginForm.classList.toggle('active'); // Toggles the 'active' class for the login form
}

document.querySelector('#close-login-btn').onclick = () =>{ // Adds an onclick event to the close login button
  loginForm.classList.remove('active'); // Removes the 'active' class from the login form
}

let loginForm2 = document.querySelector('.login-form-container'); // Selects the login form container again

document.querySelector('#login-btn2').onclick = () =>{ // Adds an onclick event to the second login button
  loginForm.classList.toggle('active'); // Toggles the 'active' class for the login form
}

document.querySelector('#close-login-btn').onclick = () =>{ // Adds an onclick event to the close login button
  loginForm.classList.remove('active'); // Removes the 'active' class from the login form
}

window.onscroll = () =>{ // Adds an onscroll event to the window

  searchForm.classList.remove('active'); // Removes the 'active' class from the search form

  if(window.scrollY > 80){ // Checks if the scroll position is more than 80
    document.querySelector('.header .header-2').classList.add('active'); // Adds the 'active' class to the header-2
  }else{
    document.querySelector('.header .header-2').classList.remove('active'); // Removes the 'active' class from the header-2
  }

}

window.onload = () =>{ // Adds an onload event to the window

  if(window.scrollY > 80){ // Checks if the scroll position is more than 80
    document.querySelector('.header .header-2').classList.add('active'); // Adds the 'active' class to the header-2
  }else{
    document.querySelector('.header .header-2').classList.remove('active'); // Removes the 'active' class from the header-2
  }

  fadeOut(); // Calls the fadeOut function

}

function loader(){ // Defines the loader function
  document.querySelector('.loader-container').classList.add('active'); // Adds the 'active' class to the loader container
}

function fadeOut(){ // Defines the fadeOut function
  setTimeout(loader, 4000); // Calls the loader function after 4 seconds
}

var swiper = new Swiper(".books-slider", { // Initializes a Swiper instance for the books slider
  loop:true, // Enables looping
  centeredSlides: true, // Enables centered slides
  autoplay: { // Enables autoplay
    delay: 9500, // Sets the delay between transitions to 9500ms
    disableOnInteraction: false, // Continues autoplay after user interaction
  },
  breakpoints: { // Sets responsive breakpoints
    0: {
      slidesPerView: 1, // Shows 1 slide per view for viewport widths of 0px and up
    },
    768: {
      slidesPerView: 2, // Shows 2 slides per view for viewport widths of 768px and up
    },
    1024: {
      slidesPerView: 3, // Shows 3 slides per view for viewport widths of 1024px and up
    },
  },
});
