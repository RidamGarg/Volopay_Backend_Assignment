const joiSchema = require("./schema");
function checkForError(error, res, next) {
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new Error(msg);
  } else {
    next();
  }
}

module.exports.ValidateTotalItemsSold = (req, res, next) => {
  const { error } = joiSchema.totalItemsSchema.validate(req.query);
  checkForError(error, res, next);
};

module.exports.ValidateNTotalItem = (req, res, next) => {
  const { error } = joiSchema.nTotalItemsSchema.validate(req.query);
  checkForError(error, res, next);
};

module.exports.ValidatePercDeptWise = (req, res, next) => {
  const { error } = joiSchema.percDeptWiseSchema.validate(req.query);
  checkForError(error, res, next);
};

module.exports.ValidateMonthlySales = (req, res, next) => {
  const { error } = joiSchema.getMonthlySalesSchema.validate(req.query);
  checkForError(error, res, next);
};
