const express = require("express");
const cors = require("cors");

const callRoutes = require("./routes/calls");
const providerRoutes = require("./routes/provider");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/calls", callRoutes);
app.use("/provider", providerRoutes);

app.post("/webhook/call-status", require("./routes/webhook"));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
