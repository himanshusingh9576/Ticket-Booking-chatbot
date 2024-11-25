function handleSendMessage() {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
      fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: userInputValue })
      })
      .then(response => response.json())
      .then(data => {
        chatbotResponse.innerHTML = data.message;
        userInput.value = '';
      })
      .catch(error => console.error(error));
    }
  }
  
  // ...