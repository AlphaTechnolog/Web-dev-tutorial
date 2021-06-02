const displayAlert = (alert, text, cb) => {
  const availableAlerts = [
    'success',
    'danger'
  ];  

  if (!availableAlerts.includes(alert)) {
    throw new Error(`Invalid alert: ${alert}, correctlies: ${
      availableAlerts.join(', ')
    }`)
  }
  
  const alertEl = document.querySelector(`#${alert}-alert`);

  alertEl.innerHTML = text;
  alertEl.removeAttribute('hidden');

  setTimeout(() => {
    alertEl.innerHTML = '';
    alertEl.setAttribute('hidden', 'hidden');
    cb && cb();
  }, 3000);
};
