/** @format */

function createJobDescriptionInput() {
    const jobDescInput = createElement("textarea");
    setAttribute(jobDescInput, "id", "jobDescription");
    setAttribute(jobDescInput, "placeholder", "Paste job description here...");
    addAllClasses(jobDescInput, ["w-full", "p-2", "mb-4", "rounded"]);
    return jobDescInput;
}

function createActionButtons() {
    const buttonContainer = createElement("div");
    addAllClasses(buttonContainer, ["flex", "gap-4"]);

    // Generate button
    const generateButton = createElement("button");
    addText(generateButton, "Generate Prompt");
    addAllClasses(generateButton, ["bg-blue-500", "text-white", "px-4", "py-2", "rounded", "mb-4"]);
    generateButton.addEventListener("click", handleGeneratePrompt);

    // Clear button
    const clearButton = createElement("button");
    addText(clearButton, "Clear Data");
    addAllClasses(clearButton, ["bg-red-500", "text-white", "px-4", "py-2", "rounded", "mb-4"]);
    clearButton.addEventListener("click", () => {
        removeLocalStorage(CONSTANT.LOCAL_STORAGE.USER_DATA);
        document.body.innerHTML = '';
        renderUploadDataPage();
    });

    addElement(buttonContainer, generateButton);
    addElement(buttonContainer, clearButton);
    return buttonContainer;
}

function createPromptHeader(prompt) {
    const headerDiv = createElement("div");
    addAllClasses(headerDiv, ["flex", "justify-end", "mb-2"]);
    
    const copyButton = createElement("button");
    addText(copyButton, "Copy Prompt");
    addAllClasses(copyButton, [
        "px-2", "py-1", "bg-gray-200", "hover:bg-gray-300",
        "rounded", "text-xs"
    ]);
    copyButton.addEventListener("click", () => handleCopyPrompt(copyButton, prompt));
    
    addElement(headerDiv, copyButton);
    return headerDiv;
}

function createPromptContent(prompt) {
    const contentDiv = createElement("div");
    addAllClasses(contentDiv, ["prompt-content", "overflow-y-auto"]);
    contentDiv.style.maxHeight = "calc(100vh - 300px)";

    const promptText = createElement("pre");
    addAllClasses(promptText, ["whitespace-pre-wrap", "break-words", "text-sm"]);
    addText(promptText, prompt);
    addElement(contentDiv, promptText);
    
    return contentDiv;
}

function createLLMResponseSection() {
    const llmSection = createElement("div");
    addAllClasses(llmSection, ["mt-4"]);

    const llmTextarea = createElement("textarea");
    setAttribute(llmTextarea, "id", "llmResponse");
    setAttribute(llmTextarea, "placeholder", "Paste the LLM response here...");
    setAttribute(llmTextarea, "rows", "4");
    addAllClasses(llmTextarea, ["w-full", "p-2", "border", "rounded"]);
    
    const generateResumeBtn = createElement("button");
    addText(generateResumeBtn, "Generate Resume");
    addAllClasses(generateResumeBtn, [
        "mt-2", "px-4", "py-2", "bg-blue-500", "text-white",
        "rounded", "hover:bg-blue-600"
    ]);
    generateResumeBtn.addEventListener("click", handleGenerateResume);

    addElement(llmSection, llmTextarea);
    addElement(llmSection, generateResumeBtn);
    return llmSection;
}

function handleCopyPrompt(button, text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = "Copy Prompt";
            }, 2000);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text. Please try again.");
        });
} 