<?php
  $name = $_POST['firstname', 'lastname'];
  $country = $_POST['country']
  $visitor_email = $_POST['email'];
  $message = $_POST['subject'];
?>

<?php
	$email_from = 'tetjejannes.schulz@yweb.de';

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
?>

<?php

  $to = "knut51@mail.ru";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

 ?>