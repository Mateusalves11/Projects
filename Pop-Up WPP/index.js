function dogChange() {
    const pet = document.getElementById("select1");
    const elementW = document.getElementById("select2");
    const petvalue = pet.value;
    const porte = document.getElementById("porte");

        if(petvalue == 'cachorro' || petvalue == 'gato'){
            elementW.classList.add("showModal");
        }
        else if(petvalue != 'cachorro' || petvalue != 'gato'){
            elementW.classList.remove("showModal");
        }
    }
function porteDog(){
    const pet = document.getElementById("select1");
    const petvalue = pet.value;
    const porte = document.getElementById("porte");
    const other = document.getElementById("outro");

    if(petvalue == 'cachorro'){
            porte.classList.add("showModal");
        }
    if(petvalue != 'cachorro'){
            porte.classList.remove("showModal");
        }
    
    if(petvalue == 'other'){
        other.classList.add("showModal");
        }
    if(petvalue != 'other'){
        other.classList.remove("showModal");
    }
}


function showModal(){
    var element = document.getElementById("modal");
    element.classList.toggle("showModal")
}

function enviarMsgwpp(){
    const pet = document.getElementById("select1");
    const petvalue = pet.value;
        if(petvalue != 'other'){
            var msg = `Olá, gostaria de um orçamento para o serviço de ${document.getElementById("typeService").value} para um ${document.getElementById("select1").value} ${document.getElementById("TypePorte").value}`;
            var url = "https://api.whatsapp.com/send?phone=554299566704&text=" + msg;
            window.open(url);
    }
    if(petvalue == 'other'){
        var msg = `Aqui vai minhas especificações do meu pet: ${document.getElementById('otherID').value}`
        var url = "https://api.whatsapp.com/send?phone=554299566704&text=" + msg;
            window.open(url);
    }

  }