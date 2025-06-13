document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.ariaValueMax.trim();

        if(taskText  !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = ""
        }
    })
})

const form =
document.getElementById("registration-form");
form.addEventListener('submit', function (event) {
    event.preventDefault();

const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    if (usernameInput.value.length <3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
    } else {
            usernameError.textContent = "";}

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    } else {emailError.textContent = "";}

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length <8) {
        passwordError.textContent = "Password must at least be 8 characters long.";
    }   else {
        passwordInput.textContent = "";
    }
    form.submit();
    })

const feedbackDiv = 
    document.getElementById("form-feedback");

feedbackDiv.style.display = "block";
if (isValid); {
    feedbackDiv.textContent = "Registration successful!";
feedbackDiv.style.color = "#28a745";
}
else {feedbackDiv.innerHTML = messages.join("<br>");
}

