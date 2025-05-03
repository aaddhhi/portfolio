document.addEventListener("DOMContentLoaded", () => {
  const profileSection = document.querySelector('#profile');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        profileSection.classList.add('animate');
        observer.unobserve(profileSection); // Animate only once
      }
    });
  }, {
    threshold: 0.3
  });

  if (profileSection) {
    observer.observe(profileSection);
  }
});
