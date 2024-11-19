<?php
// Include connection file
include 'connect.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if fields are set in POST data
    if(isset($_POST['fullName']) && isset($_POST['emailAddress']) && isset($_POST['passWord'])) {
        // Get form data
        $full_name = $_POST['fullName'];
        $email = $_POST['emailAddress'];
        $password = $_POST['passWord'];

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // SQL query to insert data into 'signup' table
        $sql = "INSERT INTO signup (full_name, email, password) VALUES (?, ?, ?)";

        // Prepare query
        $stmt = $conn->prepare($sql);

        // Check if prepare() was successful
        if ($stmt === false) {
            die('Error preparing query: ' . $conn->error);
        }

        // Bind parameters and execute the query
        $stmt->bind_param("sss", $full_name, $email, $hashed_password); // 'sss' means 3 strings

        if ($stmt->execute()) {
            echo "Signup successful! Data stored in the database.";
        } else {
            echo "Error executing query: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Please fill all the fields.";
    }
}

// Close the database connection
$conn->close();
?>