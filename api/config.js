export default function handler(req, res) {
  // Возвращаем только необходимые данные
  res.status(200).json({
      username: process.env.ADAFRUIT_IO_USERNAME,
      key: process.env.ADAFRUIT_IO_KEY
  });
}
