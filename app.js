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