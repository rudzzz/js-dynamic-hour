// funcção que executa a lógica da página
function carregar(){

    // pegando a tag <p> onde ficara a msg
    const msg = document.getElementById('msg');

    // pegando a imagem
    const img = document.getElementById('imagem');

    // pegando a data atual
    const data = new Date();

    // da data, pegando somente a hora atual
    const hora = data.getHours();
    
    // condição para aparecer a imagem dinamicamente conforme o horário 
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia! Hora certa: ${hora} horas`;
        img.src="manhã.jpg";
        document.body.style.background = "#cb7e48";
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Boa Tarde! Hora certa: ${hora} horas`;
        img.src="tarde.jpg";
        document.body.style.background = "#235472";
    }
    else{
        msg.innerHTML = `Boa Noite! Hora certa: ${hora} horas`;
        img.src="noite.jpg";
        document.body.style.background = "#0d1e2e";
    }
}