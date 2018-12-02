let campoEmail = document.getElementById("campo-email");
let btnEnviar = document.getElementById("btn-enviar");
btnEnviar.disabled = true;

campoEmail.addEventListener("input", function (event) {
  if (campoEmail.validity.typeMismatch) {
    campoEmail.setCustomValidity("favor preencher email");
  } else {
    campoEmail.setCustomValidity("");
  }
});

let campoCpf = document.getElementById("campo-cpf");

campoCpf.addEventListener("input", function(event){
  if (campoCpf.validity.patternMismatch) {
    campoCpf.setCustomValidity("favor preencher apenas com os números do CPF");
    btnEnviar.disabled = true;
  } else {
    campoCpf.setCustomValidity("");
    btnEnviar.disabled = false;
  }
})


btnEnviar.addEventListener("click", function(e) {
  e.preventDefault();

  if (verificaCPF(document.getElementById("campo-cpf").value)) {
    window.open("success.html", "_self","false");
  } else {
    alert("CPF inválido!");
    document.getElementById("campo-cpf").focus();
  }
})


