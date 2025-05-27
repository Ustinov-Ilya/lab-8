// BEGIN
const bodyContent = document.body.innerHTML;

let lines = bodyContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

const newBodyContent = lines.map(line => `<p>${line}</p>`).join('\n');

document.body.innerHTML = newBodyContent;
// END