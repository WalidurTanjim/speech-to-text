document.addEventListener('DOMContentLoaded', () => {
    const textField = document.getElementById('text-field');
    const speechButton = document.getElementById('speech-btn');

    // Check if the browser supports the SpeechRecognition API
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!speechRecognition){
        textField.textContent = "Sorry, your browser doesn't support speech recognition.";
        return;
    }

    const recognition = new speechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    speechButton.addEventListener('click', () => {
        recognition.start();
    })

    recognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        resultDiv.textContent = transcript;
    }
})