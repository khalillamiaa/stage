const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotText = document.getElementById('chatbot-text');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotToggle.style.display = 'none';
});
chatbotClose.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotToggle.style.display = 'flex';
});

function sendMessage() {
    const message = chatbotText.value.trim().toLowerCase();
    if (message === '') return;

    const userMessage = document.createElement('p');
    userMessage.innerHTML = `<strong>Vous :</strong> ${message}`;
    chatbotMessages.appendChild(userMessage);

    let botResponse = '';
    if (message.includes('santé') || message.includes('malade') || message.includes('médecin')) {
        botResponse = 'Pour la santé, consulte les liens sur <a href="services.html#sante">la page Services</a> ou contacte-nous via le <a href="formulaire.html">formulaire</a>.';
    } else if (message.includes('logement') || message.includes('appartement') || message.includes('résidence')) {
        botResponse = 'Pour le logement, regarde les infos sur <a href="services.html#logement">la page Services</a>.';
    } else if (message.includes('administration') || message.includes('visa') || message.includes('titre de séjour')) {
        botResponse = 'Pour l’administration, consulte <a href="services.html#administration">la section Administration</a>.';
    } else if (message.includes('finance') || message.includes('transport') || message.includes('bourse') || message.includes('navigo')) {
        botResponse = 'Pour les finances et transports, voir <a href="services.html#finance">cette section</a>.';
    } else if (message.includes('formation') || message.includes('cours')) {
        botResponse = 'Pour les formations, visite <a href="formations.html">la page Formations</a>.';
    } else {
        botResponse = 'Je n’ai pas compris. Pose-moi une question sur la santé, le logement, l’administration, les finances/transports ou les formations. Sinon, utilise le <a href="formulaire.html">formulaire</a>.';
    }

    const botMessage = document.createElement('p');
    botMessage.innerHTML = `<strong>Assistant EPSI :</strong> ${botResponse}`;
    chatbotMessages.appendChild(botMessage);

    chatbotText.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatbotText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});