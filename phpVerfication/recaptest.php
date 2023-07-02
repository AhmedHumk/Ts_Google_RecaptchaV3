<?php
function verifyRecaptcha($recaptcha_token) {
  $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
  $securitykey = '[You Securiy Key]';
  $recaptcha = file_get_contents($recaptcha_url . '?secret='.$securitykey.'&response=' . $recaptcha_token);
  $recaptcha_result = json_decode($recaptcha);
  
  return $recaptcha_result;
}


if (isset($_POST['recaptchaResponse'])){
  $recaptcha_token = $_POST['recaptchaResponse'];
  $result = verifyRecaptcha($recaptcha_token);
  if(!$result){
    echo "failed to get results";
    return;
  }
  $success = var_export($result->success, true);
  if ($success === "true") {
    $score = $result->score;
    $action = $result->action;
    $challenge_ts = $result->challenge_ts;
    echo "<pre>success : ".$success."\n\r";
    echo "Score : ".$score."\n\r";
    echo "Challenge ts : ".$challenge_ts."</pre>";
  } else {
    $error_codes = $result->{'error-codes'};
    echo "<pre>reCAPTCHA verification failed with error codes\n";
    foreach ($error_codes as $error) {
      echo $error . "\n\r";
    }
    echo "</pre>";
  }
} else {
  echo "recaptcha is not set";
}


?>