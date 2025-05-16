        const quizForm = document.getElementById('quiz-form');
        const resultsDiv = document.getElementById('results');
        const submitBtn = document.getElementById('submit-btn');

        const correctAnswers = {
            q1: 'b',
            q2: 'c',
            q3: 'b',
            q4: 'b',
            q5: 'c'
        };

        submitBtn.addEventListener('click', () => {
            let score = 0;
            let resultsHTML = '';

            for (let i = 1; i <= 5; i++) {
                const answer = document.querySelector(`input[name="q${i}"]:checked`);
                if (answer) {
                    if (answer.value === correctAnswers[`q${i}`]) {
                        score++;
                        resultsHTML += `<p class="correct">Question ${i}: Correct!</p>`;
                    } else {
                        resultsHTML += `<p class="incorrect">Question ${i}: Incorrect.</p>`;
                    }
                } else {
                    resultsHTML += `<p class="incorrect">Question ${i}: Not answered.</p>`;
                }
            }

            resultsHTML += `<p>Final Score: ${score}/5</p>`;
            resultsDiv.innerHTML = resultsHTML;
        });


        const signupForm = document.getElementById('signupForm');
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const sexInputs = document.querySelectorAll('input[name="sex"]');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const whySupportInput = document.getElementById('whySupport');
        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const sexError = document.getElementById('sexError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const profileContainer = document.getElementById('profileContainer');
        const firstNameDisplay = document.getElementById('firstNameDisplay');
        const lastNameDisplay = document.getElementById('lastNameDisplay');
        const emailDisplay = document.getElementById('emailDisplay');
        const sexDisplay = document.getElementById('sexDisplay');
        const whySupportDisplay = document.getElementById('whySupportDisplay');

        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let firstName = firstNameInput.value.trim();
            let lastName = lastNameInput.value.trim();
            let sex = document.querySelector('input[name="sex"]:checked');
            let email = emailInput.value.trim();
            let password = passwordInput.value.trim();
            let whySupport = whySupportInput.value.trim();

            let isValid = true;

            firstNameError.textContent = '';
            lastNameError.textContent = '';
            sexError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            whySupportError.textContent = '';

            if (!firstName) {
                firstNameError.textContent = 'required';
                isValid = false;
            }
            if (!lastName) {
                lastNameError.textContent = 'required';
                isValid = false;
            }
            if (!sex) {
                sexError.textContent = 'required';
                isValid = false;
            }
            if (!email) {
                emailError.textContent = 'required';
                isValid = false;
            }
            if (!password) {
                passwordError.textContent = 'required';
                isValid = false;
            }
            if (!whySupport) {
                whySupportError.textContent = 'required';
                isValid = false;
            }

            if (isValid) {
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                localStorage.setItem('sex', sex.value);
                localStorage.setItem('email', email);
                localStorage.setItem('whySupport', whySupport);

                signupForm.style.display = 'none';
                profileContainer.style.display = 'block';

                firstNameDisplay.textContent = firstName;
                lastNameDisplay.textContent = lastName;
                emailDisplay.textContent = email;
                sexDisplay.textContent = sex.value;
                whySupportDisplay.textContent = whySupport;
            }
        });


  