function initializeResume() {
    const resumeData = JSON.parse(localStorage.getItem('tempResumeData'));
    if (resumeData && typeof generateResume === 'function') {
        generateResume(resumeData);
    }
    // Clean up
    localStorage.removeItem('tempResumeData');
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initializeResume); 