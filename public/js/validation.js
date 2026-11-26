(function () {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif'];

  const getField = input => input.closest('.field');
  const hasError = input => getField(input).classList.contains('field--error');

  function showError(input, message) {
    const field = getField(input);
    field.classList.add('field--error');
    input.setAttribute('aria-invalid', 'true');

    let error = field.querySelector('.field__error');
    if (!error) {
      error = document.createElement('p');
      error.className = 'field__error';
      error.setAttribute('role', 'alert');
      field.appendChild(error);
    }
    error.textContent = message;
  }

  function clearError(input) {
    const field = getField(input);
    field.classList.remove('field--error');
    input.removeAttribute('aria-invalid');

    const error = field.querySelector('.field__error');
    if (error) error.remove();
  }

  function getValue(input) {
    if (input.type === 'checkbox') return input.checked;
    if (input.type === 'file') return input.files[0] || null;
    return input.value;
  }

  const rules = {
    required: message => value =>
      (typeof value === 'string' ? value.trim() !== '' : Boolean(value)) ? null : message,

    minLength: (min, message, trim = true) => value =>
      (trim ? value.trim() : value).length >= min ? null : message,

    email: message => value => (EMAIL_REGEX.test(value.trim()) ? null : message),

    positive: message => value => (Number(value) > 0 ? null : message),

    imageFile: message => file => {
      if (!file) return null;
      const extension = file.name.split('.').pop().toLowerCase();
      return IMAGE_EXTENSIONS.includes(extension) ? null : message;
    },

    matches: (otherName, message) => {
      const rule = (value, form) => (value === form.elements[otherName].value ? null : message);
      rule.other = otherName;
      return rule;
    }
  };

  function init(form, schema) {
    const names = Object.keys(schema);

    function validateField(name) {
      const input = form.elements[name];
      if (!input) return true;

      const value = getValue(input);

      for (const rule of schema[name]) {
        const message = rule(value, form);
        if (message) {
          showError(input, message);
          return false;
        }
      }

      clearError(input);
      return true;
    }

    form.addEventListener('submit', event => {
      let firstInvalid = null;

      names.forEach(name => {
        if (!validateField(name) && !firstInvalid) {
          firstInvalid = form.elements[name];
        }
      });

      if (firstInvalid) {
        event.preventDefault();
        firstInvalid.focus();
      }
    });

    names.forEach(name => {
      const input = form.elements[name];
      if (!input) return;

      input.addEventListener('blur', () => validateField(name));

      const eventName = ['checkbox', 'file'].includes(input.type) || input.tagName === 'SELECT'
        ? 'change'
        : 'input';

      input.addEventListener(eventName, () => {
        if (hasError(input)) validateField(name);
      });

      schema[name].forEach(rule => {
        const other = rule.other && form.elements[rule.other];
        if (other) {
          other.addEventListener('input', () => {
            if (hasError(input)) validateField(name);
          });
        }
      });
    });
  }

  window.NexusValidation = { init, rules };
})();