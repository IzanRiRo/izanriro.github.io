function generateStaticExercise() {
    const exerciseContainer = document.getElementById("exercise-container");
    exerciseContainer.innerHTML = ""; // Limpiar ejercicios anteriores

    const pastVerbs = ["was", "hit", "became", "began", "bent", "caught", "chose", "cost", "drew", "ate"];
    const sentences = [
        "He ___ very tired after the game.",
        "She accidentally ___ her knee against the chair.",
        "The caterpillar ___ a butterfly.",
        "I ___ working on the project early in the morning.",
        "He ___ the branch to see if it would snap.",
        "She ___ the bouquet of flowers he threw to her.",
        "They ___ the best seats in the theater.",
        "The jacket ___ more than I expected.",
        "He ___ a picture of the sunset.",
        "We ___ pizza for dinner."
    ];

    const exercise = document.createElement("div");
    exercise.className = "exercise";
    exercise.innerHTML = `
        <h2>Exercise 3: Complete the sentences with past verbs</h2>
        <p>Lista de verbos en pasado:</p>
        <ul>${pastVerbs.map(verb => `<li>${verb}</li>`).join("")}</ul>
    `;

    sentences.forEach((sentence, index) => {
        const selectOptions = pastVerbs.map(verb => `<option value="${verb}">${verb}</option>`).join("");
        const sentenceHtml = `
            <p>${index + 1}. ${sentence.replace(
                "___",
                `<select id="ex3-${index}">
                    <option value="">Selecciona</option>
                    ${selectOptions}
                </select>`
            )}
            <span id="ex3-feedback-${index}" class="feedback"></span></p>
        `;
        exercise.innerHTML += sentenceHtml;
    });

    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Static Exercise";
    checkButton.onclick = () => checkStaticExercise(pastVerbs);
    exercise.appendChild(checkButton);

    exerciseContainer.appendChild(exercise);
}

function checkStaticExercise(pastVerbs) {
    const correctAnswers = ["was", "bent", "became", "began", "bent", "caught", "chose", "cost", "drew", "ate"];
    let correct = 0;

    correctAnswers.forEach((answer, index) => {
        const userAnswer = document.getElementById(`ex3-${index}`).value.trim().toLowerCase();
        const feedback = document.getElementById(`ex3-feedback-${index}`);
        if (userAnswer === answer) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback correct";
            correct++;
        } else {
            feedback.textContent = `Incorrect. The correct answer is '${answer}'.`;
            feedback.className = "feedback incorrect";
        }
    });

    alert(`You got ${correctAnswers.length} correct.`);
}
