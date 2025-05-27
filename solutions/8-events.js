export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alerts = document.querySelector('.alerts');

  let countAlerts = 1;

  button.addEventListener('click', () => {
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert', 'alert-primary');
    newAlert.textContent = `Alert ${countAlerts}`;
    alerts.insertBefore(newAlert, alerts.firstChild);
    countAlerts += 1;
  });
  // END
};