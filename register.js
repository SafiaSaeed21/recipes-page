const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();

    // تأكد من عدم ترك الحقول فارغة
    if (!username || !password) {
        document.getElementById("success").textContent = "الرجاء إدخال اسم مستخدم وكلمة مرور";
        return;
    }

    const newUser = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    document.getElementById("success").textContent = "تم التسجيل! سجل دخول الآن";
});
