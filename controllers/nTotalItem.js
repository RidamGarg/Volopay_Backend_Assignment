const Analytics = require("../model");

module.exports = async (req, res) => {
  const { item_by, start_date, end_date, n } = req.query;

  try {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    let sortKey;
    if (item_by === "quantity") {
      sortKey = "seats";
    } else if (item_by === "price") {
      sortKey = "amount";
    } else {
      return res.status(400).json({ error: "Invalid item_by parameter" });
    }

    const result = await Analytics.find({
      date: { $gte: startDate, $lte: endDate },
    })
      .sort(`${sortKey}`)
      .limit(n);

    if (result.length > 0) {
      res.json(result[n - 1].software);
    } else {
      res.json("");
    }
  } catch (error) {
    console.log("---Error in API 2---" + error);
    res.status(500).json({ error: "An error occurred" });
  }
};
