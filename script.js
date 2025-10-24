document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const formElement = document.getElementById('optin-form');
  const emailInputElement = document.getElementById('email');
  const formMessageElement = document.getElementById('form-message');

  if (!formElement || !emailInputElement || !formMessageElement) return;

  function isValidEmail(email) {
    const trimmed = String(email).trim();
    if (trimmed.length < 5) return false;
    const emailRegex = /^(?:[^\s@]+)@(?:[^\s@]+)\.[^\s@]{2,}$/;
    return emailRegex.test(trimmed);
  }

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInputElement.value;

    formMessageElement.textContent = '';
    formMessageElement.classList.remove('error', 'success');

    if (!isValidEmail(email)) {
      formMessageElement.textContent = 'Please enter a valid email address.';
      formMessageElement.classList.add('error');
      emailInputElement.focus();
      return;
    }

    formMessageElement.textContent = "Thanks! You're on the list.";
    formMessageElement.classList.add('success');
    emailInputElement.value = '';
  });
});


