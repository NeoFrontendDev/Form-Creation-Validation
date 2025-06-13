document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim(); 

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters long.";
            isValid = false;
            messages.push("Invalid username.");
        } else {
            usernameError.textContent = "";
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
            messages.push("Invalid email.");
        } else {
            emailError.textContent = "";
        }

        if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long.";
            isValid = false;
            messages.push("Password too short.");
        } else {
            passwordError.textContent = "";
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            form.submit();
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
