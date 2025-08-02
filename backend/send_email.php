<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Composer autoload

header("Access-Control-Allow-Origin: *"); // Or use specific domain
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$contact = $data['contact'] ?? '';
$msg = $data['msg'] ?? '';

if (!$name || !$email || !$contact || !$msg) {
    echo json_encode(["status" => "error", "message" => "All fields are required."]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // Gmail SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'jeffgamasan@gmail.com'; // Your Gmail address
    $mail->Password   = 'ppvg pxij fhue kvnq';   // App-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('jeffgamasan@gmail.com', 'Receiver');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message';
    $mail->Body    = "<h3>New Contact Form Submission</h3>
                      <p><strong>Name:</strong> {$name}</p>
                      <p><strong>Email:</strong> {$email}</p>
                      <p><strong>Contact:</strong> {$contact}</p>
                      <p><strong>Message:</strong><br> {$msg}</p>";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
