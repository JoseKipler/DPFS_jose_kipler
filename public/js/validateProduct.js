(function () {
  const form = document.getElementById('productForm');
  if (!form) return;

  const { required, minLength, positive, imageFile } = NexusValidation.rules;

  NexusValidation.init(form, {
    name: [
      required('Ingresá el nombre del producto.'),
      minLength(5, 'El nombre debe tener al menos 5 caracteres.')
    ],
    description: [
      required('Ingresá la descripción.'),
      minLength(20, 'La descripción debe tener al menos 20 caracteres.')
    ],
    price: [
      required('Ingresá el precio.'),
      positive('El precio debe ser un número mayor a cero.')
    ],
    category_id: [
      required('Elegí una categoría.')
    ],
    image: [
      imageFile('La imagen debe ser JPG, JPEG, PNG o GIF.')
    ]
  });
})();