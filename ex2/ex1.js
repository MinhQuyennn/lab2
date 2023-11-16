let loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let username = document.getElementById("username");
            let password = document.getElementById("password");
            let birthYear = document.getElementById("birthday"); 
            if (username.value == "" || password.value == "" || birthYear.value == "") {
                alert("Ensure you input a value in all fields!");
            } else {
                var currentYear = new Date().getFullYear();
                var age = currentYear - new Date(birthYear.value).getFullYear(); 
                alert("This form has been successfully submitted and you are " + age + " years old!");
                console.log(
                    `This form has a username of ${username.value} and password of ${password.value}`
                );

                username.value = "";
                password.value = "";
                birthYear.value = "";
            }
        });