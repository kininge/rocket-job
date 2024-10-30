/** @format */

// DOM manipulation
const getElement = (query) => document.querySelector(query);
const getElements = (query) => document.querySelectorAll(query);
const createElement = (_element) => document.createElement(_element);
const removeElement = (_element) => _element.remove();
const addClass = (_element, _class) => _element.classList.add(_class);
const addAllClasses = (_element, _classes) => {
	_classes.forEach((_class) => _element.classList.add(_class));
};
const removeClass = (_element, _class) => _element.classList.remove(_class);
const addElement = (_parentElement, _childElement) =>
	_parentElement.append(_childElement);
const addText = (_element, _message) => (_element.innerHTML = _message);
const setAttribute = (_element, _key, _value) =>
	_element.setAttribute(_key, _value);
const getAttribute = (_element, _key) => _element.getAttribute(_key);
const setColor = (_element, _color) => (_element.style.color = _color);
const setBackgourndColor = (_element, _color) =>
	(_element.style.backgroundColor = _color);

const THEME = {
	primary: "#1478B4",
	primaryText: "#1E1E1E",
	secondryText: "#787878",
	divider: "#C8C8C8",
	//
	primaryBackground: "#E6E6E6",
	secondryBackground: "#FFFFFF",
	//
	info: "#FFCF30",
	error: "#FF8038",
	success: "#A6D86A",
	//
	white: "#FFFFFF",
	black: "#000000",
};
