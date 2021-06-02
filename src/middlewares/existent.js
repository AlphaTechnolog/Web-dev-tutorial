module.exports = (Model, field, errorCallback) => (async (req, res, next) => {
  const value = req.params[field];
  const findResult = (await Model.find({ [field]: value }))[0];
  if (!findResult) {
    return errorCallback(req, res, next);
  } else {
    next();
  }
});
