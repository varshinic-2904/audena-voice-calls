const express = require("express");
const axios = require("axios");
const { calls } = require("../store");

const router = express.Router();
const MAX_RETRIES = 2;

router.post("/send-call", (request, result) => {
  const { callId } = request.body;

  setTimeout(async () => {
    const call = calls.find((c) => c.id === callId);
    if (!call) return;

    const success = Math.random() > 0.3;
    const status = success ? "completed" : "failed";

    if (!success && call.retries < MAX_RETRIES) {
      call.retries += 1;
      call.status = "pending";

      // retry
      axios.post("http://localhost:4000/provider/send-call", {
        callId,
      });
      return;
    }

    axios.post("http://localhost:4000/webhook/call-status", {
      callId,
      status,
    });
  }, 3000);

  result.json({ message: "Call sent to provider" });
});

module.exports = router;
