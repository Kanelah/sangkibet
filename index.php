<?php




$email ;
$email = $_POST['email'];

$conn= mysqli_connect("localhost","root","","portal");

if(!$conn)
{
    echo "Database connection Failed";
}
$sql = "INSERT INTO email (Email) VALUES('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Thank you for Subscribing;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>