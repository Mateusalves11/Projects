function dogChange() {
    const pet = document.getElementById("select1");
    const elementW = document.getElementById("select2");
    const petvalue = pet.value;
    const porte = document.getElementById("porte");
    // var url_atual = window.location.href;

        if(petvalue == 'cachorro' || petvalue == 'gato'){
            elementW.classList.add("showModalPET");
        }
        else if(petvalue != 'cachorro' || petvalue != 'gato'){
            elementW.classList.remove("showModalPET");
        }
        // console.log(url_atual);
    }
function porteDog(){
    const pet = document.getElementById("select1");
    const petvalue = pet.value;
    const porte = document.getElementById("porte");
    const other = document.getElementById("outro");

    if(petvalue == 'cachorro'){
            porte.classList.add("showModalPET");
        }
    if(petvalue != 'cachorro'){
            porte.classList.remove("showModalPET");
        }
    
    if(petvalue == 'other'){
        other.classList.add("showModalPET");
        }
    if(petvalue != 'other'){
        other.classList.remove("showModalPET");
    }
}



function showModal(){
    const element = document.getElementById("modalPET");
    element.classList.toggle("showModalPET")
}

function urlModal(){
    const btnwpp = document.getElementById("wppBtnAll");
    const url_atual = window.location.href;
    const modal = document.getElementById("modalPET");

    if(url_atual == 'https://petmastershop.com.br/index.php' || url_atual == 'https://petmastershop.com.br/index.php?categoryID=417' || url_atual == 'https://petmastershop.com.br/' || url_atual == 'http://127.0.0.1:5500/')
    {  
        modal.classList.add("showModalPET");
    }

    if(url_atual == 'https://petmastershop.com.br/index.php')
    {
        btnwpp.hidden = false
    }
    if(url_atual == 'https://petmastershop.com.br/index.php?categoryID=417' )
    {
        btnwpp.hidden = false
    }
    if(url_atual == 'https://petmastershop.com.br/' )
    {
        btnwpp.hidden = false
    } if(url_atual == 'http://127.0.0.1:5500/' )
    {
        btnwpp.hidden = false
    }
    
}

    



function planes(){
    const pet = document.getElementById("select1");
    const petvalue = pet.value;
    const cards = document.getElementById("cardsWrapID");
    const type = document.getElementById("typeService");
    const typevalue = type.value;
    const plano = document.getElementById("planoDiv");


    if(typevalue == 'banho' || typevalue == 'Banho e Tosa'){
            plano.classList.add("showModalPET");
            cards.classList.add("showModalPET");
        }
    if(typevalue != 'banho' && typevalue != 'Banho e Tosa'){
            plano.classList.remove("showModalPET");
            cards.classList.remove("showModalPET");
        }
    if(petvalue == 'other' || petvalue == ' '){
        plano.classList.remove("showModalPET");
        cards.classList.remove("showModalPET");
    }    
    }



function grayScaleCards(){
    const inputEconomy = document.getElementById("economyInputPET");
    const inputPremium = document.getElementById("premiumInputPET");
    const inputSuperP = document.getElementById("SuperPInputPET");
    const pet = document.getElementById("select1");
    const petvalue = pet.value;

    if(inputEconomy.checked){
        inputPremium.checked = false;
        inputSuperP.checked = false;
    }
    if(inputPremium.checked){
        inputEconomy.checked = false;
        inputSuperP.checked = false;
    }
    if(inputSuperP.checked){
        inputEconomy.checked = false;
        inputPremium.checked = false;
    }
    // CARDS GRAYSCALE
    const cardEconomy = document.getElementById("cardEconomy");
    const cardPremium = document.getElementById("CardPmium");
    const cardSuperP = document.getElementById("CardSPmium");
    // checked
    if(inputEconomy.checked){
        cardEconomy.style.filter = "grayscale(0%)";
        cardPremium.style.filter = "grayscale(100%)";
        cardSuperP.style.filter = "grayscale(100%)";
    }
    if(inputPremium.checked){
        cardEconomy.style.filter = "grayscale(100%)";
        cardPremium.style.filter = "grayscale(0%)";
        cardSuperP.style.filter = "grayscale(100%)";
    }
    if(inputSuperP.checked){
        cardEconomy.style.filter = "grayscale(100%)";
        cardPremium.style.filter = "grayscale(100%)";
        cardSuperP.style.filter = "grayscale(0%)";
    }
    if(!inputEconomy.checked && !inputPremium.checked && !inputSuperP.checked){
        cardEconomy.style.filter = "grayscale(0%)";
        cardPremium.style.filter = "grayscale(0%)";
        cardSuperP.style.filter = "grayscale(0%)";
    }
    if(petvalue == 'gato'){
        inputEconomy.disabled = true;
        cardEconomy.style.filter = "grayscale(100%)";
    }
    if(petvalue != 'gato'){
        inputEconomy.disabled = false;
        // cardEconomy.style.filter = "grayscale(0%)";
    }

    
}

function enviarMsgwpp(){
    const inputEconomy = document.getElementById("economyInputPET");
    const inputPremium = document.getElementById("premiumInputPET");
    const inputSuperP = document.getElementById("SuperPInputPET");
    let inputValue = '';

    if(inputEconomy.checked){
        inputValue = inputEconomy.value;
    }
    if(inputPremium.checked){
        inputValue = inputPremium.value;
    }
    if(inputSuperP.checked){
        inputValue = inputSuperP.value;
    }

    const pet = document.getElementById("select1");
    const petvalue = pet.value;
        if(petvalue != 'other'){
            var msg = `Olá, gostaria de um orçamento! ${document.getElementById("typeService").value} para um ${document.getElementById("select1").value} ${document.getElementById("TypePorte").value}, serviço: ${inputValue}`;
            var url = "https://api.whatsapp.com/send?phone=554299566704&text=" + msg;
            window.open(url);
    }
    if(petvalue == 'other'){
        var msg = `Aqui vai minhas especificações do meu pet: ${document.getElementById('otherID').value}`
        var url = "https://api.whatsapp.com/send?phone=554299566704&text=" + msg;
            window.open(url);
    }

    
  }

  function catdisabled(){
    const cardEconomy = document.getElementById("cardEconomy");
    const inputEconomy = document.getElementById("economyInputPET");
    const pet = document.getElementById("select1");
    const petvalue = pet.value;

    if(petvalue == 'gato'){
        inputEconomy.disabled = true;
        cardEconomy.style.filter = "grayscale(100%)";
    }
    // if(petvalue != 'gato'){
    //     inputEconomy.checked = true;
    // }
}
