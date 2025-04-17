document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            form.reset();
            alert("Your message has been sent!");
        })
        .catch((error) => {
            alert("Something went wrong. Please try again.");
            console.error(error);
        });
    });
});
