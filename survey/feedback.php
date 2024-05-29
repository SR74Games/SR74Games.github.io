<?php 
  $to = "mcplayersjr74@gmail.com";
  $re = "StephenRitchie74 Feedback";
  $msg = $name."\n".$email."\n".$comments;
  mail($to,$re,$msg);
?>
<!doctype html>
<html>
  <head>
    <title>Message Sent</title>
    <link rel="stylesheet" href="/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="">
  </head>
  <body>
    <header>
      <img src="/stephenritchie74.png" alt="Stephen Ritchie 74" width="200">
      <div id="topnav">
        <a href="mailto:mcplayersjr74@gmail.com">Email me</a> |
        <a href="/survey">Survey</a> |
        <a href="https://github.com/StephenRitchie74/StephenRitchie74.github.io">Site Code</a>&nbsp;
      </div>
    </header>
    <div id="side">
      <p>Thanks! I will try to reply as soon as possible!</p>
    </div>
    <div id="main">
      <h3>Thanks for your feedback</h3>
      <p>Message sent by <?php echo($name); ?></p>
    </div>
    <footer> 
    <p>&copy; 2024 SR74 Co. All images are the property of their respective owners. </p>
    </footer>
  </body>
</html>
