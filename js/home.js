const form = document.querySelector('#recados');
const divErro = document.querySelector("#msg-erro");
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;
let usuarioId = Number(sessionStorage.getItem('logado'));

const session = localStorage.getItem("session");

checkLogged();

function checkLogged (){
    if(session) {
        sessionStorage.setItem("log", session);
        usuarioId = session;
    }

    if (!usuarioId) {
        window.location.href = "home.html"
        return;
    }
} 

console.log(usuarioId);

const atualizarLocalStorage = (recados) => {
    localStorage.setItem('recados', JSON.stringify(recados));
};

const recuperarLocalStorage = () =>  {
const recados = JSON.parse(localStorage.getItem('recados') || '[]');
return recados
};

const salvandoRecado = (e) =>{
    e.preventDefault();
    console.log("passou pelo evento");
    divErro.innerHTML = "";
    const descricao = form.descricao.value;
    const detalhamento = form.detalhamento.value;
    const erros = [];

    if (!descricao || descricao.length < 2) {
        erros.push("<p>Descrição inválida</p>");
    }
    if (!detalhamento || detalhamento <= 0) {
        erros.push("<p>Detalhamento inválido</p>");
    }
    if (erros.length > 0) {
        divErro.innerHTML = erros.join(" ");
        return;
    }

    console.log(idx)

    if(idx == 'novo') {
    const recados = recuperarLocalStorage();
    console.log(recados);
        let idt = 0;
        for(const recado of recados){
            if(recado.usuarioId === usuarioId){
                idt = Number(recado.id);
            }
        }
    recados.push({id: idt+=1, descricao, detalhamento, usuarioId});
    atualizarLocalStorage(recados);
    preencherTabela();
    form.reset();
    console.log(idx, "teste")
    }else{
        let recado = {id:idx, descricao, detalhamento, usuarioId}

        editarRecado(idx, recado);
        preencherTabela();
        form.reset();
        idx = 'novo';
        console.log('editar', idx);
    }

};

const preencherTabela = () => {
    const recados = recuperarLocalStorage();
    tabela.innerHTML = '';
        for(const recado of recados){

            if(recado.usuarioId === usuarioId){
            tabela.innerHTML += `
        
            <tr>
                <th scope="row">${recado.id}</th>
                <td>${recado.descricao}</td>
                <td>${recado.detalhamento}</td>
                <td>
                    <button class="btn-editar" onclick="atualizarRecado(${recado.id})">Editar</button>
                    <button class="btn-apagar" onclick="removerRecado(${recado.id})">Apagar</button>
                </td>
            </tr>

        `;
            }
        }
};

const removerRecado = (id) => {
    const recados = recuperarLocalStorage();
    const indexRecado = recados.findIndex((recado) => recado.id === id);
    if(indexRecado < 0)
        return;     
    recados.splice(indexRecado, 1);
    atualizarLocalStorage(recados);
    alert('Recado removido');
    preencherTabela();
};

const editarRecado = (idx, recado) => {
    const recados = JSON.parse(localStorage.getItem("recados") || "[]");
    const indexRecado = recados.findIndex((recado) => recado.id === idx);
    recados[indexRecado] = recado;
    localStorage.setItem("recados", JSON.stringify(recados));
}

const atualizarRecado = (id) => {
    const recados = recuperarLocalStorage();
    const indexRecado = recados.findIndex((recado) => recado.id === id);
    form.descricao.value = recados[indexRecado].descricao;
    form.detalhamento.value = recados[indexRecado].detalhamento;
    idx = id;
    console.log(idx)
}

form === null || form === void 0 ? void 0 : form.addEventListener('submit', salvandoRecado);
document.addEventListener('DOMContentLoaded', preencherTabela);

