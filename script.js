const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light";
    } else {
        themeButton.textContent = "🌙 Dark";
    }

});

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Đăng ký tham dự thành công!");

});

registerForm.addEventListener("reset", function () {

    const confirmReset = confirm(
        "Bạn có chắc muốn xóa thông tin đã nhập?"
    );

    if (!confirmReset) {
        event.preventDefault();
    }

});