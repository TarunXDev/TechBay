document.addEventListener("DOMContentLoaded", function() {
    const generateCardButton = document.getElementById("generatecard");
    const cardNumberInput = document.getElementById("cardnumber");
    const expirationInput = document.getElementById("expirationdate");
    const securityCodeInput = document.getElementById("securitycode");
    const cardNumberSvg = document.getElementById("svgnumber");
    const cardNameSvg = document.getElementById("svgname");
    const cardExpireSvg = document.getElementById("svgexpire");
    const cardSecuritySvg = document.getElementById("svgsecurity");
    
    
    cardNumberInput.addEventListener('input', function() {
        let value = cardNumberInput.value.replace(/\D/g, ''); 
        if (value.length > 16) {
            value = value.substring(0, 16); 
        }
        let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); 
        cardNumberInput.value = formattedValue;
        cardNumberSvg.textContent = formattedValue || "0123 4567 8910 1112"; 
    });

    
    document.getElementById("name").addEventListener('input', function() {
        cardNameSvg.textContent = document.getElementById("name").value.toUpperCase() || "JOHN DOE";
    });

   
    expirationInput.addEventListener('input', function() {
        let value = expirationInput.value.replace(/\D/g, ''); 
        if (value.length > 4) {
            value = value.substring(0, 4); 
        }
        let formattedValue = value.replace(/(\d{2})(?=\d)/g, '$1/'); 
        expirationInput.value = formattedValue;
        cardExpireSvg.textContent = formattedValue || "01/23"; 
    });

    
    securityCodeInput.addEventListener('input', function() {
        let value = securityCodeInput.value.replace(/\D/g, ''); 
        if (value.length > 3) {
            value = value.substring(0, 3); 
        }
        securityCodeInput.value = value;
        cardSecuritySvg.textContent = value || "985"; 
    });

    
    generateCardButton.addEventListener('click', function() {
        const randomCardNumber = generateRandomCardNumber();
        cardNumberInput.value = randomCardNumber;
        cardNumberSvg.textContent = formatCardNumber(randomCardNumber);
    });

   
    function generateRandomCardNumber() {
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += Math.floor(Math.random() * 10); 
        }
        return cardNumber;
    }

    
    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    }

    
    function validateForm() {
        const cardNumber = cardNumberInput.value.replace(/\D/g, ''); 
        const expiration = expirationInput.value.replace(/\D/g, ''); 
        const securityCode = securityCodeInput.value.replace(/\D/g, ''); 

        
        if (cardNumber.length !== 16) {
            alert('Please enter a valid 16-digit card number.');
            return false;
        }
        if (expiration.length !== 4 || !/^\d{2}\/\d{2}$/.test(expiration)) {
            alert('Please enter a valid expiration date (MM/YY).');
            return false;
        }
        if (securityCode.length !== 3) {
            alert('Please enter a valid 3-digit security code.');
            return false;
        }
        
        alert('Form submitted successfully!');
        return true;
    }

    // Optional: Submit form via JS (or you could use an actual form submission)
    document.querySelector(".form-container").addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });
});
