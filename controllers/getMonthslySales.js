const Analytics = require("../model");

module.exports = async (req, res) => {
  const { product, year } = req.query;
  try {
    const result = await Analytics.aggregate([
      {
        $match: {
          software: product,
          date: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$date" },
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id",
          totalAmount: 1,
        },
      },
    ]);
    const monthlySales = Array(12).fill(0);
    result.forEach((item) => {
      monthlySales[item.month - 1] = item.totalAmount;
    });
    res.status(200).json(monthlySales);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
