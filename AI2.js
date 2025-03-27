document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const chatId = urlParams.get("chatId");

    const chatDetailsContainer = document.getElementById("chatDetailsContainer");

    // Mock data for chat details
    const chatData = {
        chat1: [
            { sender: "user", message: "What are my rights if a product is defective?" },
            { sender: "bot", message: "You have the right to request a repair, replacement, or refund." }
        ],
        chat2: [
            { sender: "user", message: "Can I return an online purchase after 30 days?" },
            { sender: "bot", message: "It depends on the store's return policy. Check their terms and conditions." }
        ]
    };

    // Load chat details based on chatId
    if (chatData[chatId]) {
        chatData[chatId].forEach(chat => {
            const chatMessage = document.createElement("div");
            chatMessage.className = `chat ${chat.sender}`;
            chatMessage.innerHTML = `<p>${chat.message}</p>`;
            chatDetailsContainer.appendChild(chatMessage);
        });
    } else {
        chatDetailsContainer.innerHTML = "<p>No chat details available.</p>";
    }
});

// Function to go back to the main chat page
function goBackToChat() {
    window.location.href = "index.html";
}