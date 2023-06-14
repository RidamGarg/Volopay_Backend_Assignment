const Analytics = require("../model");

async function getDeptPercentage(req, res) {
  try {
    const { start_date, end_date } = req.query;

    let start_date_formatted = new Date(start_date.split(" ").join("+"));
    let end_date_formatted = new Date(end_date.split(" ").join("+"));

    const result = await Analytics.aggregate([
      {
        $match: {
          date: { $gte: start_date_formatted, $lte: end_date_formatted },
        },
      },
      { $group: { _id: "$department", percent: { $sum: "$seats" } } },
    ]);

    // find({date: {$gte: start_date, $lte: end_date}})

    if (!result) {
      res.status(500).json({ message: "500 Server Error" });
    }

    let sum = 0;
    for (let element of result) {
      sum += element.percent;
    }
    for (let element of result) {
      element.percent = ((element.percent / sum) * 100).toFixed(2);
    }

    let finalRes = {};

    for (let element of result) {
      finalRes[element._id] = element.percent;
    }

    res.status(200).json(finalRes);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An error occurred");
  }
}

module.exports = getDeptPercentage;
