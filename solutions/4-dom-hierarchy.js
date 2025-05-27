// BEGIN
const extractData = (DOM) => {
    const body = DOM.querySelector('body');
    return Array.from(body.childNodes)
        .filter((str) => str.tagName === 'P')
        .map(p => p.textContent.trim())
        .filter(text => text.length > 0);
}

export default extractData
// END