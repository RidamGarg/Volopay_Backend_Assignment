const Joi = require("joi");

module.exports.totalItemsSchema = Joi.object({
  start_date: Joi.date().required(),
  end_date: Joi.date().min(Joi.ref("start_date")).required(),
  department: Joi.string().required(),
});

module.exports.nTotalItemsSchema = Joi.object({
  start_date: Joi.date().required(),
  end_date: Joi.date().min(Joi.ref("start_date")).required(),
  department: Joi.string().required(),
  item_by: Joi.string().required(),
  n: Joi.number().required(),
});

module.exports.percDeptWiseSchema = Joi.object({
  start_date: Joi.date().required(),
  end_date: Joi.date().min(Joi.ref("start_date")).required(),
});

module.exports.getMonthlySalesSchema = Joi.object({
  product: Joi.string().required(),
  year: Joi.number().required(),
});
