declare var grecaptcha: any;

const sitekey = "[Your site key]";

document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    initrecaptcha();
});



function initrecaptcha() {
     // Get reCAPTCHA token
     grecaptcha.ready(function() {
        grecaptcha.execute(sitekey, {action: 'Register'}).then(function(token) {
            // Add token to hidden input field
            (document.getElementById('recaptchaResponse') as HTMLInputElement).value = token;
            console.log(token);

            // Submit the form
            const form = document.getElementById('signup-form') as HTMLFormElement;
            form.submit();
        });
    });    
}