// Seleciona todos os artigos do blog
const artigos = document.querySelectorAll("article");

artigos.forEach(function (artigo) {
  const btnLike = artigo.querySelector(".btn-like");
  const btnDislike = artigo.querySelector(".btn-dislike");
  
  const spanLike = btnLike.querySelector("span");
  const spanDislike = btnDislike.querySelector("span");

  let curtiu = false;
  let descurtiu = false;

  // Lógica do Botão de Curtir
  btnLike.addEventListener("click", function () {
    if (curtiu) {
      // Se já curtiu, remove a curtida
      spanLike.textContent = Number(spanLike.textContent) - 1;
      curtiu = false;
      btnLike.classList.remove("ativo");
    } else {
      // Adiciona a curtida
      spanLike.textContent = Number(spanLike.textContent) + 1;
      curtiu = true;
      btnLike.classList.add("ativo");

      // Se o botão de descurtir estava ativo, cancela ele
      if (descurtiu) {
        spanDislike.textContent = Number(spanDislike.textContent) - 1;
        descurtiu = false;
        btnDislike.classList.remove("ativo");
      }
    }
  });

  // Lógica do Botão de Descurtir
  btnDislike.addEventListener("click", function () {
    if (descurtiu) {
      // Se já descurtiu, remove a descurtida
      spanDislike.textContent = Number(spanDislike.textContent) - 1;
      descurtiu = false;
      btnDislike.classList.remove("ativo");
    } else {
      // Adiciona a descurtida
      spanDislike.textContent = Number(spanDislike.textContent) + 1;
      descurtiu = true;
      btnDislike.classList.add("ativo");

      // Se o botão de curtir estava ativo, cancela ele
      if (curtiu) {
        spanLike.textContent = Number(spanLike.textContent) - 1;
        curtiu = false;
        btnLike.classList.remove("ativo");
      }
    }
  });
});

// Alternador do tema escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});