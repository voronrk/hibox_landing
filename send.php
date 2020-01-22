<?php session_start();

$from=$_POST['email'];
$message="Имя: {$_POST['name']}\nТелефон: {$_POST['phone']}\nE-mail: {$_POST['email']}\n{$_POST['text']}";
$subject="Заявка с лендинга";

$message=mb_convert_encoding($message, "CP1251");
$subject=mb_convert_encoding($subject, "CP1251");
$headers = 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    // mail("rk@printkirov.ru", $subject, $message, $headers);
    mail("sales@hibox.pro", $subject, $message, $headers);
    mail("mail@kursor43.ru", $subject, $message, $headers);
    echo ('ok');
// include "sent.php";
?>