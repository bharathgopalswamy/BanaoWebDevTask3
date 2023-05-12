const submitButton = document.getElementById('submit-button');

function handleButtonClick() {
  submitButton.classList.add('loading');
  submitButton.disabled = true;
  setTimeout(function() {
    submitButton.classList.remove('loading');
    submitButton.disabled = false;
  }, 2000);
}

submitButton.addEventListener('click', handleButtonClick);
