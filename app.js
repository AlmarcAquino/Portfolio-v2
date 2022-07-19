// Globals
const scaleFactor = 1 / 20;
let isModalOpen = false;
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__link--list');
const navLinks = document.querySelectorAll('.nav__link');
const themeChanger = document.querySelector('.fa-circle-half-stroke')


// Hambuger Menu Control
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
  // Close Menu on Link Click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
})


// Toggles light / dark mode
themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
})


// Triggers fade in animations on projects
// when user scrolls to project section
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const projectDiv = document.querySelectorAll('.project');
    if(entry.isIntersecting) {
      projectDiv[0].classList.add('fadeInLeft');
      projectDiv[1].classList.add('fadeInRight');
      projectDiv[2].classList.add('fadeInUp');
    }
  })
})

observer.observe(document.querySelector('.project__list'));


// Triggered on contact form submission
// Sends Form information to email
function contact(event) {
  event.preventDefault();
  
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList.add('modal__overlay--visible')
  emailjs
    .sendForm(
      'service_qqinydm',
      'template_43tjfuw',
      event.target,
      '0gEtMWsyoguQlb94n'
    ).then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    }).catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly at almarcfaquino@gmail.com'
      );
    })
}


// Opens and closes contact form
function toggleModal() {
  if(isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open')
  }
  isModalOpen = !isModalOpen;
  document.body.classList.add('modal--open');
}


// Moves background shapes on mouse move
function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape');
  const xMouse = event.clientX * scaleFactor;
  const yMouse = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${xMouse * boolInt}px, ${yMouse * boolInt}px)`;
  }
}


