/** @format */

var updateButtonElement = null;
var jobDescriptionElement = null;

window.addEventListener("load", () => {
	updateButtonElement = document.getElementById("updateButton");
	jobDescriptionElement = document.getElementById("jobDescription");

	// events
	updateButtonElement.addEventListener("click", handleUpdateResume);
});

async function handleUpdateResume() {
	// Getting user input file
	const fileInput = document.getElementById("fileInput");
	const file = fileInput.files[0];

	if (!file) {
		alert("Please select a resume file.");
		return;
	}

	const jobDescription = jobDescriptionElement.value.trim();
	if (!jobDescription) {
		alert("Please enter a job description.");
		return;
	}

	const reader = new FileReader();

	reader.onload = function (event) {
		try {
			const resumeText = event.target.result;
			let jsonData;
			
			// Try to parse the resume text as JSON
			try {
				jsonData = JSON.parse(resumeText);
			} catch (jsonError) {
				// If parsing fails, use the raw text
				jsonData = resumeText;
			}

			const prompt = createPrompt(jsonData, jobDescription);
			// console.log(prompt);
			displayPrompt(prompt);
		} catch (error) {
			console.error("Error processing file:", error);
			alert("Error processing file: " + error.message);
		}
	};

	reader.onerror = function () {
		alert("Error reading file.");
	};

	reader.readAsText(file);
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
	const promptDisplay = document.getElementById('promptDisplay');
	if (promptDisplay) {
		promptDisplay.innerHTML = `
			<div class="bg-gray-100 rounded p-4 w-full flex flex-col">
				<div class="flex justify-end mb-2">
					<!-- Copy button will be added here -->
				</div>
				<div class="prompt-content overflow-y-auto" style="max-height: calc(100vh - 300px);">
					<pre class="whitespace-pre-wrap break-words text-sm">${escapeHtml(prompt)}</pre>
				</div>
			</div>
		`;
		promptDisplay.classList.remove('hidden');

		// Add the copy button at the top
		addCopyButton(promptDisplay.querySelector('.flex.justify-end'), prompt);
	} else {
		console.error("Element with id 'promptDisplay' not found");
		alert("Error: Unable to display prompt. Please check the console for more information.");
	}
}

function addCopyButton(targetElement, textToCopy) {
	const copyButton = document.createElement('button');
	copyButton.textContent = 'Copy';
	copyButton.className = 'px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs';
	copyButton.addEventListener('click', () => {
		navigator.clipboard.writeText(textToCopy)
			.then(() => {
				copyButton.textContent = 'Copied!';
				setTimeout(() => {
					copyButton.textContent = 'Copy';
				}, 2000);
			})
			.catch(err => {
				console.error('Failed to copy text: ', err);
				alert('Failed to copy text. Please try again.');
			});
	});
	targetElement.appendChild(copyButton);
}


function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
