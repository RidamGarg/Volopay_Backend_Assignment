const express = require("express");
const router = express.Router();
const getTotalItemsSoldQ3 = require("./controllers/getTotalItemsSoldQ3");
const getMonthslySales = require("./controllers/getMonthslySales");
const getDeptPercentage = require("./controllers/percDeptWise");
const nthMostTotalItem = require("./controllers/nTotalItem");
const joiValidation = require("./joi_validation/validator");
// GET /api/total_items
router.get(
  "/total_items",
  joiValidation.ValidateTotalItemsSold,
  getTotalItemsSoldQ3
);
router.get(
  "/nth_most_total_item",
  joiValidation.ValidateNTotalItem,
  nthMostTotalItem
);
router.get(
  "/percentage_of_department_wise_sold_items",
  joiValidation.ValidatePercDeptWise,
  getDeptPercentage
);
router.get(
  "/get_monthly_sale",
  joiValidation.ValidateMonthlySales,
  getMonthslySales
);

module.exports = router;
