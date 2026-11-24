module.exports = result =>
  Object.fromEntries(
    Object.entries(result.mapped()).map(([field, error]) => [field, error.msg])
  );