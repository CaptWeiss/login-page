

const nameEl = document.getElementById('name');

const emailEl = document.getElementById('email');

const passwordEl = document.getElementById('password');

const ConfirmpasswordEl = document.getElementById('Confirmpassword');

const form = document.getElementById('form');


const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const Confirmpassword_error = document.getElementById('Confirmpassword_error');





form.addEventListener('submit', (e) => 
{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(nameEl.value === '' )

    {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }
    if (!emailEl.value.match(email_check))
    {
        email_error.innerHTML = "Valid Email is required";
    }

    if(passwordEl.value === '' || passwordEl.value.length < 6)
    {
        password_error.innerHTML = "Password must not be less than 6 characters";
    }

    if(ConfirmpasswordEl.value !== passwordEl.value || ConfirmpasswordEl.value =='')

    {
        Confirmpassword_error.innerHTML = "Password does not match";
    }
    
    
    localStorage.setItem('name', nameEl.value);
    localStorage.setItem('password',passwordEl.value);
    localStorage.setItem('email', emailEl.value);

}
)


 


