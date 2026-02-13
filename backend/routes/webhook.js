const { calls } = require("../store");

module.exports = (request, result) => {
  const { callId, status } = request.body;

  const call = calls.find((c) => c.id === callId);

  if (!call) {
    return result.status(404).json({ error: "Call not found" });
  }

  call.status = status;

  result.json({ message: "Status updated" });
};
