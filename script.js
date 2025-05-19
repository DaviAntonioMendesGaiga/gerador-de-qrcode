const container = document.querySelector(".container");
const textInput = document.querySelector(".input-div input");
const submitInput = document.querySelector(".forms .btn");
const qrcodeImg = document.querySelector(".qrcode-div img");
const qrcodeDiv = document.querySelector(".qrcode-div");

function qrcodeGenerator(event) {
    event.preventDefault();

    const qrcodeContent = textInput.value.trim();

    if (!qrcodeContent) {
        alert("Digite algo para gerar o QR Code.");
        return;
    }

    submitInput.value = "Gerando...";

    // Requisição na API
    qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrcodeContent)}`;

   
    qrcodeDiv.style.display = "flex";

    // Efeito de atraso na aplicação do efeito de transição na geração do QRCode
    setTimeout(() => {
        qrcodeDiv.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        submitInput.value = "Gerar";
    }, 1000);
}

// adicionando Evento
document.querySelector(".forms").addEventListener("submit", qrcodeGenerator);


