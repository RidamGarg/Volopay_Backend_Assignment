require("dotenv").config();
const xlsx = require("xlsx");
const SoftwareModel = require("./model");
const db = require("./db");

db();

// Excel file path
const excelFilePath = "./data.csv";

async function insertData() {
  // clean the db
  await SoftwareModel.deleteMany({});

  try {
    // Read the file
    const workbook = xlsx.readFile(excelFilePath, { cellDates: true });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    await SoftwareModel.insertMany(jsonData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

insertData();
