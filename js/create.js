document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const back = document.querySelector('#back')

    back.addEventListener('click', () =>{
        location.href = '../html/first-page.html'
    })

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    } 

    // Store information in local storage
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password // Note: Storing plain passwords is insecure. This is just for demonstration.
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    errorMessage.textContent = '';
    alert('Account created successfully!');
    document.getElementById('createAccountForm').reset(); // Reset form fields
});