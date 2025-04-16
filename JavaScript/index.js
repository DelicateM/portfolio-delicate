document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
(function(){
    emailjs.init("public_Pk9qp4JBvgr3jIea7");});

document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();
    emailjs.sendForm("service_kpspd1m","template_ynfn46h",this)
    .then(()=> alert("Message sent!"),(err)=> alert ("Error: "+ JSON.stringify(err)));

});