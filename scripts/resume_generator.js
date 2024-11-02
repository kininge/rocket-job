/** @format */

function handleGenerateResume() {
    const llmResponse = getElement("#llmResponse").value;
    if (!llmResponse) {
        alert("Please paste the LLM response first");
        return;
    }

    try {
        const updatedSections = JSON.parse(llmResponse);
        const originalUserResumeData = JSON.parse(getLocalStorage(CONSTANT.LOCAL_STORAGE.USER_DATA));
        
        // adding the updated sections to the original user resume data
        const mergedData = {
            ...originalUserResumeData,
            ...RESUME_SECTIONS_TO_UPDATE.reduce((acc, section) => {
                acc[section] = updatedSections[section] || originalUserResumeData[section];
                return acc;
            }, {})
        };

        localStorage.setItem('tempResumeData', JSON.stringify(mergedData));
        window.open('resume.html', '_blank');
    } catch (error) {
        console.error("Error parsing LLM response:", error);
        alert("Error: The LLM response must be valid JSON. Please check the format and try again.");
    }
} 