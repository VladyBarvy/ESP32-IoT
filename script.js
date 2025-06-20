const AIO_USERNAME = process.env.AIO_USERNAME;
const FEED = "led-control";

async function sendCommand(value) {
  await fetch(`/api/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value })
  });
}

document.getElementById("on").onclick = () => sendCommand("ON");
document.getElementById("off").onclick = () => sendCommand("OFF");
