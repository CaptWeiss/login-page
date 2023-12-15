

const name = document.getElementById('name');

const email = document.getElementById('email');

const password = document.getElementById('password');

const Confirmpassword = document.getElementById('Confirmpassword');

const form = document.getElementById('form');


const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const Confirmpassword_error = document.getElementById('Confirmpassword_error');





form.addEventListener('submit', (e) => 
{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(name.value === '' || name.value == null)

    {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }

    if (!email.value.match(email_check))

    {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
    }

    if(password.value === '' || password.value.length < 6)

    {
        e.preventDefault();
        password_error.innerHTML = "Password must not be less than 6 characters";
    }

    if(Confirmpassword.value !== password.value)

    {
        e.preventDefault();
        Confirmpassword_error.innerHTML = "Password does not match";
    }
    
    localStorage.setItem('name', 'Ama onyens');
    localStorage.setItem('password','123456');
    localStorage.setItem('email', 'abc@gmail.com');

}
)


 


