const axios = require('axios');
const assert = require('assert');

describe('API Test', function () {
    it('should return status code 200', async function () {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        assert.strictEqual(response.status, 200);
    });
});
