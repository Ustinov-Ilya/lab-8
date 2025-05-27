export default (document) => {
  // BEGIN
  const title = document.querySelector('.content h1').textContent.trim();
  const description = document.querySelector('.description').textContent.trim();
  const articles = Array.from(document.querySelectorAll('.links > div'))
    .map(article => ({
      title: article.querySelector('h2 a').textContent.trim(),
      description: article.querySelector('p').textContent.trim()
    }));

    return {
      title,
      description,
      items: articles
    };
  // END
};
