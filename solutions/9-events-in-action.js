export default () => {
  // BEGIN
  const allTabButtons = document.querySelectorAll('[data-bs-toggle]');

  allTabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = button.dataset.bsTarget;
      const targetPane = document.querySelector(targetId);
      if (!targetPane) return;

      const navContainer = button.closest('.nav');
      if (!navContainer) return;

      const buttons = navContainer.querySelectorAll('[data-bs-toggle]');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      let tabContent = navContainer.parentElement.querySelector('.tab-content');
      if (!tabContent) {
        tabContent = navContainer.closest('.row, .container').querySelector('.tab-content');
      }
      if (!tabContent) return;

      const panes = tabContent.querySelectorAll('.tab-pane');
      panes.forEach(pane => pane.classList.remove('active'));
      targetPane.classList.add('active');
    });
  });
  // END
};
