document.addEventListener('DOMContentLoaded', function () {
  const singleProductItems = document.querySelectorAll('.single-product');

  singleProductItems.forEach(item => {
    const optionsOverlay = item.querySelector('.options-overlay');

    item.addEventListener('mouseenter', function () {
      // Ajuste a sobreposição de opções com base na posição do produto
      const rect = item.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (rect.right + optionsOverlay.offsetWidth > windowWidth) {
        optionsOverlay.classList.add('options-overlay-left');
        optionsOverlay.classList.remove('options-overlay-right');
      } else {
        optionsOverlay.classList.add('options-overlay-right');
        optionsOverlay.classList.remove('options-overlay-left');
      }

      // Exibir a sobreposição de opções
      optionsOverlay.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
      // Ocultar a sobreposição de opções ao não passar o mouse
      optionsOverlay.style.display = 'none';
    });
  });
});
