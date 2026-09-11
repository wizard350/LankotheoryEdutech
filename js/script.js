document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // REGISTER
    // =========================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim().toLowerCase();
            const phone = document.getElementById("phone").value.trim();
            const program = document.getElementById("program").value;
            const subjects = document.getElementById("subjects").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const terms = document.getElementById("terms").checked;

            const learningModeElement =
                document.querySelector('input[name="learningMode"]:checked');

            const learningMode =
                learningModeElement ? learningModeElement.value : "";


            // Check required fields

            if (!fullName || !email || !phone || !program || !password) {
                alert("Please fill in all required fields.");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            if (!terms) {
                alert("Please accept the Terms & Conditions.");
                return;
            }


            // Get existing users

            let users =
                JSON.parse(localStorage.getItem("lankotheoryUsers")) || [];


            // Check if email already exists

            const alreadyExists = users.some(
                user => user.email === email
            );

            if (alreadyExists) {

                alert("This email is already registered.");

                return;
            }


            // Create student

            const student = {

                id: Date.now(),

                fullName: fullName,

                email: email,

                phone: phone,

                program: program,

                learningMode: learningMode,

                subjects: subjects,

                password: password

            };


            // Save student

            users.push(student);

            localStorage.setItem(
                "lankotheoryUsers",
                JSON.stringify(users)
            );


            // Save current student

            localStorage.setItem(
                "lankotheoryCurrentUser",
                JSON.stringify(student)
            );


            // Mark as logged in

            localStorage.setItem(
                "lankotheoryLoggedIn",
                "true"
            );


            alert("Account created successfully!");

            window.location.href = "dashboard.html";

        });

    }



    // =========================
    // LOGIN
    // =========================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            if (!email || !password) {

                alert("Please enter your email and password.");

                return;
            }


            const users =
                JSON.parse(
                    localStorage.getItem("lankotheoryUsers")
                ) || [];


            const student =
                users.find(user =>
                    user.email === email &&
                    user.password === password
                );


            if (!student) {

                alert("Incorrect email or password.");

                return;
            }


            // Save current student

            localStorage.setItem(
                "lankotheoryCurrentUser",
                JSON.stringify(student)
            );


            localStorage.setItem(
                "lankotheoryLoggedIn",
                "true"
            );


            alert("Login successful!");

            window.location.href = "dashboard.html";

        });

    }



    // =========================
    // PASSWORD SHOW / HIDE
    // =========================

    const passwordButtons =
        document.querySelectorAll(".password-toggle");


    passwordButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target =
                document.getElementById(
                    button.dataset.target
                );


            if (!target) return;


            if (target.type === "password") {

                target.type = "text";

                button.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                target.type = "password";

                button.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    });


    // ================= MOBILE NAVIGATION =================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

        // Change hamburger icon to X
        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    // Close menu when a navigation link is clicked
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
});
