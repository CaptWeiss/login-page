

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit', (e)=>
{
     if(name.value === '' || name.value == null)
    {
        e.preventDefault();
        name_error.innerHTML = "Name is Required";
    }

    if(password.value.length <=5)
    {
        e.preventDefault();
        password_error.innerHTML = "Password must not be more than 6 characters";
    }
})


