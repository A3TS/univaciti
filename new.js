const axios = require('axios');

test('API Test', async () => {
  const response = await axios.get(https://pokeapi.co/api/v2/pokemon/ditto);
  expect(response.status).toBe(200);
});
