// yang digunakan untuk pindah html pages
document.addEventListener('DOMContentLoaded', () => {
    const homeButtons = document.querySelectorAll('.home-page');

    homeButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'homepage.html'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutusButtons = document.querySelectorAll('.aboutus-page');

    aboutusButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'aboutus.html'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.product-page');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'products.html'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const testimoniesButtons = document.querySelectorAll('.testi-page');

    testimoniesButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'testimonies.html'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelectorAll('.register-page');

    registerButton.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'registerpage.html'; 
        });
    });
});

// untuk validasi register
function validateAll() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const birthDate = document.getElementById("birthDate");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const signInForm = document.getElementById("sign-inform");

    if(name.value.trim() === "") {
        alert("Please fill in your name");
    } else if(!email.value.endsWith("@gmail.com")){
        alert("Email should be a Gmail address");
    } else{
        console.log("Name: " + name.value);
        console.log("Email: " + email.value);
        console.log("Gender: " + gender.value);
        console.log("Birth Date: " + birthDate.value);
        console.log("Address: " + address.value);

        signInForm.submit();
    }
}



