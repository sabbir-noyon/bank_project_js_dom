
document.getElementById('btn-submit').addEventListener('click', function(){

    // get and set email

    const inputUserEmail = document.getElementById('input-user-email');

    const emailValue = inputUserEmail.value;

   

    // get and set password

    const inputUserPassword = document.getElementById('input-user-password');
    const passwordValue = inputUserPassword.value;

    console.log(emailValue,passwordValue);

    if(emailValue === "sabbir.noyon.001@gmail.com" && passwordValue === "sabnoy123"){

        window.location.href='bank.html';

    }
    else{

        alert("INVALID USER");
    }

    


})
