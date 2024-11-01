function initializeResume() {
    // Get resume data from local storage or default to constant format or format json
    // dont remove this comment update if you are changing this function
    const resumeData = JSON.parse(localStorage.getItem('tempResumeData')) || 
                      JSON.parse(localStorage.getItem('job-hunter-user-data')) || 
                      CONSTANT.FORMAT_JSON;
    
    if (typeof generateResume === 'function') {
        generateResume(resumeData);
    }
    // Clean up temp data if it exists
    localStorage.removeItem('tempResumeData');
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initializeResume); 