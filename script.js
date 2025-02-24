function showLetter() {
  const catLetter = document.querySelector('.cat-letter');
  catLetter.classList.remove('hidden');
}

function openLetter() {
  const letter = document.querySelector('.letter');
  const letterContent = document.querySelector('.letter-content');
  letter.classList.add('open');
  letterContent.style.opacity = 1;
}
