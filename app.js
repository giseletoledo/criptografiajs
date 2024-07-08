function checkInput() {
    const inputText = document.getElementById('inputText').value;
    const resultMessage = document.getElementById('resultMessage');
    const noMessageImage = document.getElementById('noMessageImage');
    const outputText = document.getElementById('outputText');

    if (inputText === '') {
        resultMessage.textContent = 'Nenhuma mensagem encontrada';
        noMessageImage.style.display = 'block';
        outputText.textContent = 'Digite um texto que você deseja criptografar ou descriptografar.';
        decryptBtn.disabled = true; 
    } else {
        resultMessage.textContent = '';
        noMessageImage.style.display = 'none';
    }
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const resultMessage = document.getElementById('resultMessage');
    const decryptBtn = document.getElementById('decryptBtn');

     // Verificar se contém apenas letras minúsculas sem acentos
     if (/^[a-z]*$/.test(inputText)) {
        const encryptedText = transformText(inputText, 'encrypt');
        outputText.textContent = encryptedText;
        decryptBtn.disabled = false;
        resultMessage.textContent = 'Texto criptografado com sucesso!';
    } else {
        resultMessage.textContent = 'Apenas letras minúsculas sem acentos são permitidas!';
        outputText.textContent = 'Texto descriptografado aparecerá aqui...';
    }
}

function decryptText() {
    const outputText = document.getElementById('outputText').textContent;
    const resultMessage = document.getElementById('resultMessage');

    if (outputText) {
        const decryptedText = transformText(outputText, 'decrypt');
        document.getElementById('outputText').textContent = decryptedText;
        resultMessage.textContent = 'Texto descriptografado com sucesso!';
    } else {
        resultMessage.textContent = 'Nenhuma mensagem encontrada';
    }
}

function copyText() {
    const outputText = document.getElementById('outputText').textContent;
    const resultMessage = document.getElementById('resultMessage');

    navigator.clipboard.writeText(outputText).then(() => {
        resultMessage.textContent = 'Texto copiado para a área de transferência';
    });
}

function transformText(text, mode) {
    text = text.toLowerCase();
    switch (mode) {
        case 'encrypt':
            return text.replace(/e|i|a|o|u/g, (match) => {
                switch (match) {
                    case 'e': return 'enter';
                    case 'i': return 'imes';
                    case 'a': return 'ai';
                    case 'o': return 'ober';
                    case 'u': return 'ufat';
                }
            });
        case 'decrypt':
            return text.replace(/enter|imes|ai|ober|ufat/g, (match) => {
                switch (match) {
                    case 'enter': return 'e';
                    case 'imes': return 'i';
                    case 'ai': return 'a';
                    case 'ober': return 'o';
                    case 'ufat': return 'u';
                }
            });
    }
}
