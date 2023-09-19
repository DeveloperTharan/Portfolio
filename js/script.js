//Typeeffec
function typingEffext(){
    const text = 'I am Dharanitharan.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 150;

    typeText(text, typingElement, typingDelay);
}
function typeText(text, typingElement, typingDelay){
    for(let i=0; i<=text.length-1; i++){
        setTimeout (() => {
            typingElement.textContent += text.charAt(i);
        },typingDelay * i);
    }
}
document.addEventListener('DOMContentLoaded',typingEffext);


