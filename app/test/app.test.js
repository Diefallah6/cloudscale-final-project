const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("GET /health should return healthy status", async () => {
  const server = app.listen(0);

  try {
    const { port } = server.address();

    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(data, { status: "healthy" });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});