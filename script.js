// Select all the button of our page
const projectBtn = document.getElementById('project-btn');
const resumeBtn = document.getElementById('resume-btn');
const contactBtn = document.getElementById('contact-btn');
// Select all the requirments sections
const projectSection = document.getElementById('project-section');
const resumeSection = document.getElementById('resume-section');
const contactSection = document.getElementById('contact-section');

const buttons = document.querySelectorAll('button');
const lines = document.querySelectorAll('.indicator-line');


// Set default line for 'Projects' button on page load
window.addEventListener('DOMContentLoaded', () => {
    resetLines(); // Ensure no residual lines
    lines[0].style.width = '100%'; // Show line under the first button (Projects)
});

// Function to reset lines
function resetLines() {
    lines.forEach(line => line.style.width = '0');
}

// Add click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetLines(); // Reset all lines
        lines[index].style.width = '100%'; // Set active line
    });
});


// hide all the section
function hideAllSection(){
    projectSection.classList.add('hidden');
    resumeSection.classList.add('hidden');
    contactSection.classList.add('hidden');
}


// project button click event
projectBtn.addEventListener('click',() => {
    hideAllSection();
    projectSection.classList.remove('hidden');
});

// resume button click event
resumeBtn.addEventListener('click', () => {
    hideAllSection();
    resumeSection.classList.remove('hidden');

});

// contact button click event
contactBtn.addEventListener('click', () => {
    hideAllSection();
    contactSection.classList.remove('hidden');

});
hideAllSection();
projectSection.classList.remove('hidden');
// projectBtn.classList.add('text-indigo-300')
