/** @format */

function handleGenerateResume() {
    const llmResponse = getElement("#llmResponse").value;
    if (!llmResponse) {
        alert("Please paste the LLM response first");
        return;
    }

    try {
        const resumeData = JSON.parse(llmResponse);
        // Store data temporarily
        localStorage.setItem('tempResumeData', JSON.stringify(resumeData));
        
        const newWindow = window.open('resume.html', '_blank');
    } catch (error) {
        console.error("Error parsing LLM response:", error);
        alert("Error: The LLM response must be valid JSON. Please check the format and try again.");
    }
} 