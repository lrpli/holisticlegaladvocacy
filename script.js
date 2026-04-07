const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 80}ms`;
  observer.observe(item);
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const endpoint = contactForm.getAttribute('action') || '';
    if (endpoint.includes('your-form-id')) {
      formStatus.textContent = 'Formspree endpoint is not configured yet. Replace "your-form-id" to activate submission.';
      formStatus.className = 'form-status error';
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        contactForm.reset();
        formStatus.textContent = 'Thank you. Your message has been submitted successfully.';
        formStatus.className = 'form-status success';
      } else {
        formStatus.textContent = 'Submission failed. Please try again or email info@holisticlegaladvocacy.us.';
        formStatus.className = 'form-status error';
      }
    } catch (error) {
      formStatus.textContent = 'Network error. Please try again shortly or email info@holisticlegaladvocacy.us.';
      formStatus.className = 'form-status error';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Message';
      }
    }
  });
}
