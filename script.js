const main = document.querySelector('.main');
const successMsg = document.querySelector('.success-msg');
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = document.querySelector('#email-input');
const errorMsg = document.querySelector('.error-msg');
const dismissBtn = document.querySelector('.dismiss-btn');


newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')){
        emailInput.classList.add('invalid');
        errorMsg.style.display = 'block';
        return;
    }
    main.style.display = 'none';
    successMsg.style.display = 'flex';
    newsletterForm.reset();
});

dismissBtn.addEventListener('click', () => {
    main.style.display = 'flex';
    successMsg.style.display = 'none';
});