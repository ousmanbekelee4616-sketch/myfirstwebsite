const myInput = document.getElementById('nameInput');
const sendButton = document.getElementById('sendBtn');
sendButton.addEventListener('click', function(event) {
    const userName = myInput.value;              
    
    if (userName === "") {
        alert("እባክህ መጀመሪያ ስምህን ባዶው ሳጥን ውስጥ አስገባ! ✍️");
        // ሳጥኑ ባዶ ከሆነ ወደ ኢሜይል እንዳይልክ ያቆመዋል
        event.preventDefault(); 
    } else {
        alert("ሰላም " + userName + "! መረጃው ወደ ኢሜይል እየተላከ ነው... 🚀");
         }
});
