document.getElementById('prevBtn').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy(-window.innerWidth, 0);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy(window.innerWidth, 0);
});
// JavaScript code to toggle form visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleFormButton = document.getElementById('toggleFormButton');
    const submissionForm = document.getElementById('submissionForm');

    // Add a click event listener to the button
    toggleFormButton.addEventListener('click', function() {
        // Toggle the form's visibility
        if (submissionForm.style.display === 'none' || submissionForm.style.display === '') {
            submissionForm.style.display = 'block';
        } else {
            submissionForm.style.display = 'none';
        }
    });
});
