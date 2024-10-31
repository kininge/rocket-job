/** @format */

// render welcome page
function renderWelcomePage() {
    // Clear existing content
    document.body.innerHTML = '';
    
    const welcomeContainer = createElement("div");
    addAllClasses(welcomeContainer, ["w-96", "p-4", "rounded-xl"]);
    setBackgourndColor(welcomeContainer, THEME.primaryBackground);

    // Add welcome message
    const welcomeMessage = createElement("h1");
    addText(welcomeMessage, "Welcome to Job Hunter!");
    addAllClasses(welcomeMessage, ["text-xl", "mb-4"]);
    setColor(welcomeMessage, THEME.primaryText);
    addElement(welcomeContainer, welcomeMessage);

    // Add button to clear data and return to upload page
    const clearButton = createElement("button");
    addText(clearButton, "Clear Data");
    addAllClasses(clearButton, ["bg-red-500", "text-white", "px-4", "py-2", "rounded"]);
    clearButton.addEventListener("click", () => {
        removeLocalStorage(CONSTANT.LOCAL_STORAGE.USER_DATA);
        // before render upload data page, clear the html content with document.body.innerHTML = ''
        document.body.innerHTML = '';
        renderUploadDataPage();
    });
    addElement(welcomeContainer, clearButton);

    addElement(document.body, welcomeContainer);
}
