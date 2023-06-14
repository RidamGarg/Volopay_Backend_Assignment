const Analytics = require("../model");

const getTotalItemsSoldQ3 = async (req, res) => {
  const { start_date, end_date, department } = req.query;

  try {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const totalItemsSold = await Analytics.aggregate([
      {
        $match: {
          department: department,
          date: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          totalItems: { $sum: "$seats" },
        },
      },
    ]);
    const total = totalItemsSold.length > 0 ? totalItemsSold[0].totalItems : 0;
    res.json({ total });
  } catch (error) {
    console.log("---Error in API 1---" + error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = getTotalItemsSoldQ3;
