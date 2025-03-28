<?php
// Establish database connection
$conn = new mysqli('localhost', 'root', '');

// Check connection to the MySQL server
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create the database if it doesn't exist
$dbquery = "CREATE DATABASE IF NOT EXISTS NidhiForm";
if ($conn->query($dbquery) === TRUE) {
    echo "Database successfully created or already exists.<br>";
} else {
    die("Error creating database: " . $conn->error . "<br>");
}

// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'NidhiForm');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create the table if it doesn't exist
$que = "CREATE TABLE IF NOT EXISTS FormTable (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    feedback VARCHAR(500) NULL
)";
if ($conn->query($que) === TRUE) {
    echo "Table successfully created or already exists.<br>";
} else {
    die("Error creating table: " . $conn->error . "<br>");
}

// Check if form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data directly using $_POST
    $name = $_POST['name'];    // Name from form
    $phone = $_POST['phno'];   // Phone from form
    $email = $_POST['email'];  // Email from form
    $feedback = $_POST['feedback'];  // Feedback from form

    // Insert the data into the database
    $insert_query = "INSERT INTO FormTable (name, phone, email, feedback) 
                     VALUES ('$name', '$phone', '$email', '$feedback')";
    
    if ($conn->query($insert_query) === TRUE) {
        echo "Feedback submitted successfully!<br>";
    } else {
        echo "Error: " . $conn->error . "<br>";
    }
}

// Close the connection
$conn->close();
?>
