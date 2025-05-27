// BEGIN
const prettify = (document) => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        const childNodes = Array.from(div.childNodes);
        childNodes.forEach(node => {
            if (node instanceof Text && node.textContent.trim() !== ''){
                const pEl = document.createElement('p');
                pEl.append(node.textContent);
                node.replaceWith(pEl);
            }
        });
    });
}

export default prettify
// END