// logger.js

const axios = require("axios");

const Log = async (stack, level, packageName, message) => {
  try {
    await axios.post("http://4.224.186.213/evaluation-service/logs", {
      stack,
      level,
      package: packageName,
      message,
    });
  } catch (error) {
    console.log("Logging Failed");
  }
};

module.exports = Log;