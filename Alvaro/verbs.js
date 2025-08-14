// Generar ejercicios de verbos
function generateVerbExercises() {
    const exerciseContainer = document.getElementById("exercise-container");
    exerciseContainer.innerHTML = ""; // Limpiar ejercicios anteriores
    const shuffledVerbs = verbs.sort(() => Math.random() - 0.5).slice(0, 10); // Seleccionar 10 verbos al azar

    shuffledVerbs.forEach((verb, index) => {
        const exercise = document.createElement("div");
        exercise.className = "exercise";
        exercise.innerHTML = `
            <p>${index + 1}. Completa con el pasado del verbo <strong>${verb.base}</strong>: 
            <input id="verb-exercise-${index}" type="text" placeholder="Respuesta aquí">
            <span id="verb-feedback-${index}" class="feedback"></span></p>
        `;
        exerciseContainer.appendChild(exercise);
    });

    // Botón para verificar respuestas
    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Verb Exercises";
    checkButton.onclick = () => checkVerbAnswers(shuffledVerbs);
    exerciseContainer.appendChild(checkButton);
}

// Verificar respuestas de verbos
function checkVerbAnswers(verbs) {
    let correct = 0;
    verbs.forEach((verb, index) => {
        const userAnswer = document.getElementById(`verb-exercise-${index}`).value.trim().toLowerCase();
        const feedback = document.getElementById(`verb-feedback-${index}`);
        if (userAnswer === verb.past.toLowerCase()) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback correct";
            correct++;
        } else {
            feedback.textContent = `Incorrect. The correct answer is '${verb.past}'.`;
            feedback.className = "feedback incorrect";
        }
    });
    alert(`You got ${correct}/${verbs.length} correct.`);
}
