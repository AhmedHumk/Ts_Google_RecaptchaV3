# Ts_Google_RecaptchaV3
 a simple demonstration on how to use google recaptcha V3 in your typescript Project

### Usage of Google recaptcha V3 in typeScript 👋

😄 its not a big deal its just a reference since I have been asked on my tiktok livestream many questions about how to integrate the **Google Re-Captcha v3** in there typescript project and how to validate them through any type of backend. in this example i considered php as my backend.

if you are an alien and wonder what is google Re-Captcha ? then take a look at there website https://www.google.com/recaptcha/about/ 

in my book **Google Re-Captcha V3** is so weak if it comes to protection against flooding and spamming. so if you want to rely on it use it as your own risk.

The demo project is very simple to understand.

Edit those files with your **Google Re-Captcha site key** 

 - **googleRecapTest.ts**
 - **index.html**
 - **recaptest.php** `<--- note this could be your backend`

**googleRecapTest.ts**  change `const  sitekey  =  "[Your site key]";` with your **google Site key.**
eg : 
`const  sitekey  =  "xxxxxxxxxxxxx";`

**do the same to your html script renderer** 
`<script  src="https://www.google.com/recaptcha/api.js?render=[Your Site Key]"></script>`

 **recaptest.php** change `$securitykey = '[You Securiy Key]';` with your **google re-captcha security key.**
eg :  
`$securitykey = 'xxxxxxxxxxxxxx';`

and you are ready to go. any questions follow me on **tiktok: @pureminforever**
