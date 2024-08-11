document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('registration-modal');
    const closeButton = document.querySelector('.close-button');
    const registrationForm = document.getElementById('registration-form');
    const back = document.querySelector('#back')

    let currentIndex = 0;

    back.addEventListener('click' , () =>{
        location.href = '../html/first-page.html'
    })


    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    closeButton.addEventListener('click', closeModal);

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const data = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        console.log('Registration Data:', data);
        // Here you would send the data to your server
        // alert('Registration successful. A verification code has been sent to your phone.');
        closeModal();
    });

    openModal();
});






