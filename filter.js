// Filter Products
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const productItems = document.querySelectorAll('.product-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      this.classList.add('active');

      // Get the filter value
      const filterValue = this.getAttribute('data-filter');

      // Filter products
      productItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block'; // Show matching products
        } else {
          item.style.display = 'none'; // Hide non-matching products
        }
      });
    });
  });
});


// Example: Dynamically update options
document.addEventListener('DOMContentLoaded', function () {
  const productItems = document.querySelectorAll('.product-item');

  productItems.forEach(item => {
    const optionsOverlay = item.querySelector('.options-overlay');

    // Example: Add dynamic content to the options overlay
    const productName = item.querySelector('h3').textContent;
    optionsOverlay.innerHTML = `
      <h4>Opções para ${productName}</h4>
      <ul>
        <li>Cor: Preta</li>
        <li>Tamanho: Grande</li>
        <li>Material: Aço</li>
      </ul>
    `;
  });
});


// Center product on hover
document.addEventListener('DOMContentLoaded', function () {
  const productItems = document.querySelectorAll('.single-product');

  productItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      // Calculate the center position
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const itemRect = item.getBoundingClientRect();

      const offsetX = (viewportWidth - itemRect.width) / 2 - itemRect.left;
      const offsetY = (viewportHeight - itemRect.height) / 2 - itemRect.top;

      // Move the product to the center
      item.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
    });

    item.addEventListener('mouseleave', function () {
      // Reset the position
      item.style.transform = 'translate(0, 0) scale(1)';
    });
  });
});


// Adjust options overlay based on product position
document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.single-product');

  products.forEach(product => {
    const optionsOverlay = product.querySelector('.options-overlay');

    product.addEventListener('mouseenter', function () {
      const rect = product.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // Check if the product is on the right side of the screen
      if (rect.right + optionsOverlay.offsetWidth > windowWidth) {
        optionsOverlay.classList.add('options-overlay-left'); // Show on the left
        optionsOverlay.classList.remove('options-overlay-right');
      } else {
        optionsOverlay.classList.add('options-overlay-right'); // Show on the right
        optionsOverlay.classList.remove('options-overlay-left');
      }

      // Show the options overlay
      optionsOverlay.style.display = 'block';
    });

    product.addEventListener('mouseleave', function () {
      // Hide the options overlay when not hovering
      optionsOverlay.style.display = 'none';
    });
  });
});
