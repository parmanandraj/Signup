 function login() {
      const id = document.getElementById("studentId").value;
      const pass = document.getElementById("password").value;

      // Hardcoded user credentials
      const correctId = "SDT001";
      const correctPass = "Pass123";

      if (id === correctId && pass === correctPass) {
        alert("Login successful!");
        // Redirect or show dashboard
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error").textContent = "Invalid ID or password.";
      }
    }