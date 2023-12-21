function checkData(){
    var enterName = document.getElementById('name').value;
    var enterPassword = document.getElementById('password').value;

    var getName=localStorage.getItem('name');
    var getPassword=localStorage.getItem('password');


    if(enterName == getName)
    {
        if(enterPassword == getPassword)
        {
            alert("login successful");
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("invalid usernsme");
    }
    
    if(enterName !== getName || enterName == '' )
    {
        if(enterPassword !== getPassword || enterPassword =='')
        {
            alert("login faild");
        }
    }
    
}