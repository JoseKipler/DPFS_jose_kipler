module.exports = user => ({
  id: user.id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  image: user.image,
  category: user.category ? user.category.name : null
}); 