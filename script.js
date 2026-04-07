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

    const recipient = contactForm.getAttribute('data-recipient') || 'info@holisticlegaladvocacy.us';
    const subject = contactForm.querySelector('input[name="_subject"]')?.value || 'Website inquiry';
    const name = contactForm.querySelector('#name')?.value.trim() || '';
    const email = contactForm.querySelector('#email')?.value.trim() || '';
    const organization = contactForm.querySelector('#organization')?.value.trim() || 'Not provided';
    const topic = contactForm.querySelector('#topic')?.value || '';
    const message = contactForm.querySelector('#message')?.value.trim() || '';

    if (!name || !email || !topic || !message) {
      formStatus.textContent = 'Please complete all required fields before sending.';
      formStatus.className = 'form-status error';
      return;
    }

    const body = [
      `Full Name: ${name}`,
      `Email Address: ${email}`,
      `Organization: ${organization}`,
      `Topic: ${topic}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    formStatus.textContent = 'Your email app should open now. If it did not, please email info@holisticlegaladvocacy.us directly.';
    formStatus.className = 'form-status success';
  });
}
