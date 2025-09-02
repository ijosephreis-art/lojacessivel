
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-filter]');
  const products = document.querySelectorAll('[data-category]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      products.forEach(product => {
        if (filter === 'todos' || product.getAttribute('data-category') === filter) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
});
