document.addEventListener('DOMContentLoaded', function() {
    // Store the print button before generating resume
    const printButtonDiv = document.getElementById('print-button');
    
    // Get resume data and generate resume
    const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    if (typeof generateResume === 'function') {
        generateResume(resumeData);
        
        // Restore print button in a fixed position that won't affect layout
        if (printButtonDiv) {
            printButtonDiv.style.position = 'fixed';
            printButtonDiv.style.top = '20px';
            printButtonDiv.style.left = '50%';
            printButtonDiv.style.transform = 'translateX(-50%)';
            printButtonDiv.style.zIndex = '1000';
            document.body.appendChild(printButtonDiv);
        }
    }
    
    // Add print functionality
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'printButton') {
            window.print();
        }
    });
}); 