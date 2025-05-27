import escapeHtml from 'escape-html';

// BEGIN
export default () => {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const container = document.createElement('div');
        container.innerHTML = `
            <p>Feedback has been sent</p>
            <div>Email: ${escapeHtml(form.elements.email.value)}</div>
            <div>Name: ${escapeHtml(form.elements.name.value)}</div>
            <div>Comment: ${escapeHtml(form.elements.comment.value)}</div>
        `;
        form.replaceWith(container);
    });
}
// END
