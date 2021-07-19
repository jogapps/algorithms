const passwordValidator = (password) => {
    let strength = 0;
    if(password.match(/^[A-Za-z]+$/)) strength = 1;
    else if(password.match(/^[0-9]+$/)) strength = 2;
    else if(password.match(/^[0-9A-Za-z]+$/)) strength = 3;
    else if(password.match(/^[0-9A-Za-z]+[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/)) strength = 4;

    return strength;
}

//console.log(passwordValidator("kddffffj"));
