// Generar ejercicios con frases
function generatePhrasalExercises() {
    const exerciseContainer = document.getElementById("exercise-container");
    exerciseContainer.innerHTML = ""; // Limpiar ejercicios anteriores

    // Barajar y seleccionar 10 frases aleatorias
    const shuffledPhrases = phrases.sort(() => Math.random() - 0.5).slice(0, 10);

    shuffledPhrases.forEach((phrase, index) => {
        const verbData = verbs.find(verb => verb.base === phrase.verb);
        const translation = verbData ? ` (${verbData.translation})` : "";

        const exercise = document.createElement("div");
        exercise.className = "exercise";
        exercise.innerHTML = `
            <p>${index + 1}. ${phrase.text.replace("___", `<input id="phrase-exercise-${index}" type="text" placeholder="Answer here">`)}${translation} 
            <span id="phrase-feedback-${index}" class="feedback"></span></p>
        `;
        exerciseContainer.appendChild(exercise);
    });

    // Botón para verificar respuestas
    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Phrase Exercises";
    checkButton.onclick = () => checkPhraseAnswers(shuffledPhrases);
    exerciseContainer.appendChild(checkButton);
}

// Verificar respuestas de frases
function checkPhraseAnswers(shuffledPhrases) {
    let correct = 0;
    shuffledPhrases.forEach((phrase, index) => {
        const userAnswer = document.getElementById(`phrase-exercise-${index}`).value.trim().toLowerCase();
        const feedback = document.getElementById(`phrase-feedback-${index}`);
        if (userAnswer === phrase.gap.toLowerCase()) {
            feedback.textContent = "Correct!";
            feedback.className = "feedback correct";
            correct++;
        } else {
            feedback.textContent = `Incorrect. The correct answer is '${phrase.gap}'.`;
            feedback.className = "feedback incorrect";
        }
    });
    alert(`You got ${correct}/${shuffledPhrases.length} correct.`);
}
