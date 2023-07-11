<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["Nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $nbPersonnes = $_POST["nbPersonnes"];
    $ville = $_POST["Ville"];
    $message = $_POST["msg"];

    // Format du message à envoyer
    $emailContent = "Nom : $nom\n";
    $emailContent .= "Prénom : $prenom\n";
    $emailContent .= "E-Mail : $email\n";
    $emailContent .= "Téléphone : $phone\n";
    $emailContent .= "Nb personnes : $nbPersonnes\n";
    $emailContent .= "Ville de réception : $ville\n";
    $emailContent .= "Message : $message\n";

    // Adresse email de destination
    $to = "thibault.boutaud@gmx.fr";

    // Sujet de l'email
    $subject = "Demande de devis";

    // En-têtes de l'email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Le message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
