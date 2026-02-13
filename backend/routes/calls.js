const express = require("express");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { calls } = require("../store");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * Create a call
 */
router.post("/", auth, async (request, result) => {
  const { customerName, phoneNumber, workflow } = request.body;

  if (!customerName || !phoneNumber || !workflow) {
    return result.status(400).json({ error: "Missing fields" });
  }

  const newCall = {
    id: uuidv4(),
    customerName,
    phoneNumber,
    workflow,
    status: "pending",
    retries: 0,
    createdAt: new Date().toISOString(),
  };

  calls.push(newCall);

  // Simulate sending call to provider
  axios.post("http://localhost:4000/provider/send-call", {
    callId: newCall.id,
  });

  result.status(201).json(newCall);
});

/**
 * List all calls
 */
router.get("/", auth, (request, result) => {
  result.json(calls);
});

module.exports = router;
