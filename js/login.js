// step 1: added the event handlers on the submit button
document.querySelector('#btn-submit').addEventListener('click', function(){
    // step 2: get the email address
    const emailfield = document.getElementById('input-email');
    const email = emailfield.value;
    // console.log(email) ;
    emailfield.value = '' ;

    // step: 3 get the password
    const passwordfield = document.getElementById('input-pass');
    const password = passwordfield.value;
    passwordfield.value = '' ;
    // console.log(password) ;

    // step 4: varify password and email fields
    if (password === 'password' && email === 'email') {
        location.href = "bank.html";
    }else{
        alert('inter the invalid password or email')
    }
});