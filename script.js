document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const speechButton = document.getElementById('speech-btn');

    // Check if the browser supports the SpeechRecognition API
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(speechRecognition){
        inputField.textContent = "Sorry, your browser doesn't support speech recognition.";
        return;
    }

    
})