<?php
include 'db.php';

$name = $_POST['name'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Check if the username already exists
$check = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
if (mysqli_num_rows($check) > 0) {
    echo "Username already exists!";
    exit;
}

// Insert user
$sql = "INSERT INTO users (name, username, password) VALUES ('$name', '$username', '$password')";
if (mysqli_query($conn, $sql)) {
    header("Location: login.html");
} else {
    echo "Signup failed: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
