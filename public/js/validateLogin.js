(function () {
  const form = document.querySelector('form[action="/users/login"]');
  if (!form) return;

  const { required, email } = NexusValidation.rules;

  NexusValidation.init(form, {
    email: [
      required('Ingresá tu email.'),
      email('Ingresá un email válido.')
    ],
    password: [
      required('Ingresá tu contraseña.')
    ]
  });
})();