const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    // تسجيل دخول ناجح
    localStorage.setItem("loggedInUser", username);  // ممكن نستخدمها بعدين لعرض اسم المستخدم
    window.location.href = "recipes.html"; // التوجيه للصفحة الرئيسية للوصفات
  } else {
    document.getElementById("error").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
});
