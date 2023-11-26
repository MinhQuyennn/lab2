    document.getElementById('hover-link').addEventListener('mouseover', function() {
        // Get the text content of the paragraph
        var text = document.getElementById('highlight-text').innerText;

        // Split the text into words
        var words = text.split(' ');

        // Create a new HTML content with bold tags around each word
        var highlightedText = words.map(function(word) {
            return '<span class="highlight">' + word + '</span>';
        }).join(' ');
        // Set the new HTML content back to the paragraph
        document.getElementById('highlight-text').innerHTML = highlightedText;
    });

    document.getElementById('hover-link').addEventListener('mouseout', function() {
        // Reset the HTML content to the original text when the mouse is not over the link
        document.getElementById('highlight-text').innerHTML = 'This is a sample text. When you hover over the link above, the bold words in this paragraph will be highlighted.';
    });

    // Form submission event listener
    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(e) {
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
