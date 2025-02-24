function showLetter() {
  const catLetter = document.querySelector('.cat-letter');
  catLetter.style.display = 'block'; // Show the cat and letter
}

function openLetter() {
  const letter = document.querySelector('.letter');
  const letterContent = document.querySelector('.letter-content');
  letter.classList.add('open'); // Add the open animation
  letterContent.style.opacity = 1; // Show the letter content
}
