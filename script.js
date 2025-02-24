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
  }, 1000);
}

function openLetter() {
  const secondPage = document.querySelector('.second-page');
  const thirdPage = document.querySelector('.third-page');

  // Hide the second page and show the third page
  secondPage.classList.add('hidden');
  thirdPage.classList.remove('hidden');
}

// Add event listener to the cake
const cake = document.querySelector('.cake');
cake.addEventListener('click', showSecondPage);
