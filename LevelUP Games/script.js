function verCatalogo() {
    alert("Redirecionando para o catálogo...");
}

function adicionarAoCarrinho(jogo) {
    alert(jogo + " foi adicionado ao carrinho!");
}

// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(jogo) {
    carrinho.push(jogo);
    atualizarCarrinho();
    alert(jogo + " foi adicionado ao carrinho!");
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    let listaCarrinho = document.getElementById("lista-carrinho");
    listaCarrinho.innerHTML = ""; // Limpa a lista antes de atualizar

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>O seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach((jogo, index) => {
            let item = document.createElement("li");
            item.textContent = jogo;
            listaCarrinho.appendChild(item);
        });
    }
}

// Função para esvaziar o carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

 // Referências aos elementos
 const modal = document.getElementById("pagamento-modal");
 const btnFinalizar = document.getElementById("finalizar-compra");
 const closeModal = document.querySelector(".close");
 const paymentOptions = document.querySelectorAll(".payment-option");

 // Formulários de pagamento
 const formCartao = document.getElementById("form-cartao");
 const referenciaForm = document.getElementById("referencia-form");
 const mbwayForm = document.getElementById("mbway-form");
 const paypalForm = document.getElementById("paypal-form");

 // Abrir modal ao clicar no botão
 btnFinalizar.addEventListener("click", function () {
     modal.style.display = "flex";
 });

 // Fechar modal ao clicar no X
 closeModal.addEventListener("click", function () {
     modal.style.display = "none";
 });

 // Fechar modal ao clicar fora do conteúdo
 window.onclick = function (event) {
     if (event.target === modal) {
         modal.style.display = "none";
     }
 };

 // Exibir o formulário correto quando uma opção de pagamento for escolhida
 paymentOptions.forEach(function (button) {
     button.addEventListener("click", function () {
         // Ocultar todos os formulários
         formCartao.style.display = "none";
         referenciaForm.style.display = "none";
         mbwayForm.style.display = "none";
         paypalForm.style.display = "none";

         // Mostrar o formulário correspondente
         const paymentType = button.getAttribute("data-payment");

         if (paymentType === "cartao") {
             formCartao.style.display = "block"; // Exibe formulário de cartão
         } else if (paymentType === "referencia") {
             referenciaForm.style.display = "block"; // Exibe formulário de referência Multibanco
         } else if (paymentType === "mbway") {
             mbwayForm.style.display = "block"; // Exibe formulário MBWAY
         } else if (paymentType === "paypal") {
             paypalForm.style.display = "block"; // Exibe formulário de PayPal
         }
     });
 });