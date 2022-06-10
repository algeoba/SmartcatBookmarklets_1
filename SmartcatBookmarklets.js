/*
Bookmarklets for typical PEMT tasks
For usage, please refer to README.
*/

//Capitalization (Chicago)

//pretty print
javascript: (function () {
	let currentSegment = document.activeElement;
	let selectionString = window.getSelection().toString();
	let selectionArray = selectionString.split(' ');
	let noCapitalization = ['a', 'about', 'above', 'across', 'after', 'against', 'along', 'among', 'and', 'around', 'as', 'at', 'before', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'for', 'from', 'in', 'including', 'inside', 'into', 'like', 'near', 'nearer', 'nearest', 'of', 'off', 'on', 'or', 'onto', 'out', 'outside', 'over', 'per', 'regarding', 'respecting', 'short', 'since', 'than', 'the', 'through', 'throughout', 'till', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'unto', 'up', 'upon', 'v.', 'versus', 'via', 'vs.', 'with', 'within', 'without'];
	let selectionRemade = selectionArray.map(item => (noCapitalization.includes(item) == true) ? item = item : item = item[0].toUpperCase() + item.slice(1)).join(' ');
	let output = currentSegment.innerText.replace(selectionString, selectionRemade);
	currentSegment.innerText = output;
})()

//single line
javascript: (function () { let currentSegment = document.activeElement; let selectionString = window.getSelection().toString(); let selectionArray = selectionString.split(' '); let noCapitalization = ['a', 'about', 'above', 'across', 'after', 'against', 'along', 'among', 'and', 'around', 'as', 'at', 'before', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'for', 'from', 'in', 'including', 'inside', 'into', 'like', 'near', 'nearer', 'nearest', 'of', 'off', 'on', 'or', 'onto', 'out', 'outside', 'over', 'per', 'regarding', 'respecting', 'short', 'since', 'than', 'the', 'through', 'throughout', 'till', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'unto', 'up', 'upon', 'v.', 'versus', 'via', 'vs.', 'with', 'within', 'without']; let selectionRemade = selectionArray.map(item => (noCapitalization.includes(item) == true) ? item = item : item = item[0].toUpperCase() + item.slice(1)).join(' '); let output = currentSegment.innerText.replace(selectionString, selectionRemade); currentSegment.innerText = output; })()


//Move Adverbial Forward

//pretty print
javascript: (function () {
	let currentSegment = document.activeElement;
	let currentSegmentText = currentSegment.innerText;
	let selectionString = ' ' + window.getSelection().toString();
	let output = selectionString.substr(1, 1).toUpperCase() + selectionString.slice(2) + ', ' + currentSegmentText.substr(0, 1).toLowerCase() + currentSegmentText.slice(1).replace(selectionString, '');
	currentSegment.innerText = output;
})()

//single line
javascript: (function () { let currentSegment = document.activeElement; let currentSegmentText = currentSegment.innerText; let selectionString = ' ' + window.getSelection().toString(); let output = selectionString.substr(1, 1).toUpperCase() + selectionString.slice(2) + ', ' + currentSegmentText.substr(0, 1).toLowerCase() + currentSegmentText.slice(1).replace(selectionString, ''); currentSegment.innerText = output; })()


//Paste Multiple Segments

//pretty print
javascript: (function () {
	navigator.clipboard.readText().then(clipboardText => {
		clipboardArray = clipboardText.split(/[\r\n]+/g);
		for (i = 0; i < clipboardArray.length; i++) {
			statement = 'document.activeElement.closest(&quot;tbody&quot;)' + '.nextElementSibling'.repeat(i) + '.getElementsByClassName(&quot;l-content-editor__view l-content-editor__view_editor&quot;)[1].innerText=clipboardArray[i]';
			eval(statement);
		}
	})
})()

//single line
javascript: (function () { navigator.clipboard.readText().then(clipboardText => { clipboardArray = clipboardText.split(/[\r\n]+/g); for (i = 0; i < clipboardArray.length; i++) { statement = 'document.activeElement.closest(&quot;tbody&quot;)' + '.nextElementSibling'.repeat(i) + '.getElementsByClassName(&quot;l-content-editor__view l-content-editor__view_editor&quot;)[1].innerText=clipboardArray[i]'; eval(statement); } }) })()


//12 345,67 to 12,345.67

//pretty print
javascript: (function () {
	let currentSegment = document.activeElement;
	let currentSegmentText = currentSegment.innerText;
	let selectionString = window.getSelection().toString();
	let pattern = /\s/g;
	let result = selectionString.replace(',', '.').replace(pattern, ',');
	let output = currentSegmentText.replace(selectionString, result);
	currentSegment.innerText = output;
})()

//single line
javascript: (function () { let currentSegment = document.activeElement; let currentSegmentText = currentSegment.innerText; let selectionString = window.getSelection().toString(); let pattern = /\s/g; let result = selectionString.replace(',', '.').replace(pattern, ','); let output = currentSegmentText.replace(selectionString, result); currentSegment.innerText = output; })()

//01.01.2001 to 1 January 2001

//pretty print
javascript: (function () {
	let currentSegment = document.activeElement;
	let currentSegmentText = currentSegment.innerText;
	let selectionString = window.getSelection().toString();
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let selectionArray = selectionString.split('.');
	let day;
	(selectionArray[0].split(0, 1) == 0) ? day = selectionArray[0].substr(1, 1) : day = selectionArray[0];
	let result = day + ' ' + months[parseInt(selectionArray[1]) - 1] + ' ' + selectionArray[2];
	let output = currentSegmentText.replace(selectionString, result);
	currentSegment.innerText = output;
})()

//single line
javascript: (function () { let currentSegment = document.activeElement; let currentSegmentText = currentSegment.innerText; let selectionString = window.getSelection().toString(); let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; let selectionArray = selectionString.split('.'); let day; (selectionArray[0].split(0, 1) == 0) ? day = selectionArray[0].substr(1, 1) : day = selectionArray[0]; let result = day + ' ' + months[parseInt(selectionArray[1]) - 1] + ' ' + selectionArray[2]; let output = currentSegmentText.replace(selectionString, result); currentSegment.innerText = output; })()

//01.01.2001 to January 1, 2001 

//pretty print
javascript: (function () {
	let currentSegment = document.activeElement;
	let currentSegmentText = currentSegment.innerText;
	let selectionString = window.getSelection().toString();
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let selectionArray = selectionString.split('.');
	let day;
	(selectionArray[0].split(0, 1) == 0) ? day = selectionArray[0].substr(1, 1) : day = selectionArray[0];
	let result = months[parseInt(selectionArray[1]) - 1] + ' ' + day + ', ' + selectionArray[2];
	let output = currentSegmentText.replace(selectionString, result);
	currentSegment.innerText = output;
})()

//single line
javascript: (function () { let currentSegment = document.activeElement; let currentSegmentText = currentSegment.innerText; let selectionString = window.getSelection().toString(); let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; let selectionArray = selectionString.split('.'); let day; (selectionArray[0].split(0, 1) == 0) ? day = selectionArray[0].substr(1, 1) : day = selectionArray[0]; let result = months[parseInt(selectionArray[1]) - 1] + ' ' + day + ', ' + selectionArray[2]; let output = currentSegmentText.replace(selectionString, result); currentSegment.innerText = output; })()

