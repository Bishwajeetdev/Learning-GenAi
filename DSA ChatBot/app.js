  // DOM MANIPULATION
  // Accessing HTML elements from JS

  const input = document.getElementById("input");
  const sendBtn = document.getElementById("sendBtn");
  const messages = document.getElementById("messages");


  sendBtn.addEventListener('click',sendMessage)


  function sendMessage(){
    const text =input.value;

    if(text==""){
        return;
    }

        const userMessage =document.createElement("div");


        userMessage.classList.add("message")
        userMessage.classList.add("user")

        userMessage.innerText=text;

        messages.appendChild(userMessage)

         const botReplies = [
      "Hello 👋",
      "How are you?",
      "Nice to meet you",
      "I am a chatbot",
      "Cool 😎"
    ];


    // Random reply
    const randomIndex = Math.floor(Math.random() * botReplies.length);

    const botText = botReplies[randomIndex];

      // Bot message div
    const botMessage = document.createElement("div");

    botMessage.classList.add("message");
    botMessage.classList.add("bot");

     botMessage.innerText = botText;

     messages.appendChild(botMessage);

     // Auto scroll
    messages.scrollTop = messages.scrollHeight;

    // Clear input
    input.value = " ";
  }