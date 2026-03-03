export default async function handler(req) {
  // Add CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  return new Response(JSON.stringify({ message: "API Works!" }), {
    status: 200,
    headers,
  });
}
