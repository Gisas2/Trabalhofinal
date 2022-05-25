document.querySelector('#entrar').addEventListener('click', (e)=>{
    e.preventDefault();
    entrar()
})
function entrar(){
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    let listaUser = [];

    let usuarioValido = {
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'));

    listaUser.forEach(elemento => {
        if(email.value === elemento.email && senha.value === elemento.senha){
            usuarioValido = {
                id: elemento.id,
                email: elemento.email,
                senha: elemento.senha
            }
        }
    })

    if(email.value === usuarioValido.email && senha.value === usuarioValido.senha){
        alert('Login feito com sucesso')
        saveSession(usuarioValido.id);
        window.location.href ='home.html';
    }else{
        alert('Acesso negado')
    }
}

function saveSession(data){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));
}


