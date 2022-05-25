/*let email = document.querySelector('#email');
let labelEmail = document.querySelector('#label-email');
let validaEmail = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#label-senha');
let validaSenha = false

let confirmaSenha = document.querySelector('#repsenha');
let labelConfirmaSenha = document.querySelector('#label-repsenha');
let validaConfirmaSenha = false

let formulario = document.querySelector('#formulario');
let botaoCriarConta = document.querySelector('#criar-conta');

let regSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

email.addEventListener('keyup', verificarEmail)
senha.addEventListener('keyup', verificarSenha)
confirmaSenha.addEventListener('keyup', verificarConfirmaSenha)
botaoCriarConta.addEventListener('click', verificarDados)

function verificarEmail() {
    if( email.value.length < 10) {
        labelEmail.setAttribute('style', 'color: #ff0035');
        labelEmail.innerHTML = 'E-mail: *Insira no mínimo 10 caracteres';
        email.setAttribute('style', 'border-color: #ff0035;')
        validaEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: #72b01d');
        labelEmail.innerHTML = 'E-mail:';
        email.setAttribute('style', ' border-color: #72b01d;')
        validaEmail = true
    }
}

function verificarSenha() {
    let senhaValida = senha.value.match(regSenha);

    if( senha.value.length < 8) {
        labelSenha.setAttribute('style', 'color: #ff0035')
        labelSenha.innerHTML = 'Senha: * insira no mínimo 8 caracteres';
        senha.setAttribute('style', 'border-color: #ff0035;');
        validaSenha = false
    } else if (senhaValida === null) {
        labelSenha.innerHTML = 'Senha: *Deve conter uma letra maíuscula e caracteres especiais';
        validaSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: #72b01d');
        labelSenha.innerHTML = 'Senha: ';
        senha.setAttribute('style', 'border-color: #72b01d;')
        validaSenha = true;
    }
}

function verificarConfirmaSenha() {
    if( senha.value !== confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color: #ff0035');
        labelConfirmaSenha.innerHTML = 'Confirme a senha: *A senha digitada não corresponde';
        confirmaSenha.setAttribute('style', ' border-color: #ff0035;')
        validaConfirmaSenha = false
    } else {
        labelConfirmaSenha.setAttribute('style', 'color: #72b01d')
        labelConfirmaSenha.innerHTML = 'Confirme a senha';
        confirmaSenha.setAttribute('style', ' border-color: #72b01d;')
        validaConfirmaSenha = true
    }
}

function verificarDados() {
    if(email.value === '' || senha.value === '' || confirmaSenha === '') {
        alert('Algo deu errado! Por favor, verifique se você preencheu todos os campos')
    } else if (!validaEmail || !validaSenha || !validaConfirmaSenha) {
        alert('Campos incorretos! Por favor, verifique se você preencheu todos os campos corretamente')
    } else {
        alert ('Conta foi criada com sucesso')
       
        salvarNoLocalStorage(criarUsuario(email.value, senha.value, confirmaSenha.value))
        window.location.href = 'login.html'          
    }
}

function salvarNoLocalStorage(usuario) {
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
    db.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(db));
}

function criarUsuario(email, senha, confirmaSenha) {
    const usuario = {
        id: db.length + 1,
        login: email,
        senha: senha,
        confirmaSenha: confirmaSenha
    }
    return usuario
}*/

document.querySelector('#criar-conta').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    let repitaSenha = document.querySelector('#repsenha').value;

    salvar(email, senha, repitaSenha);
});


function salvar(e, s, r){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    let usuario = {
        id: db.length + 1,
        email: e,
        senha: s,
        repitaSenha: r
    }
    
    db.push(usuario);
    
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'login.html';    
}









