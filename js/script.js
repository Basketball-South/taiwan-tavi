'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.category-section');
  const title = document.querySelector('.category-title');

  title.addEventListener('mouseenter', () => {
    section.style.backgroundColor = '#ff6f6f';
  });

  title.addEventListener('mouseleave', () => {
    section.style.backgroundColor = ''; // 元に戻す（空白だとCSSに従う）
  });
});
