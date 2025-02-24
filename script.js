function showSecondPage() {
  const firstPage = document.querySelector('.first-page');
  const secondPage = document.querySelector('.second-page');
  const letter = document.querySelector('.letter');

  // Hide the first page and show the second page
  firstPage.classList.add('hidden');
  secondPage.classList.remove('hidden');

  // Show the letter after 1 second
  setTimeout(() => {
    letter.classList.remove('hidden');
    letter.classList.add('open');
  }, 1000);
}
