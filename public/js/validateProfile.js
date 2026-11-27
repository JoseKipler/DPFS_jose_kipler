(function () {
  const form = document.querySelector('form[action^="/users/profile"]');
  if (!form) return;

  const { required, minLength, imageFile } = NexusValidation.rules;

  NexusValidation.init(form, {
    firstName: [
      required('Ingresá tu nombre.'),
      minLength(2, 'El nombre debe tener al menos 2 caracteres.')
    ],
    lastName: [
      required('Ingresá tu apellido.'),
      minLength(2, 'El apellido debe tener al menos 2 caracteres.')
    ],
    image: [
      imageFile('La imagen debe ser JPG, JPEG, PNG o GIF.')
    ]
  });
})();