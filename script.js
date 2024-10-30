document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const position = document.getElementById("position");
    const phone = document.getElementById("phone");

    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(error => error.style.display = "none");

    let valid = true;
    if (name.value.trim() === "") {
        errorMessages[0].textContent = "Nama harus diisi.";
        errorMessages[0].style.display = "block";
        valid = false;
    }
    if (email.value.trim() === "") {
        errorMessages[1].textContent = "Email harus diisi.";
        errorMessages[1].style.display = "block";
        valid = false;
    }
    if (position.value.trim() === "") {
        errorMessages[2].textContent = "Jabatan harus diisi.";
        errorMessages[2].style.display = "block";
        valid = false;
    }
    if (phone.value.trim() === "") {
        errorMessages[3].textContent = "Nomor telepon harus diisi.";
        errorMessages[3].style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Data pegawai berhasil dikirim!");
    } else {
        alert("Harap di isi semua !"); 
    }
});
