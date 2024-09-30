document.addEventListener("DOMContentLoaded", () => {
  const dataUser = [
    {
      id: 1,
      name: "demo",
      password: "123456",
    },
    {
      id: 2,
      name: "JaneDoe",
      password: "password456",
    }
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
      const userInfo = {
        username: usernameValue,
        password: passwordValue,
      }
      localStorage.setItem("rememberedUser", JSON.stringify(userInfo))
    } else {
      localStorage.removeItem("rememberedUser");
    }
  }

  document.getElementById("loginForm").addEventListener("submit", UserLogin);
});

document.addEventListener("DOMContentLoaded", () => {
  let rememberedUser = localStorage.getItem("rememberedUser");

  if (rememberedUser) {
    const userInfo = JSON.parse(rememberedUser);
    document.getElementById("username").value = userInfo.username;
    document.getElementById("password").value = userInfo.password;
    document.getElementById("remember-me").checked = true;
  }
});
