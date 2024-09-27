document.addEventListener("DOMContentLoaded", () => {
  const dataUser = [
    {
      id: 1,
      name: "JohnDoe",
      password: "password123",
    },
    {
      id: 2,
      name: "JaneDoe",
      password: "password456",
    },
    {
      id: 3,
      name: "haideptrai",
      password: "123456",
    },
  ];

  function UserLogin(event) {
    event.preventDefault();

    let usernameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;
    let rememberMeId = document.getElementById("remember-me").checked;
    let isLoginSuccess = false;

    dataUser.forEach((user) => {
      if (user.name === usernameValue && user.password === passwordValue) {
        isLoginSuccess = true;
      }
    });

    if (!isLoginSuccess) {
      alert("Invalid Username or Password");
    } else {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    }
    if (rememberMeId) {
      localStorage.setItem("rememberedUser", usernameValue);
      localStorage.setItem("rememberedPassword", passwordValue);
    } else {
      localStorage.removeItem("rememberedUser");
      localStorage.removeItem("rememberedPassword");
    }
  }
  document.getElementById("loginForm").addEventListener("submit", UserLogin);
});

document.addEventListener("DOMContentLoaded", () => {
  let rememberedUser = localStorage.getItem("rememberedUser");
  let rememberedPassword = localStorage.getItem("rememberedPassword");
  if (rememberedUser && rememberedPassword) {
    document.getElementById("username").value = rememberedUser;
    document.getElementById("password").value = rememberedPassword;
    document.getElementById("remember-me").checked = true;
  }
});
