<?php
$name = $_POST['user_name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "iqbalsheila619@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@bolaxd.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
header("Location:tq.html");
?>