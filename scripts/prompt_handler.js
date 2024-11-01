/** @format */

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

function createPrompt(jsonResume, jobDescription) {
    return `Given the following job description in plain text and my resume in JSON format, analyze the job description and identify the most relevant skills and experiences. Update only the **skills**, **projects**, and **job responsibilities** in the JSON resume based on relevance to the job description. Do **not** change my personal information, education, job titles, or dates of employment. Ensure the JSON format remains the same as the input.
    
    **Job Description:**
    ${jobDescription}
    
    **Current JSON Resume:**
    ${JSON.stringify(jsonResume, null, 2)}
    
    **Output:**
    {Provide the updated JSON resume with relevant skills, projects, and experiences based on the job description, while keeping the structure and key details intact.}`;
}

function displayPrompt(prompt) {
    const promptDisplay = createPromptDisplay(prompt);
    const welcomeContainer = getElement("div");
    addElement(welcomeContainer, promptDisplay);
} 