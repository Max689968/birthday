function showCat() {
  const cat = document.querySelector('.cat');
  const letter = document.querySelector('.letter');

  // Show the cat
  cat.classList.remove('hidden');

  // After 1 second, show the letter
  setTimeout(() => {
    letter.classList.remove('hidden');
    letter.classList.add('open');
  }, 1000);
}
