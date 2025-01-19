//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/*
Amigo Secreto
Neste desafio, você desenvolverá uma aplicação que permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar".

Os nomes inseridos serão exibidos em uma lista visível na página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

Funcionalidades:
Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
*/

let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nome = inputAmigo.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  amigos.push(nome);
  inputAmigo.value = "";

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
