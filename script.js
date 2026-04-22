/* WELCOME MESSAGE ON PAGE LOAD
   Runs once when the document finishes loading */
window.addEventListener('load', function () {
    alert('Welcome to my portfolio! I am José Julián Arévalo.');
});

/* WELCOME MESSAGE TOGGLE
   Shows or hides the welcome message when the button is clicked.
   Also updates the button text based on the current state. */
const btnWelcome = document.getElementById('welcome-btn');
const welcomeMessage = document.getElementById('welcome-message');
const welcomeTitle = document.getElementById('welcome-title');

btnWelcome.addEventListener('click', function () {

    if (welcomeMessage.style.display !== 'block') {
        // Message is not visible: show it and hide the title
        welcomeMessage.style.display = 'block';
        welcomeTitle.style.display = 'none';
        btnWelcome.textContent = 'Hide message';
    } else {
        // Message is visible: hide it and restore the title
        welcomeMessage.style.display = 'none';
        welcomeTitle.style.display = 'block';
        btnWelcome.textContent = 'Show message';
    }

});

/* EXTRA INFO TOGGLE IN "ABOUT ME"
   Expands or collapses the additional info block
   when the "Show more / Show less" button is clicked. */
const btnMore = document.getElementById('btn-more');
const extraInfo = document.getElementById('extra-info');

btnMore.addEventListener('click', function () {

    if (extraInfo.style.display !== 'block') {
        // Extra info is not visible: show it
        extraInfo.style.display = 'block';
        btnMore.textContent = 'Show less';
    } else {
        // Extra info is visible: hide it
        extraInfo.style.display = 'none';
        btnMore.textContent = 'Show more';
    }

});
