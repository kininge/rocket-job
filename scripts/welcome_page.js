/** @format */

// Add this at the top of the file
const template1 = document.createElement('script');
template1.src = 'ResumeTemplates/Template1.js';
template1.onerror = () => console.error('Failed to load resume template');
template1.onload = () => console.log('Resume template loaded successfully');
document.head.appendChild(template1);

// render welcome page
function renderWelcomePage() {
    // Clear existing content
    document.body.innerHTML = '';
    
    const welcomeContainer = createElement("div");
    addAllClasses(welcomeContainer, ["w-96", "p-4", "rounded-xl"]);
    setAttribute(welcomeContainer, "id", "welcome-container");
    setBackgourndColor(welcomeContainer, THEME.primaryBackground);

    // Add welcome message
    const welcomeMessage = createElement("h1");
    addText(welcomeMessage, "Welcome to Job Hunter!");
    addAllClasses(welcomeMessage, ["text-xl", "mb-4"]);
    setColor(welcomeMessage, THEME.primaryText);
    addElement(welcomeContainer, welcomeMessage);

    // Add job description input and buttons
    addElement(welcomeContainer, createJobDescriptionInput());
    addElement(welcomeContainer, createActionButtons());

    addElement(document.body, welcomeContainer);
}
