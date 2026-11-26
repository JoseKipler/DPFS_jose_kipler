(function () {
  const form = document.querySelector('form[action="/users/register"]');
  if (!form) return;

  const { required, minLength, email, matches, imageFile } = NexusValidation.rules;

  NexusValidation.init(form, {
    firstName: [
      required('Ingresá tu nombre.'),
      minLength(2, 'El nombre debe tener al menos 2 caracteres.')
    ],
    lastName: [
      required('Ingresá tu apellido.'),
      minLength(2, 'El apellido debe tener al menos 2 caracteres.')
    ],
    email: [
      required('Ingresá tu email.'),
      email('Ingresá un email válido.')
    ],
   password: [
  required('Ingresá una contraseña.'),
  minLength(8, 'La contraseña debe tener al menos 8 caracteres.', false),
  (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(value)
    ? null
    : 'Debe incluir mayúscula, minúscula, un número y un carácter especial.'
],
    password2: [
      matches('password', 'Las contraseñas no coinciden.')
    ],
    image: [
      imageFile('La imagen debe ser JPG, JPEG, PNG o GIF.')
    ],
    terms: [
      required('Tenés que aceptar los términos y condiciones.')
    ]
  });
})();