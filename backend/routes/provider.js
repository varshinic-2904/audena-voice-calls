const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/send-call", (request, result) => {
  const { callId } = request.body;

  // Simulate async external processing
  setTimeout(() => {
    const status = Math.random() > 0.2 ? "completed" : "failed";

    axios.post("http://localhost:4000/webhook/call-status", {
      callId,
      status,
    });
  }, 3000);

  result.json({ message: "Call sent to provider" });
});

module.exports = router;
