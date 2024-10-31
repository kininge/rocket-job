/** @format */

// Add this at the top of the file
const template1 = document.createElement('script');
template1.src = '/rocket-job/ResumeTemplates/Template1.js';
document.head.appendChild(template1);

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

// Add function to handle generate prompt button click
function handleGeneratePrompt() {
    const jobDescription = getElement("#jobDescription").value;
    if (!jobDescription) {
        alert("Please enter a job description");
        return;
    }

    const userData = JSON.parse(getLocalStorage(CONSTANT.LOCAL_STORAGE.USER_DATA));
    if (!userData) {
        alert("No resume data found. Please upload your resume first.");
        return;
    }

    const prompt = createPrompt(userData, jobDescription);
    displayPrompt(prompt);
}

// Add function to create prompt
function createPrompt(jsonResume, jobDescription) {
    return `Given the following job description in plain text and my resume in JSON format, analyze the job description and identify the most relevant skills and experiences. Update only the **skills**, **projects**, and **job responsibilities** in the JSON resume based on relevance to the job description. Do **not** change my personal information, education, job titles, or dates of employment. Ensure the JSON format remains the same as the input.

**Job Description:**
${jobDescription}

**Current JSON Resume:**
${JSON.stringify(jsonResume, null, 2)}

**Output:**
{Provide the updated JSON resume with relevant skills, projects, and experiences based on the job description, while keeping the structure and key details intact.}`;
}

// Add function to display prompt
function displayPrompt(prompt) {
    // Create prompt display container
    const promptDisplay = createElement("div");
    addAllClasses(promptDisplay, [
        "w-full", 
        "bg-gray-100", 
        "rounded", 
        "p-4", 
        "flex", 
        "flex-col"
    ]);

    // Create header with copy button
    const headerDiv = createElement("div");
    addAllClasses(headerDiv, ["flex", "justify-end", "mb-2"]);
    
    // Add copy button
    const copyButton = createElement("button");
    addText(copyButton, "Copy Prompt");
    addAllClasses(copyButton, [
        "px-2",
        "py-1",
        "bg-gray-200",
        "hover:bg-gray-300",
        "rounded",
        "text-xs"
    ]);
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(prompt)
            .then(() => {
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = "Copy Prompt";
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
                alert("Failed to copy text. Please try again.");
            });
    });
    addElement(headerDiv, copyButton);
    addElement(promptDisplay, headerDiv);

    // Create scrollable content container
    const contentDiv = createElement("div");
    addAllClasses(contentDiv, ["prompt-content", "overflow-y-auto"]);
    contentDiv.style.maxHeight = "calc(100vh - 300px)";

    // Add prompt text
    const promptText = createElement("pre");
    addAllClasses(promptText, ["whitespace-pre-wrap", "break-words", "text-sm"]);
    addText(promptText, prompt);
    addElement(contentDiv, promptText);
    addElement(promptDisplay, contentDiv);

    // Add LLM response section
    const llmSection = createElement("div");
    addAllClasses(llmSection, ["mt-4"]);

    // Add textarea for LLM response
    const llmTextarea = createElement("textarea");
    setAttribute(llmTextarea, "id", "llmResponse");
    setAttribute(llmTextarea, "placeholder", "Paste the LLM response here...");
    setAttribute(llmTextarea, "rows", "4");
    addAllClasses(llmTextarea, ["w-full", "p-2", "border", "rounded"]);
    addElement(llmSection, llmTextarea);

    // Add generate resume button
    const generateResumeBtn = createElement("button");
    addText(generateResumeBtn, "Generate Resume");
    addAllClasses(generateResumeBtn, [
        "mt-2",
        "px-4",
        "py-2",
        "bg-blue-500",
        "text-white",
        "rounded",
        "hover:bg-blue-600"
    ]);
    generateResumeBtn.addEventListener("click", handleGenerateResume);
    addElement(llmSection, generateResumeBtn);

    addElement(promptDisplay, llmSection);

    // Add to welcome container
    const welcomeContainer = getElement("div");
    addElement(welcomeContainer, promptDisplay);
}

// Helper function to handle generate resume button click
function handleGenerateResume() {
    const llmResponse = getElement("#llmResponse").value;
    if (!llmResponse) {
        alert("Please paste the LLM response first");
        return;
    }

    try {
        const jsonResume = JSON.parse(llmResponse);
        // TODO: Implement resume generation logic
        console.log("Generating resume with:", jsonResume);
    } catch (error) {
        console.error("Error parsing LLM response:", error);
        alert("Error: The LLM response must be valid JSON. Please check the format and try again.");
    }
}
