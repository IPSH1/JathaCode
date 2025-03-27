function toggleChats() {
    var chatBox = document.getElementById("previousChats");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

function addChat() {
    var userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    var chatContainer = document.getElementById("chatContainer");

    // Add user message
    var userMessage = document.createElement("div");
    userMessage.className = "chat user";
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatContainer.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulate bot response
    setTimeout(function () {
        var botMessage = document.createElement("div");
        botMessage.className = "chat bot";
        botMessage.innerHTML = `<p>Thank you for your question. I will get back to you shortly.</p>`;
        chatContainer.appendChild(botMessage);

        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}