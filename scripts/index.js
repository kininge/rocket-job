/** @format */

window.addEventListener("load", () => {
	const userData = getLocalStorage(CONSTANT.LOCAL_STORAGE.USER_DATA);
	userData ? renderWelcomePage() : renderUploadDataPage(); // if user data present then show welcome page aor ask for data
});

// /** @format */

// // Import the resume template
// const template1 = document.createElement('script');
// template1.src = './ResumeTemplates/Template1.js';
// document.head.appendChild(template1);

// var updateButtonElement = null;
// var jobDescriptionElement = null;

// window.addEventListener("load", () => {
// 	updateButtonElement = document.getElementById("updateButton");
// 	jobDescriptionElement = document.getElementById("jobDescription");

// 	// events
// 	updateButtonElement.addEventListener("click", handleUpdateResume);
// });

// async function handleUpdateResume() {
// 	let jsonResume;
// 	const fileInput = document.getElementById("fileInput");
// 	const jobDescription = document.getElementById("jobDescription").value;

// 	// First, try to get the stored resume
// 	const storedResume = localStorage.getItem("storedJsonResume");

// 	if (fileInput.files.length > 0) {
// 		const file = fileInput.files[0];
// 		const reader = new FileReader();

// 		reader.onload = function (event) {
// 			try {
// 				const resumeText = event.target.result;
// 				let jsonData;

// 				// Try to parse the resume text as JSON
// 				try {
// 					jsonData = JSON.parse(resumeText);
// 				} catch (jsonError) {
// 					// If parsing fails, use the raw text
// 					jsonData = resumeText;
// 				}

// 				localStorage.setItem("storedJsonResume", JSON.stringify(jsonData));
// 				const prompt = createPrompt(jsonData, jobDescription);
// 				displayPrompt(prompt);
// 			} catch (error) {
// 				console.error("Error processing file:", error);
// 				alert("Error processing file: " + error.message);
// 			}
// 		};

// 		reader.onerror = function () {
// 			alert("Error reading file.");
// 		};

// 		reader.readAsText(file);
// 	} else if (storedResume) {
// 		jsonResume = JSON.parse(storedResume);
// 		const prompt = createPrompt(jsonResume, jobDescription);
// 		displayPrompt(prompt);
// 	} else {
// 		alert("Please upload a resume file or use a previously stored resume.");
// 	}
// }

// function createPrompt(jsonResume, jobDescription) {
// 	return `Given the following job description in plain text and my resume in JSON format, analyze the job description and identify the most relevant skills and experiences. Update only the **skills**, **projects**, and **job responsibilities** in the JSON resume based on relevance to the job description. Do **not** change my personal information, education, job titles, or dates of employment. Ensure the JSON format remains the same as the input.

// **Job Description:**
// ${jobDescription}

// **Current JSON Resume:**
// ${JSON.stringify(jsonResume, null, 2)}

// **Output:**
// {Provide the updated JSON resume with relevant skills, projects, and experiences based on the job description, while keeping the structure and key details intact.}`;
// }

// function displayPrompt(prompt) {
// 	const promptDisplay = document.getElementById('promptDisplay');
// 	if (promptDisplay) {
// 		promptDisplay.innerHTML = `
// 			<div class="bg-gray-100 rounded p-4 w-full flex flex-col">
// 				<div class="flex justify-end mb-2">
// 					<!-- Copy button will be added here -->
// 				</div>
// 				<div class="prompt-content overflow-y-auto" style="max-height: calc(100vh - 300px);">
// 					<pre class="whitespace-pre-wrap break-words text-sm">${escapeHtml(prompt)}</pre>
// 				</div>
// 				<!-- Add textarea for LLM response -->
// 				<div class="mt-4">
// 					<textarea id="llmResponse" class="w-full p-2 border rounded"
// 						placeholder="Paste the LLM response here..." rows="4"></textarea>
// 					<button id="generateResumeBtn"
// 						class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
// 						Generate Resume
// 					</button>
// 				</div>
// 			</div>
// 		`;
// 		promptDisplay.classList.remove('hidden');

// 		// Add the copy button at the top
// 		addCopyButton(promptDisplay.querySelector('.flex.justify-end'), prompt);

// 		// Add event listener for generate resume button
// 		document.getElementById('generateResumeBtn').addEventListener('click', handleGenerateResume);
// 	} else {
// 		console.error("Element with id 'promptDisplay' not found");
// 		alert("Error: Unable to display prompt. Please check the console for more information.");
// 	}
// }

// async function handleGenerateResume() {
// 	const llmResponse = document.getElementById('llmResponse').value;

// 	try {
// 		const jsonResume = JSON.parse(llmResponse);
// 		// Open a new window with print-friendly styles
// 		const newWindow = window.open('', '_blank');
// 		newWindow.document.write(`
// 			<!DOCTYPE html>
// 			<html lang="en">
// 			<head>
// 				<meta charset="UTF-8">
// 				<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 				<title>Your Resume</title>
// 				<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
// 				<style>
// 					body {
// 						margin: 0;
// 						padding: 20px;
// 						background: white;
// 					}
// 					#resume-container {
// 						max-width: 8.5in;
// 						margin: 0 auto;
// 					}
// 					@media print {
// 						body {
// 							padding: 0;
// 						}
// 						#print-button {
// 							display: none;
// 						}
// 					}
// 				</style>
// 			</head>
// 			<body>
// 				<div id="print-button" style="text-align: center; margin-bottom: 20px;">
// 					<button onclick="window.print()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
// 						Save as PDF
// 					</button>
// 				</div>
// 				<div id="resume-container"></div>
// 				<script>
// 					const resumeData = ${JSON.stringify(jsonResume)};
// 				</script>
// 				<script src="./ResumeTemplates/Template1.js"></script>
// 			</body>
// 			</html>
// 		`);
// 		newWindow.document.close();
// 	} catch (error) {
// 		console.error("Error parsing LLM response:", error);
// 		alert("Error: The LLM response must be valid JSON. Please check the format and try again.");
// 	}
// }

// function addCopyButton(targetElement, textToCopy) {
// 	const copyButton = document.createElement('button');
// 	copyButton.textContent = 'Copy';
// 	copyButton.className = 'px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs';
// 	copyButton.addEventListener('click', () => {
// 		navigator.clipboard.writeText(textToCopy)
// 			.then(() => {
// 				copyButton.textContent = 'Copied!';
// 				setTimeout(() => {
// 					copyButton.textContent = 'Copy';
// 				}, 2000);
// 			})
// 			.catch(err => {
// 				console.error('Failed to copy text: ', err);
// 				alert('Failed to copy text. Please try again.');
// 			});
// 	});
// 	targetElement.appendChild(copyButton);
// }

// function escapeHtml(unsafe) {
// 	return unsafe
// 		.replace(/&/g, "&amp;")
// 		.replace(/</g, "&lt;")
// 		.replace(/>/g, "&gt;")
// 		.replace(/"/g, "&quot;")
// 		.replace(/'/g, "&#039;");
// }
