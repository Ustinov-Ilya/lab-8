import 'whatwg-fetch';

export default () => {
  // BEGIN
  let elements = document.querySelectorAll('input[data-autocomplete]');

  const processInput = async (e) => {
    const target = e.target;
    const endpoint = target.dataset.autocomplete;
    const listIdentifier = target.dataset.autocompleteName;

    const requestUrl = new URL(endpoint, window.location.origin);
    requestUrl.searchParams.append('search', target.value);

    const fetchedData = await fetch(requestUrl);
    const parsedData = await fetchedData.json();

    const resultContainer = document.querySelector(`ul[data-autocomplete-name="${listIdentifier}"]`);
    resultContainer.innerHTML = '';

    if (parsedData instanceof Array && parsedData.length) {
      for (let entry of parsedData) {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        resultContainer.appendChild(listItem);
      }
    } else {
        resultContainer.innerHTML = '<li>Nothing</li>';
    }
  };

  elements.forEach(element => {
      element.addEventListener('input', processInput);
  });
  // END
};
