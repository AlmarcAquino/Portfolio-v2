// Triggers fade in animations on projects
// when user scrolls to project section
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll('.project')[0].classList.add('fadeInLeft');
      document.querySelectorAll('.project')[1].classList.add('fadeInRight');
      document.querySelectorAll('.project')[2].classList.add('fadeInUp');
    }
  })
})

observer.observe(document.querySelector('.project__list'));
