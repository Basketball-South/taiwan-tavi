'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.category-section-up');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#FFAA00aa';
    });

    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.category-section-down');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#19BD00aa';
    });

    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
    });
  });
});