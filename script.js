const buttonVoltar = document.getElementById("button-voltar")

function irHome(){
    window.location.href = 'index.html';
}
function irLogin(){
    window.location.href = 'login.html';
}
function cadastrar(){
    const user = document.getElementById("input-text").value;   
    const pass = document.getElementById("input-password").value;
    const email = document.getElementById("input-email").value;
    const number = document.getElementById("input-number").value;
    const apelido = document.getElementById("apelido").value;

    if(user && pass){
        const usuario = {
            nome: user,
            senha: pass,
            email: email,
            numero: number,
            apelido: apelido
        };

        localStorage.setItem(user, JSON.stringify(usuario));

        alert("Usuário Cadastrado com Sucesso!");
        irLogin()
        console.log(usuario)
    }
    else{
        alert("Erro!")
    }
}
function logar(){
    const user = document.getElementById("input-text").value;
    const pass = document.getElementById("input-password").value;

    const dadosRecuperados = localStorage.getItem(user)
    if (dadosRecuperados) {
        
        const usuarioValido = JSON.parse(dadosRecuperados);

        if (usuarioValido.senha === pass) {
            alert("Login realizado! Bem-vindo, " + user);
            localStorage.setItem('usuarioLogado', user); 
            irHome()
            
        } else {
            alert("Senha incorreta!");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}

function carregarDados() {
    console.log("Tentando carregar dados...");

    const logado = localStorage.getItem('usuarioLogado');
    console.log("Usuário logado encontrado:", logado);

    if (!logado) {
        console.log("Ninguém logou ainda.");
        return;
    }

    const dadosRecuperados = localStorage.getItem(logado);
    
    if (dadosRecuperados) {
        const usuario = JSON.parse(dadosRecuperados);
        console.log("Dados do usuário:", usuario);

        
        const elNome = document.getElementById("infoNome");
        const elEmail = document.getElementById("infoEmail");
        const elSenha = document.getElementById("infoSenha");
        const elApelido = document.getElementById("infoApelido");

        
        if (elNome && elEmail && elSenha && elApelido) {
            elNome.innerText = usuario.nome;
            elEmail.innerText = usuario.email;
            elSenha.innerText = usuario.senha;
            elApelido.innerText = usuario.apelido;
            console.log("HTML atualizado com sucesso!");
            
        } else {
            console.log("ERRO: IDs infoNome, infoEmail ou infoSenha não encontrados no HTML.");
        }
    } else {
        console.log("Erro: Objeto do usuário não existe no localStorage.");
    }

}
function sairDaConta() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}


window.addEventListener('load', carregarDados);