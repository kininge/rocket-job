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
6. paste the prompt in the AI model and get the updated resume by clicking generate resume.


## TODO

- [X] Define and document the required JSON resume format
- [X] Implement input validation for the JSON resume format
- [X] Create a sample JSON resume file for users to reference
- [ ] copy right click generate resume
- [ ] add support to json resume default template
- [ ] LLM integration using api key

## Future Scope
1. Currently We are generating prompt for the whole resume, we can generate prompt for specific sections of resume like skills, projects, experience etc.
2. Customizable Prompts: Allow users to customize the AI prompt template.
3. AI Integration: Integrate an AI model directly into the extension.
4. Multiple Resume Formats: Support various resume formats (e.g., PDF, DOCX).
5. Job Description Scraping: Automatically scrape job descriptions from job boards.
6. Resume Analytics: Analyze resumes and provide improvement suggestions.
7. Job Matching: Develop an algorithm to match resumes with job descriptions.
8. Interview Preparation: Generate potential interview questions.
9. Multi-language Support: Implement support for multiple languages.
10. Application Tracking: Develop a system to track job applications.
11. Resume Version Control: Manage multiple versions of a user's resume.
12. Privacy Enhancements: Add options for users to control shared information.
13. Integration with Professional Networks: Import resume data from sites like LinkedIn.
15. Browser Support: Extend compatibility to other popular browsers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
