const axios = require('axios');
const assert = require('assert');

describe('API Test', () => {
  it('should return a 254 status code', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    assert.strictEqual(response.status, 254);
  });
});
