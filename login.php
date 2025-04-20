<?php
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);

if ($row = mysqli_fetch_assoc($result)) {
    if (password_verify($password, $row['password'])) {
        header("Location: Play.html");
        exit;
    } else {
        echo "<script>
            alert('Incorrect password!');
            window.location.href = 'login.html';
        </script>";
    }
} else {
    echo "<script>
        alert('User not found!');
        window.location.href = 'login.html';
    </script>";
}

mysqli_close($conn);
?>
