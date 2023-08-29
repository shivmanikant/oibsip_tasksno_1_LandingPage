// Smooth scroll behavior for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle active class for navigation links
  document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
  
    // You can now send this data to your backend or perform other actions
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear the form fields
    form.reset();
  });
  