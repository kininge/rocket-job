# Job Hunter

Job Hunter is a browser extension designed to help job seekers tailor their resumes to specific job descriptions quickly and efficiently.

## Features

- Upload your resume in JSON format
- Input job descriptions
- Generate a prompt for AI-assisted resume tailoring
- Copy generated prompt with a single click

## Installation

1. Clone this repository
2. Open your browser's extension management page
   - Chrome: chrome://extensions
   - Firefox: about:addons
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `rocket-job` directory

## Usage

1. Click on the Job Hunter extension icon in your browser
2. Upload your JSON resume file
3. Paste the job description into the provided text area
4. Click "Generate Prompt"
5. Use the generated prompt with an AI model (e.g., ChatGPT) to tailor your resume

## Project Structure

- `index.html`: The main popup interface
- `index.js`: Contains the core functionality of the extension
- `manifest.json`: Extension configuration file

## Dependencies

- Tailwind CSS (loaded via CDN)

## Future Scope

1. AI Integration: Integrate an AI model directly into the extension.
2. Multiple Resume Formats: Support various resume formats (e.g., PDF, DOCX).
3. Job Description Scraping: Automatically scrape job descriptions from job boards.
4. Resume Analytics: Analyze resumes and provide improvement suggestions.
5. Job Matching: Develop an algorithm to match resumes with job descriptions.
6. Interview Preparation: Generate potential interview questions.
7. Multi-language Support: Implement support for multiple languages.
8. Cloud Sync: Allow users to sync their data across devices.
9. Application Tracking: Develop a system to track job applications.
10. Resume Version Control: Manage multiple versions of a user's resume.
11. Privacy Enhancements: Add options for users to control shared information.
12. Customizable Prompts: Allow users to customize the AI prompt template.
13. Integration with Professional Networks: Import resume data from sites like LinkedIn.
14. Mobile App: Develop a companion mobile app.
15. Browser Support: Extend compatibility to other popular browsers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
