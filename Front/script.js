const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iusuario = document.querySelector(".usuario");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");

function cadastrar(){

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/jason',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                usuario: Iusuario.value,
                email:  Iemail.value,
                senha:  Isenha.value
            })
        })
    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})
    
};

function limpar(){
    
    Inome.value = "";
    Iusuario.value = "";
    Iemail.value = "";
    Isenha.value = "";
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    cadastrar();
    limpar();

});

