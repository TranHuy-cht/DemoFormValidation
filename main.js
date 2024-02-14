document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fullName').addEventListener('blur', validateFullName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('password').addEventListener('blur', validatePassword);
    document.getElementById('confirmPassword').addEventListener('blur', validateConfirmPassword);

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if(validateForm()) {
            console.log('Đăng ký thành công');
            // Thực hiện các hành động sau khi form hợp lệ (ví dụ: gửi dữ liệu)
        }
    });
});

function validateForm() {
    return validateFullName() && validateEmail() && validatePassword() && validateConfirmPassword();
}

function validateFullName() {
    var fullName = document.getElementById('fullName');
    if(fullName.value.trim() === '') {
        showError(fullName, 'Vui lòng nhập họ và tên');
        return false;
    } else {
        showError(fullName, '');
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById('email');
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email.value)) {
        showError(email, 'Địa chỉ email không hợp lệ');
        return false;
    } else {
        showError(email, '');
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById('password');
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ và số
    if(!passwordRegex.test(password.value)) {
        showError(password, 'Mật khẩu phải dài ít nhất 8 ký tự và bao gồm chữ cái và số');
        return false;
    } else {
        showError(password, '');
        return true;
    }
}

function validateConfirmPassword() {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if(confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Mật khẩu xác nhận không khớp');
        return false;
    } else {
        showError(confirmPassword, '');
        return true;
    }
}

function showError(inputElement, message) {
    var container = inputElement.parentElement;
    var errorDisplay = container.querySelector('.error-message');
    errorDisplay.textContent = message;
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if(validateForm()) {
        console.log('Đăng ký thành công');

        // Chuyển hướng người dùng đến một trang web khác
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});

