// Módulo para gerenciar cliques nos cartões de produtos
// e navegar para a página de detalhes

export function initProductCards() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', function() {
      const productKey = this.getAttribute('data-product');
      if (productKey) {
        // Navegar para a página de detalhes do produto
        window.location.href = `product-details.html?product=${productKey}`;
      }
    });

    // Adicionar estilo de cursor para indicar que é clicável
    card.style.position = 'relative';
  });
}
