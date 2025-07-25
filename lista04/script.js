// Suaviza a rolagem ao clicar nos links do menu
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Botão para voltar ao topo da página
const botaoTopo = document.createElement("button");
botaoTopo.textContent = "↑ Topo";
botaoTopo.id = "botao-topo";
botaoTopo.style.display = "none";
document.body.appendChild(botaoTopo);

// Exibe o botão ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

// Rola para o topo ao clicar
botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Validação básica do formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Confirmação de envio simulada
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

  // Limpa o formulário após envio
  this.reset();
});

// Realce da seção visível no menu de navegação
const secoes = document.querySelectorAll("main section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let index = secoes.length;

  while (--index && window.scrollY + 80 < secoes[index].offsetTop) {}

  linksMenu.forEach((link) => link.classList.remove("ativo"));
  linksMenu[index].classList.add("ativo");
});
