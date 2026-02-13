const BASE_URL = "http://localhost:4000";
const AUTH_TOKEN = "audena-secret-token";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${AUTH_TOKEN}`,
};

export async function createCall(data) {
  const res = await fetch(`${BASE_URL}/calls`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create call");
  }

  return res.json();
}

export async function getCalls() {
  const res = await fetch(`${BASE_URL}/calls`, { headers });

  if (!res.ok) {
    throw new Error("Failed to fetch calls");
  }

  return res.json();
}
