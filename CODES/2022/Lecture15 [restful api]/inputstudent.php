<!DOCTYPE html>
<html>
<head>
    <title>Input Data</title>
    <!-- Tambahkan link CSS Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h2 class="mt-3">Input Data Mahasiswa Baru</h2>
        <form method="POST" action="inputstudent.php">
            <table class="table table-bordered mt-3">
                <tbody>
                    <tr>
                        <td><label for="reg_number">Nomor Registrasi:</label></td>
                        <td><input type="text" id="reg_number" name="reg_number" class="form-control" required></td>
                    </tr>
                    <tr>
                        <td><label for="nim_number">NIM:</label></td>
                        <td><input type="text" id="nim_number" name="nim_number" class="form-control" required></td>
                    </tr>
                    <tr>
                        <td><label for="email">Email:</label></td>
                        <td><input type="email" id="email" name="email" class="form-control" required></td>
                    </tr>
                    <tr>
                        <td><label for="fullname">Nama Lengkap:</label></td>
                        <td><input type="text" id="fullname" name="fullname" class="form-control" required></td>
                    </tr>
                    <tr>
                        <td><label for="password">Password:</label></td>
                        <td><input type="password" id="password" name="password" class="form-control" required></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" value="Submit" class="btn btn-primary mt-3">
        </form>
    </div>
    
    <!-- Tambahkan skrip JavaScript Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
