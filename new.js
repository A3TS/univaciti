const axios = require('axios');

test('API Test', async () => {
  const response = await axios.get(process.env.API_URL);
  expect(response.status).toBe(200);
});
