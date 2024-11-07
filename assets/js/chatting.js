function body_load(){
    return true;
}

function check_image(){
    const imageInput = document.querySelector('.input input[name="image"]');
        if (!imageInput.files.length) {
            document.querySelector('.input form').enctype = "application/x-www-form-urlencoded";
        }
}

function send(){
    check_image();

    return true;
}