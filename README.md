# Signup
🎓 Student Login System
A simple, lightweight Student ID Login interface built with HTML, CSS, and Vanilla JavaScript. This project demonstrates basic authentication logic, form validation, and responsive UI design.

🚀 Features
Clean UI: Modern, centered login card with soft shadows and rounded corners.

Responsive Design: Works across different screen sizes.

Authentication Logic: Validates student credentials and provides instant feedback for errors.

Redirection: Successfully redirects users to a dashboard upon correct login.

🛠️ Tech Stack
HTML5: Structure of the login form.

CSS3: Custom styling and layout using Flexbox.

JavaScript: Client-side logic for credential verification.
├── index.html   # Main structure and styling
└── script.js    # Authentication logic
⚙️ How to Use
Clone the repository to your local machine.

Open index.html in any modern web browser.

Enter the default credentials to test the login.
🔑 Default CredentialsTo access the system, use the following hardcoded credentials found in script.js:Student ID: SDT001
📝 Code Snippet: Login Logic
The core logic resides in the login() function, which compares user input against predefined constants:
function login() {
  const id = document.getElementById("studentId").value;
  const pass = document.getElementById("password").value;

  if (id === "SDT001" && pass === "Pass123") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").textContent = "Invalid ID or password.";
  }
}
🛡️ Future Improvements
Integration with a Backend/Database (Node.js/MongoDB) for real user management.

Adding JWT (JSON Web Tokens) for secure session handling.

Improved security by removing hardcoded credentials from the frontend.

Created by Parmanand Kumar
