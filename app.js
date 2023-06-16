
function imgSlider(anything){
document.querySelector(".boxImg").src = anything;
}
function changeBgColor(color){
const sec = document.querySelector(".section1");
sec.style.background = color;
}

function changeBgColorHeader(color){
  const spancolor = document.querySelector(".spancolor");
  spancolor.style.background = color;
}



function navBlock() {
  var Header = document.querySelector('.header');
    var logoHeader = document.querySelector('.logoHeader');
    var signInUp = document.querySelector('.signInUp');
    var navUl = document.querySelector('.navUl');
    if (navUl.style.display === 'none') {
        navUl.style.display = 'block';
        Header.style.height='20px';
        logoHeader.style.display = 'none'; 
        signInUp.style.display = 'none'; 
    } else {
        navUl.style.display = 'none';
        logoHeader.style.display = 'block';
        Header.style.height='70px';
        signInUp.style.display = 'block';  
    }
}
// Add the following JavaScript code
const section5 = document.querySelector('.section5');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section5.classList.add('animate');
    } else {
      section5.classList.remove('animate');
    }
  });
});

observer.observe(section5);
window.addEventListener('scroll', function() {
  var section7 = document.getElementById('section7');
  var section7Top = section7.offsetTop;
  var section7Height = section7.offsetHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition > section7Top - windowHeight + section7Height / 2) {
    document.querySelector('.sec7left').style.top = '0';
    document.querySelector('.sec7right').style.top = '0';
  }
});




  