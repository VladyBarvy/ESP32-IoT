module.exports = (req, res) => {
  res.json({
    username: process.env.ADAFRUIT_IO_USERNAME,
    key: process.env.ADAFRUIT_IO_KEY
  });
};
