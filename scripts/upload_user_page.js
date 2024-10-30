/** @format */

var baseElement = null;
var bodyElement = null;

// render before upalod section
function renderBeforeUploadSection() {
	if (bodyElement) {
		bodyElement.remove();
	}

	bodyElement = createElement("div");
	addAllClasses(bodyElement, ["flex", "flex-col", "items-center"]);
	addElement(baseElement, bodyElement);
	// title
	const titleElement = createElement("h1");
	addText(titleElement, CONSTANT.TEXT.UPLOAD_DATA_TITLE);
	addAllClasses(titleElement, ["text-xl", "mt-2"]);
	setColor(titleElement, THEME.primaryText);
	addElement(bodyElement, titleElement);
	// subtitle
	const subtitleElement = createElement("h2");
	addText(subtitleElement, CONSTANT.TEXT.UPLOAD_DATA_SUBTITLE);
	addAllClasses(subtitleElement, ["text-ms", "mt-2", "mx-2"]);
	subtitleElement.style.fontFamily = "Nunito-light";
	subtitleElement.style.textAlign = "justify";
	setColor(subtitleElement, THEME.secondryText);
	addElement(bodyElement, subtitleElement);

	// upload and download section
	const dataSectionElement = createElement("div");
	addAllClasses(dataSectionElement, [
		"flex",
		"items-center",
		"justify-center",
		"mt-8",
		"mb-4",
	]);
	addElement(bodyElement, dataSectionElement);
	// upload file
	const uploadFileSectionElement = createElement("div");
	addAllClasses(uploadFileSectionElement, [
		"cursor-pointer",
		"p-2",
		"flex",
		"flex-col",
		"items-center",
	]);
	addElement(dataSectionElement, uploadFileSectionElement);
	const uploadFileIconElement = createElement("img");
	addAllClasses(uploadFileIconElement, ["w-12", "mb-2"]);
	setAttribute(uploadFileIconElement, "src", "./assets/upload-file.svg");
	setAttribute(uploadFileIconElement, "alt", "upload file");
	addElement(uploadFileSectionElement, uploadFileIconElement);
	const uploadFileTextElement = createElement("h3");
	addAllClasses(uploadFileTextElement, ["test-ms"]);
	addText(uploadFileTextElement, CONSTANT.TEXT.UPLOAD_DATA);
	setColor(uploadFileTextElement, THEME.secondryText);
	addElement(uploadFileSectionElement, uploadFileTextElement);
	// divider
	const verticleDeviderElement = createElement("div");
	addClass(verticleDeviderElement, "mx-6");
	setBackgourndColor(verticleDeviderElement, THEME.divider);
	verticleDeviderElement.style.width = "1px";
	verticleDeviderElement.style.height = "6rem";
	addElement(dataSectionElement, verticleDeviderElement);
	// download file
	const downloadFileSectionElement = createElement("div");
	addAllClasses(downloadFileSectionElement, [
		"cursor-pointer",
		"p-2",
		"flex",
		"flex-col",
		"items-center",
	]);
	addElement(dataSectionElement, downloadFileSectionElement);
	downloadFileSectionElement.addEventListener("click", downloadFormatFile);
	const downloadFileIconElement = createElement("img");
	addAllClasses(downloadFileIconElement, ["w-12", "mb-2"]);
	setAttribute(downloadFileIconElement, "src", "./assets/download-file.svg");
	setAttribute(downloadFileIconElement, "alt", "upload file");
	addElement(downloadFileSectionElement, downloadFileIconElement);
	const downloadFileTextElement = createElement("h3");
	addAllClasses(downloadFileTextElement, ["test-ms"]);
	addText(downloadFileTextElement, CONSTANT.TEXT.DOWNLOAD_FROMATE);
	setColor(downloadFileTextElement, THEME.secondryText);
	addElement(downloadFileSectionElement, downloadFileTextElement);
}

// render upload data page
function renderUploadDataPage() {
	// base element
	baseElement = createElement("section");
	baseElement.id = "base-project";
	addAllClasses(baseElement, [
		"w-96",
		"p-4",
		"relative",
		"overflow-hidden",
		"rounded-xl",
		"pb-12",
	]);
	setBackgourndColor(baseElement, THEME.primaryBackground);
	renderBeforeUploadSection();

	// footer
	const foolterElement = createElement("footer");
	addAllClasses(foolterElement, [
		"absolute",
		"bottom-0",
		"left-0",
		"w-96",
		"h-8",
		"pl-4",
		"flex",
		"items-center",
	]);
	setBackgourndColor(foolterElement, THEME.primary);
	addElement(baseElement, foolterElement);
	// footer message
	const footerMessageElement = createElement("small");
	addText(footerMessageElement, CONSTANT.TEXT.RIGHTS);
	setColor(footerMessageElement, THEME.white);
	addElement(foolterElement, footerMessageElement);

	addElement(document.body, baseElement);
}

// download format json
function downloadFormatFile() {
	const formatData = JSON.stringify(CONSTANT.FORMAT_JSON);
	const formatDataString = `data:text/json;charset=utf-8,${encodeURIComponent(
		formatData
	)}`;
	var downloadAnchorNode = document.createElement("a");
	downloadAnchorNode.setAttribute("href", formatDataString);
	downloadAnchorNode.setAttribute("download", "format.json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

// upalod data
function uploadFormatFile() {
	console.log("------------> Upload Format File");
}
