var _a;
var sitekey = "[Your site key]";
(_a = document.getElementById('signup-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    initrecaptcha();
});
function initrecaptcha() {
    // Get reCAPTCHA token
    grecaptcha.ready(function () {
        grecaptcha.execute(sitekey, { action: 'Register' }).then(function (token) {
            // Add token to hidden input field
            document.getElementById('recaptchaResponse').value = token;
            console.log(token);
            // Submit the form
            var form = document.getElementById('signup-form');
            form.submit();
            // Now you can submit the form or send an AJAX request with the form data
            // e.target.submit();
        });
    });
}
