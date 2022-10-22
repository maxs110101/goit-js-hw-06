const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;


    if (email === '' || password == '') {
        alert('Ви заповнили не всі поля')
    } else {
        const formResult = {
            email,
            password,
        };

        console.log(formResult);
        formRef.reset()
    }
}

