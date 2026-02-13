const AUTH_TOKEN = "audena-secret-token";

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token || token !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
