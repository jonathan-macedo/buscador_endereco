const botao_pesquisa = document.querySelector("button");

botao_pesquisa.addEventListener("click", main);

function limpar_input(input) {
  input.value = "";
}

async function tratamento_api(cep) {
  await fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => {
      preecher_campos(data);
    })
    .catch((err) => {
      console.log(err);
      limpar_input(cep);
    });
}

function preecher_campos(conteudo) {
  document.getElementById("localidade").value = conteudo.logradouro;
  document.getElementById("logradouro").value = conteudo.logradouro;
  document.getElementById("bairro").value = conteudo.logradouro;
  document.getElementById("complemento").value = conteudo.bairro;
  document.getElementById("ibge").value = conteudo.localidade;
  document.getElementById("uf").value = conteudo.uf;
}

function main() {
  tratamento_api(document.getElementById("cep").value);
}
