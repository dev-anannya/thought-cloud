<?php
$servername = "localhost";  // Your database server name
$username = "root";         // Your database username
$password = "";             // Your database password
$dbname = "thoughtcloud_login";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form inputs
    $user = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $pass = $conn->real_escape_string($_POST['password']);
    
    // Check if the inputs are not empty
    if (!empty($user) && !empty($email) && !empty($pass)) {
        // Hash the password
        $hashed_password = password_hash($pass, PASSWORD_BCRYPT);
        
        // Insert data into the login table
        $sql = "INSERT INTO login (username, email, password) VALUES ('$user', '$email', '$hashed_password')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "All fields are required.";
    }
}

$conn->close();
?>
